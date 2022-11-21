import { useState } from "react";
 const useChat = () => {
   const [messages, setMessages] = useState([]);
   const [status, setStatus] = useState({});
   const client = new WebSocket('ws://localhost:4000')
   const sendData = async (data) => {
    await client.send(JSON.stringify(data));
    }

   const sendMessage = (payload) => {
    setMessages([...messages, payload])
    // setStatus({
    //     type: "success",
    //     msg: "Message sent." });
    //   console.log(msg);
    // update messages and status
    sendData(["input", payload]);
    console.log(payload);
}
return {
     status, messages, sendMessage
  };
 };
 export default useChat;