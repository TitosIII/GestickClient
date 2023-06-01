import { useState } from "react"

import { styles } from "../styles";

import EmailForm from "./EmailForm";
import ChatEngine from "./ChatEngine";

const SupportWindow = props => {
    const [user, setUser] = useState(null)
    const [chat, setChat] = useState(null)
    console.log(chat)

    return (
        <div
            className='transition-5'
            style={{
                ...styles.supportWindow,
                ...{ opacity: props.visible ? '1' : '0' }
            }}
        >

            {
                user === null || chat === null?
            (
            <EmailForm
                setUser={user => setUser(user)}
                setChat={chat => setChat(chat)}
                visible={user === null || chat === null}
            />)
            :(
                <ChatEngine
                    visible={user !== null && chat !== null}
                    user={user}//"Gestick_CANO"
                    chat={chat} //"ca-df9783d5-05c7-469a-ab2b-fdfd4ba86065"
                />)
            }
        </div>
    )
}

export default SupportWindow; 