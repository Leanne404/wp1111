import { Input,message,Tabs, Tag } from 'antd'
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

    const { messages, sendMessage, me, displayStatus, startChat, setMsgSent, msgSent } = useChat()
    const [ chatBoxes , setChatBoxes ] = useState([]) // {label, children, key}
    const [ activeKey, setActiveKey ] = useState('')
    const [ msg, setMsg ] = useState('') // text input body
    const [ modalOpen, setModalOpen ] = useState(false)
    
    const msgFooter = useRef(null)
    const displayChat = (chat) => {
        return(
        chat.length === 0 ? (
            <p style={{ color: '#ccc' }}> No messages... </p>
            ):(
                <ChatBoxWrapper>{
                    chat.map(({ sender, body }, i) => (
                        <Message name={sender} isMe={sender === me} message={body} key={i} />
                    ))}
                <FootRef ref={msgFooter} />
                </ChatBoxWrapper>
            )
    )}

    const updateChatBox = () => {
        const current = messages[(messages.length) - 1]
        if(current){
            const friend = current.to
            const index = chatBoxes.findIndex(({ key }) => key === friend);
            if(index >= 0){
                const newChatBoxes = [...chatBoxes];
                newChatBoxes[index].children = displayChat(messages.filter(({chatBox}) => {
                    const user1 = chatBox.users[0]
                    const user2 = chatBox.users[1]
                    return(((user1 === friend) && (user2 === me)) || ((user1 === me) && (user2 === friend)) || ((friend === me) && (user1 === user2)))
                    }));
                setChatBoxes(newChatBoxes);
            }
        }
    }

    useEffect(() => {
        updateChatBox()
        setMsgSent(false)
        scrollToBottom()
    },[msgSent])

    const extractChat = (friend) => {
        return displayChat
        (messages.filter(({chatBox}) => {
        const user1 = chatBox.users[0]
        const user2 = chatBox.users[1]
        return(((user1 === friend) && (user2 === me)) || ((user1 === me) && (user2 === friend)) || ((friend === me) && (user1 === user2)))
        }));    
    }

    const scrollToBottom = () => {
        msgFooter.current?.scrollIntoView
        ({ behavior: 'smooth', block: "start" });
    };
    
    useEffect(() => {
        setMsgSent(false);
        scrollToBottom();
    }, [msgSent]);
    
    const createChatBox = (friend) => {
        if (chatBoxes.some
           (({key}) => key === friend)) {
                throw new Error(friend + "'s chat box has already opened.");
        }
        const chat = extractChat(friend);
        setChatBoxes([...chatBoxes,
          { label: friend, children: chat,
            key: friend}]);
        setMsgSent(true);
        startChat(me, friend)
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

        <Input.Search
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
            sendMessage({ name: me, to : activeKey, body: msg,  chatBox: {users:[me, activeKey]}, sender: me })
            setMsg('')
            setMsgSent(true)
            }}        
        ></Input.Search>
        </>
    </>
  )
}

export default ChatRoom;