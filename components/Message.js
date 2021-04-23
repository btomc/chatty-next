import styled from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import moment from 'moment'

function Message({ user, message}) {
    const [userLoggedIn] = useAuthState(auth)

    const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver

    return (
        <Container>
            <TypeOfMessage>{message.message}
                <Timestamp>
                {message.timestamp ? moment(message.timestamp).format('LT') : '...'}
                </Timestamp>
            </TypeOfMessage>
        </Container>
    )
}

export default Message

const Container = styled.div``

const MessageElement = styled.p`
    width: fit-content;
    padding: 15px;
    border-radius: 8px;
    margin: 10px;
    min-width: 60px;
    padding-bottom: 26px;
    position: relative;
    text-align: right;
`

const Sender = styled(MessageElement)`
    margin-left: auto;
    /* background: #7fc9f4; */
    background: #76c4f2;
    color: white;
`

const Receiver = styled(MessageElement)`
    text-align: left;
    background: #f7f7f7;
`

const Timestamp = styled.span`
    color: black;
    padding: 10px;
    font-size: 9px;
    position: absolute;
    bottom: 0;
    text-align: right;
    right: 0;
`