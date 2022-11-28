import React,{ useState, useEffect, useContext } from "react";
import { message } from 'antd'

const LOCALSTORAGE_KEY = "save-me";
const savedMe = localStorage.getItem(LOCALSTORAGE_KEY);

const ChatContext = React.createContext({
    status: {},
    me: "",
    signedIn: false,
    messages: [],
    startChat: () => {},
    sendMessage: () => {},
    clearMessages: () => {}
});

const client = new WebSocket('ws://localhost:4000')

const sendData = async (data) => {
    await client.send(JSON.stringify(data));
}

client.onopen = () => {
    sendData({
        type: 'INIT',
        payload: {} 
    })
    console.log('Backend socket server connected!')}

const ChatProvider = (props) => {
    const [status, setStatus] = useState({});
    const [me, setMe] = useState(savedMe || "");
    const [signedIn, setSignedIn] = useState(false);
    const [messages, setMessages] = useState([]);
    const [msgSent, setMsgSent]= useState(true);

    client.onmessage = (byteString) => {
        const [type, payload] = JSON.parse(byteString.data);
        switch (type) {
            case "CHAT": {
                setMessages(payload); 
                break; 
            }
            
            case "MESSAGE": {
                // setMessages((preMessage) => [...preMessage, payload]) // 有問題
                break;
            }
            
            // case "status":{
            //     setStatus(payload); break;
            // }
            // case "init": {
            //     setMessages(payload);
            //     break; 
            // }
            // case "cleared": {
            //     setMessages([]);
            //     break;
            // }
            default: break;
        }

    }

    const startChat = (name, to) => {
        console.log("name",name, "to",to)
        if(!name ) throw new Error('Name required.');
        if(!to) throw new Error("to required!")
        sendData({
            type: 'CHAT',
            payload: { name, to }
        })
    }


    const sendMessage = (data) => {
        const name = data.name
        const to = data.to
        const body = data.body
        console.log("name",name, "to",to, "body",body)
        if(!name ) throw new Error('Name required.')
        if(!to) throw new Error('to required.')
        if(!body) throw new Error('body required.')
        sendData({
            type: 'MESSAGE',
            payload: { name, to , body} 
        })
        //setMsgSent(true)
    }


    const clearMessages = () => {
        sendData(["clear"]);
    };

    const displayStatus = (s) => {
        if (s.msg) {
        const { type, msg } = s;
        const content = {
            content: msg, duration: 0.5 }
        switch (type) {
            case 'success':
            message.success(content)
            break
            case 'error':
            default:
            message.error(content)
        break
        }
    }}

    useEffect(() => {
        if (signedIn) {
          localStorage.setItem(LOCALSTORAGE_KEY, me);
        }
    }, [me, signedIn]);

    
    return (
      <ChatContext.Provider
        value={{
          status, 
          me, 
          signedIn, 
          messages, 
          setMe, 
          setSignedIn,
          startChat,
          sendMessage, 
          clearMessages, 
          displayStatus,
          setMsgSent,
          msgSent,
    }}
        {...props}
      />
); };
 

const useChat = () => useContext(ChatContext);
export { ChatProvider, useChat };