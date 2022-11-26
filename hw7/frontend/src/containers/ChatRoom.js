import { Input,Tabs, Tag } from 'antd'
import { useChat } from './hooks/useChat'
import { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import Title from "../components/Title"
import Message from '../components/Message';
import ChatModal from '../components/ChatModal'


const ChatBoxesWrapper = styled(Tabs)`
    width: 100%;
    height: 300px;
    background: #eeeeee52;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
    overflow: auto;
`;

const ChatBoxWrapper = styled.div`
    height: calc(240px - 36px);
    display: flex;
    overflow: auto;
    flex-direction: column;
`

const FootRef = styled.div`
    height: 20px;
`;


const ChatRoom = () => {

    const { messages, sendMessage, me, displayStatus } = useChat()
    // const [ username, setUsername ] = useState('')
    const [ chatBoxes , setChatBoxes ] = useState([]) // {label, children, key}
    const [ activeKey, setActiveKey ] = useState('')
    const [ msg, setMsg ] = useState('') // text input body
    const [ msgSent, setMsgSent] = useState(false)
    const [ modalOpen, setModalOpen ] = useState(false)
    
    // const msgRef = useRef(null)
    const msgFooter = useRef(null)
    const displayChat = (chat) => (
        chat.length === 0 ? (
            <p style={{ color: '#ccc' }}> No messages... </p>
            ):(
                <ChatBoxWrapper>{
                    chat.map(({ name, body }, i) => (
                        <Message name={name} isMe={name === me} message={body} key={i} />
                    ))}
                <FootRef ref={msgFooter} />
                </ChatBoxWrapper>
            )
    )

    // const renderChat = (chat) => {
    //     chat = displayChat(chat)
    //     //把要顯示的訊息包成一個 div 然後傳給 chat 再把 chat 傳給 chatBoeses
    //     //chatBoxes[0].children = chat
    //     console.log("me",me)
    //     console.log("chat",chat)
    //     return chat
    //     // console.log("box",chatBoxes[0].label)
    // }; // 產生 chat 的 DOM nodes

    const extractChat = (friend) => {
        return displayChat
        (messages.filter(({name, body}) => ((name === friend) || (name === me))));
    }

    const scrollToBottom = () => {
        msgFooter.current?.scrollIntoView
        ({ behavior: 'smooth', block: "start" });
    };
    
    useEffect(() => {
        scrollToBottom();
        console.log("sent effect", msgSent)
        setMsgSent(false);
    }, [msgSent]);
    
    const createChatBox = (friend) => {
        if (chatBoxes.some
           (({key}) => key === friend)) {
                throw new Error(friend + "'s chat box has already opened.");
        }
        const chat = extractChat(friend);
        console.log("create chat", chat)
        setChatBoxes([...chatBoxes,
          { label: friend, children: chat,
            key: friend }]);
        setMsgSent(true);
        return friend;
    };    
    
    const removeChatBox = (targetKey, activeKey) => {
        const index = chatBoxes.findIndex
        (({key}) => key === activeKey);
        const newChatBoxes = chatBoxes
        .filter(({key}) => key !== targetKey);
        setChatBoxes(newChatBoxes);
        return(
            activeKey?
                activeKey === targetKey?
                    index === 0?
                    '' : chatBoxes[index - 1].key
                : activeKey
            : '')
    };
 

  return (
    <>
        <Title name = {me}/>
        <>
        <ChatBoxesWrapper
            tabBarStyle={{height: '36px'}}
            type="editable-card"
            activeKey={activeKey}
            onChange={(key) => {
                setActiveKey(key)
                extractChat(key)
                console.log("key",key)
            }}
            onEdit={(targetKey, action) => {
                if (action === 'add') setModalOpen(true);
                else if (action === 'remove') {
                setActiveKey(removeChatBox(targetKey, activeKey));
            } }}
            items={chatBoxes}
        />
        <ChatModal
            open={modalOpen}
            onCreate={({ name }) => {
                setActiveKey(createChatBox(name));
                extractChat(name);
                setModalOpen(false);
            }}
            onCancel={() => { setModalOpen(false);}}
        />

        {/* <ChatBoxesWrapper 
            tabBarStyle={{height: '36px'}}
            type="editable-card"
            activeKey={activeKey}
            onChange={(key) => {
                setActiveKey(key)
                extractChat(key)
            }}
            onEdit={(targetKey, action) => {
                if (action === 'add') setModalOpen(true);
                else if (action === 'remove') {
                  setActiveKey(removeChatBox(targetKey, activeKey));
            } }}
            items={chatBoxes}
        >
            <ChatBoxWrapper>
                {displayMessages()}
                <FootRef ref={msgFooter} />
            </ChatBoxWrapper>
        </ChatBoxesWrapper>
        <ChatModal
            open={modalOpen}
            onCreate={({ name }) => {
                setActiveKey(createChatBox(name));
                extractChat(name);
                setModalOpen(false);
            }}
            onCancel={() => { setModalOpen(false);}}
        /> */}


            {/* <Input
                onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    msgRef.current.focus()
                }}}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginBottom: 10 }}
            ></Input> */}

        <Input.Search
            //ref={msgRef}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            enterButton="Send"
            placeholder="Type a message here..."
            onSearch={(msg) => {           
            if (!msg) {
                displayStatus({
                type: 'error',
                msg: 'Please enter message.'
                })
                return
            }
            else if(activeKey === ''){
                displayStatus({
                    type: 'error',
                    msg: 'Please add a chatbox first.'
                    })
                return
            }
            console.log("b sent",msgSent)
            sendMessage({ name: me, body: msg })
            setMsg('')
            setMsgSent(true)
            console.log("a sent",msgSent)
            }}        
        ></Input.Search>
        </>
    </>
  )
}

export default ChatRoom;


// const displayStatus = (s) => {
//     if (s.msg) {
//     const { type, msg } = s;
//     const content = {
//         content: msg, duration: 0.5 }
//     switch (type) {
//         case 'success':
//         message.success(content)
//         break
//         case 'error':
//         default:
//         message.error(content)
//     break
//     }
// }}
    
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
    //   <ChatBoxWrapper>
    //       {messages.length === 0 ? (
    //       <p style={{ color: '#ccc' }}> No messages... </p>
    //       ):(
    //       messages.map(({ name, body }, i) => (
    //           <p className="App-message" key={i}>
    //           <Tag color="blue">{name}</Tag> {body}
    //           </p>
    //       )) )}
    //       <FootRef ref={msgFooter} />
    //   </ChatBoxWrapper>

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