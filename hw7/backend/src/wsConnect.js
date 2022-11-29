// import Message from "../models/message"
import { MessageModel, UserModel, ChatBoxModel } from "../models/chatbox";

const makeName = (name, to) => { return [name, to].sort().join('_'); };
const validateChatBox = async (name, participants) => {
    let box = await ChatBoxModel.findOne({ name });
    if (!box)
        box = await new ChatBoxModel({ name, users: participants }).save();
    return
};

const createMsg = async(name, to, body, chatName) => {
    let box = await ChatBoxModel.findOne({ name:chatName });
    if (box){
        let msg = await new MessageModel({ chatBox :box._id.toString(), sender: name, body: body }).save();
        await ChatBoxModel.updateMany(
            { _id: msg.chatBox.toString()},
            {$push:{"messages":msg._id.toString()}})
    }
    return
}

const sendData = (data, ws) => { ws.send(JSON.stringify(data)); }
const sendStatus = (payload, ws) => { sendData(["status", payload], ws); }
const broadcastMessage = (wss, data, status) => {
    wss.clients?.forEach((client) => {
      sendData(data, client);
      sendStatus(status, client);
    });
}

export default {
    onMessage: (ws,wss) => (
        async (byteString) => {
        const { data } = byteString
        const dataParse = JSON.parse(data)
        const type = dataParse.type
        const payload = dataParse.payload
        const { name, to , body } = payload
        const chatName =  makeName(name, to)
        console.log('ws connect:41', type, payload)
        switch (type) {
            case "CHAT": {
                const participants = [name, to]
                validateChatBox(chatName, participants)
                MessageModel.find().populate("chatBox")
                .exec((err, res) => {
                    if (err) throw err;
                    // initialize app with existing messages
                  sendData(["CHAT", res], ws);
                });

                break;
            }

            case "INIT":{
                MessageModel.find().populate("chatBox")
                .exec((err, res) => {
                    if (err) throw err;
                    // initialize app with existing messages
                    console.log("res init",res)
                  sendData(["CHAT", res], ws);
                });
            }

            case "MESSAGE":{
                // Save payload to DB
                createMsg(name, to, body, chatName)
                // Respond to client
                sendData(['MESSAGE', [payload]], ws);
                // sendStatus({
                //     type: 'success',
                //     msg: 'Message sent.'
                // }, ws);

                // broadcastMessage(
                //     wss,
                //     ['MESSAGE', [payload]],
                //     {
                //         type: 'success',
                //         msg: 'Message sent.'
                //     }
                // )
                break;
            }
            
            // case 'clear': {
            //     Message.deleteMany({}, () => {
            //         broadcastMessage(
            //             wss,
            //             ['cleared'],
            //             {
            //                 type: 'info',
            //                  msg: 'Message cache cleared.
            //             }
            //         )
            //         break
            //     })
            // }
              
        }
    }
)}