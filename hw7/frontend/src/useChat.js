import { useState } from "react";

 const useChat = () => {
   const [messages, setMessages] = useState([]);
   const [status, setStatus] = useState({});
   const sendMessage = (payload, msg) => {
     setMessages([...messages, payload]);
     setStatus({
          type: "success",
          msg: "Message sent." });
     console.log(msg);
    // update messages and status
     console.log(payload);
}

return {
     status, messages, sendMessage
  };
 };
 export default useChat;