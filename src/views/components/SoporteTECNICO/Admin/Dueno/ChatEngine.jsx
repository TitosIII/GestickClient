import { useEffect, useState } from "react"; 
import {ChatEngineWrapper, Socket, ChatFeed} from 'react-chat-engine';

const ChatEngine = props => {
    const [showChat, setShowChat] = useState(true)

    useEffect(() => {
        if (props.visible) {
            setTimeout(() => {
                setShowChat(true)
            }, 500)
        }
    })

    return (
        <div
            className='transition-5'
            style={{
                ...styles.chatEngineWindow,
                ...{
                    height: props.visible ? '100%' : '0px',// 
                    zIndex: props.visible ? '100' : '0'// 
                }
            }}
        >
            
            {
                showChat &&
                <ChatEngineWrapper>
                    <Socket
                        projectID="bc96a808-d9bd-495e-894d-3d17f303f8bc"
                        userName=  {props.user.email}
                        userSecret= {props.user.email}
                    />
                    <ChatFeed activeChat=  {props.chat.id}
                    />
                </ChatEngineWrapper>
            }
        </div>
    )
}

export default ChatEngine;

const styles = {
    chatEngineWindow: {
        width: '100%',
        backgroundColor: '#fff',
    }
}