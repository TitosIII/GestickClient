import { useState } from 'react'
import { styles } from './styles'

const Avatar = props => {

    const [hovered, setHovered] = useState(false)
    console.log(props.style)
    return (
        <div style={props.style}>
            <div
                className='transition-3'
                style={{
                    ...styles.avatarHello,
                    ...{ opacity: hovered ? '1' : '0' }
                }}>
                Hey Somos Gestick
            </div>

            <div
                className='transition-3'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={()=> props.onClick && props.onClick()}
                style={
                    {
                        ...styles.chatWithMeButton,
                        ...{ border: hovered ? '1px solid #f9f0ff' : '4px solid #01a7c2' }
                    }
                }
            />
        </div>
    )
}

export default Avatar
