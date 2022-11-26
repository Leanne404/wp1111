import Message from "../models/message"
import { MessageModel, UserModel, ChatBoxModel } from "../models/chatbox";

const makeName = (name, to) => { return [name, to].sort().join('_'); };
const validateChatBox = async (name, participants) => {
    let box = await ChatBoxModel.findOne({ name });
    if (!box)
      box = await new ChatBoxModel({ name, users: participants }).save();
    return box.populate
           (["users", {path: 'messages', populate: 'sender' }]);
};
   

const sendData = (data, ws) => { ws.send(JSON.stringify(data)); }
const sendStatus = (payload, ws) => { sendData(["status", payload], ws); }
const broadcastMessage = (wss, data, status) => {
    wss.clients?.forEach((client) => {
      sendData(data, client);
      sendStatus(status, client);
    });
}


export default {
    // initData: (ws) => {
    //     Message.find().sort({ created_at: -1 }).limit(100)
    //       .exec((err, res) => {
    //         if (err) throw err;
    //         // initialize app with existing messages
    //       sendData(["init", res], ws);
    //     }); },


    onMessage: (wss) => (
        async (byteString) => {
        const { data } = byteString
        console.log(data)
        const dataParse = JSON.parse(data)
        const type = dataParse.type
        const payload = dataParse.payload
        console.log("on")
        console.log(type)
        console.log(payload)
        switch (type) {
            case "CHAT": {

                // const { name, body } = payload
                // // Save payload to DB
                // const message = new Message({ name, body })
                // try { await message.save();
                // } catch (e) { throw new Error("Message DB save error: " + e);}
                // // Respond to client
                // broadcastMessage(
                //     wss,
                //     ['output', [payload]],
                //     {
                //         type: 'success',
                //         msg: 'Message sent.'
                //     }
                // )
                // break;
                console.log("chat")
                break;
            }
            case "MESSAGE":{
                const { name, to , body } = payload
                // Save payload to DB
                const user = new UserModel({ name })
                try { await user.save();
                    console.log("save")
                } catch (e) { throw new Error("User DB save error: " + e);}
                // Respond to client
                broadcastMessage(
                    wss,
                    ['output', [payload]],
                    {
                        type: 'success',
                        msg: 'Message sent.'
                    }
                )
                console.log(user)
                console.log("message")
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