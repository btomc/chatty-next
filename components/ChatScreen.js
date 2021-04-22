import styled from 'styled-components'
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router' 
import { Avatar, IconButton } from '@material-ui/core'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { useCollection } from 'react-firebase-hooks/firestore'
import Message from './Message'

function ChatScreen({ chat, messages}) {
    const [user] = useAuthState(auth)
    const router = useRouter()
    const [messagesSnapshot] = useCollection(db.collection('chats').doc(router.query.id).collection('messages').orderBy('timestamp', 'asc'))

    const showMessages = () => {
        if(messagesSnapshot) {
            return messagesSnapshot.docs.map(message => (
                <Message 
                    key={message.id}
                    user={message.data().user}
                    message={{
                        ...message.data(),
                        timestamp: message.data().timestamp?.toDate().getTime(),
                    }}
                />
            ))
        }
    }

    return (
        <Container>
            <Header>
                <Avatar />
                <HeaderInfo>
                    <h3>Recipient Email</h3>
                    <p>Last seen ...</p>
                </HeaderInfo>
                <HeaderIcons>
                    <IconButton>
                        <AttachFileIcon style={{ color: '#fff'}} />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon style={{ color: '#fff'}} />
                    </IconButton>
                </HeaderIcons>
            </Header>

            <MessageContainer>
                {/* show messages */}
                <EndOfMessage />
            </MessageContainer>
        </Container>
    )
}

export default ChatScreen


const Container = styled.div``

const Header = styled.div`
    position: sticky;
    background: #1689cc;
    color: #fff;
    z-index: 100;
    top: 0;
    display: flex;
    padding: 11px;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid whitesmoke;
`

const HeaderInfo = styled.div`
    margin-left: 15px;
    flex: 1;

    > h3 {
        margin-bottom: 3px;
    }

    > p {
        font-size: 14px;
        color: #f7f7f7;
    }
`

const HeaderIcons = styled.div``

const MessageContainer = styled.div``

const EndOfMessage = styled.div``