import { useState } from "react";
const client = new WebSocket('ws://localhost:4000')

 const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [status, setStatus] = useState({});
    
    const sendData = async (data) => {
        await client.send(JSON.stringify(data));
    }

    const sendMessage = (payload) => {
    sendData(["input", payload]);
    console.log(payload);
    }

    client.onmessage = (byteString) => {
        const { data } = byteString;
        const [task, payload] = JSON.parse(data);
        switch (task) { 
            case "output": {
                setMessages(() => [...messages, ...payload]); 
                break; 
            }
            case "status":{
                setStatus(payload); break;
            }
            case "init": {
                setMessages(payload);
                break; 
            }
            default: break;
        }

    }

return {
     status, messages, sendMessage
  };
 };
 export default useChat;