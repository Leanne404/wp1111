import { useState, useEffect } from "react";
const client = new WebSocket('ws://localhost:4000')
const LOCALSTORAGE_KEY = "save-me";
const savedMe = localStorage.getItem(LOCALSTORAGE_KEY);

 const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [status, setStatus] = useState({});
    const [signedIn, setSignedIn] = useState(false);
    const [me, setMe] = useState(savedMe || "");

    const sendData = async (data) => {
        await client.send(JSON.stringify(data));
    }

    const sendMessage = (payload) => {
    sendData(["input", payload]);
    console.log(payload);
    }

    // const clearMessages = () => {
    //     sendData(["clear"]);
    // };

    useEffect(() => {
        if (signedIn) {
          localStorage.setItem(LOCALSTORAGE_KEY, me);
        }
    }, [me, signedIn]);

    

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
            case "cleared": {
                setMessages([]);
                break;
            }
            default: break;
        }

    }

return {
     status, messages, sendMessage, /*clearMessages,*/  signedIn ,setSignedIn, me, setMe
  };
 };
 export default useChat;