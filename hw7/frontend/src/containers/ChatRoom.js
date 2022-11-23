import { Input,Tag } from 'antd'
import useChat from './hooks/useChat'
import { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import Title from "../components/Title"
import Message from '../components/Message';


const ChatBoxWrapper = styled.div`
    width: 100%;
    height: 300px;
    background: #eeeeee52;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
    overflow: auto;
`;

const FootRef = styled.div`
  height: 20px;
`;


const ChatRoom = () => {

    const { messages, sendMessage, me, displayStatus } = useChat()
    const [ username, setUsername ] = useState('')
    const [ msg, setMsg ] = useState('')
    const [ msgSent, setMsgSent] = useState(false)
    
    const msgRef = useRef(null)
    const msgFooter = useRef(null)
    
    // const displayMessages = () =>{
    //     console.log("display msg", messages)
    //     messages.length === 0 ? (
    //         <p style={{ color: '#ccc' }}> No messages... </p>
    //         ):(
    //         messages.map(({ name, body }, i) => {
    //             console.log(name, body, i, name === me)
    //             return(
    //             <Message name={name} isMe={name === me} message={body} key={i}></Message>
    //         )}) )
    // }
    
    const scrollToBottom = () => {
        msgFooter.current?.scrollIntoView
        ({ behavior: 'smooth', block: "start" });
    };
    
    useEffect(() => {
        scrollToBottom();
        setMsgSent(false);
    }, [msgSent]);
    

  return (
    <>
        <Title name = {me}/>
        <ChatBoxWrapper>
            {messages.length === 0 ? (
            <p style={{ color: '#ccc' }}> No messages... </p>
            ):(
            messages.map(({ name, body }, i) => (
                <p className="App-message" key={i}>
                <Tag color="blue">{name}</Tag> {body}
                </p>
            )) )}
            {/* {displayMessages()} */}
            <FootRef ref={msgFooter} />
        </ChatBoxWrapper>

        <Input
            onKeyDown={(e) => {
            if (e.key === 'Enter') {
                msgRef.current.focus()
            }}}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: 10 }}
        ></Input>
        <Input.Search
            ref={msgRef}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            enterButton="Send"
            placeholder="Type a message here..."
            onSearch={(msg) => {           
            if (!msg || !username) {
                displayStatus({
                type: 'error',
                msg: 'Please enter a username and a message body.'
                })
                return
            }
            sendMessage({ name: username, body: msg })
            setMsg('')
            setMsgSent(true)
            }}        
        ></Input.Search>
    </>
  )
}

export default ChatRoom;


// // const displayStatus = (s) => {
// //     if (s.msg) {
// //     const { type, msg } = s;
// //     const content = {
// //         content: msg, duration: 0.5 }
// //     switch (type) {
// //         case 'success':
// //         message.success(content)
// //         break
// //         case 'error':
// //         default:
// //         message.error(content)
// //     break
// //     }
// // }}
    
// // useEffect(() => {
// //   displayStatus(status)}
// //   , [status])
//



// const { status, messages, sendMessage, me /*, clearMessages*/ } = useChat()
// const [ username, setUsername ] = useState('')
// const [ body, setBody ] = useState('')
// const [ msg, setMsg ] = useState('')
// const [ msgSent, setMsgSent] = useState(false)
// const bodyRef = useRef(null)
// const msgFooter = useRef(null)

// const scrollToBottom = () => {
//   msgFooter.current?.scrollIntoView
//   ({ behavior: 'smooth', block: "start" });
//  };

//   useEffect(() => {
//   scrollToBottom();
//   setMsgSent(false);
//   }, [msgSent]);


// const displayStatus = (s) => {
//   if (s.msg) {
//     const { type, msg } = s;
//     const content = {
//       content: msg, duration: 0.5 }
//     switch (type) {
//       case 'success':
//         message.success(content)
//         break
//       case 'error':
//       default:
//         message.error(content)
//     break
//   }
// }}
  
//   useEffect(() => {
//     displayStatus(status)}
//     , [status])

// return (
//   <>
//       <Title name = {me}/>
//       <ChatBoxWrapper>
//           {messages.length === 0 ? (
//           <p style={{ color: '#ccc' }}> No messages... </p>
//           ):(
//           messages.map(({ name, body }, i) => (
//               <p className="App-message" key={i}>
//               <Tag color="blue">{name}</Tag> {body}
//               </p>
//           )) )}
//           <FootRef ref={msgFooter} />
//       </ChatBoxWrapper>

//       <Input
//           onKeyDown={(e) => {
//           if (e.key === 'Enter') {
//               bodyRef.current.focus()
//           }}}
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={{ marginBottom: 10 }}
//       ></Input>
//       <Input.Search
//           ref={bodyRef}
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//           enterButton="Send"
//           placeholder="Type a message here..."
//           onSearch={(msg) => {           
//           if (!msg || !username) {
//               displayStatus({
//               type: 'error',
//               msg: 'Please enter a username and a message body.'
//               })
//               return
//           }
//           sendMessage({ name: username, body: msg })
//           setBody('')
//           }}        
//       ></Input.Search>
//   </>
// )