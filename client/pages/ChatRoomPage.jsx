import {formatDistance, subDays} from "date-fns";
import React, {useContext, useEffect, useState} from "react";
import {MessagesApiContext} from "../ApiContext/messagesApiContext";
import {useLoading} from "../lib/useLoading";
import {useNavigate} from "react-router-dom";

function MessageCard({message}) {
    const date = new Date(message.dateCreated)
    const timeAgo = formatDistance(subDays(date, 0), new Date(), {addSuffix: true})

    return (
        <div>
            <div>({timeAgo})</div>
            <div><strong> {`[${message.sentBy}]: ${message.message}`}</strong></div>
            <br/>
        </div>
    );
}

export function ChatRoomPage({user}) {
    const [ws, setWs] = useState();
    const [chatLog, setChatLog] = useState([]);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const {createMessage} = useContext(MessagesApiContext)
    const {listMessagesById} = useContext(MessagesApiContext);
    const {loading, error, data} = useLoading(
        async () => await listMessagesById({chatId: 1}),
        []
    );

async function handleSubmit(){
    await createMessage({message: message, sentBy: user.nickName, chatId: 1})
}


function handleNewMessage(event) {
        event.preventDefault();
        const chatMessage = { message, sentBy: user.nickName, chatId: 1 };
        ws.send(JSON.stringify(chatMessage));
        handleSubmit()
        setMessage("");
    }



    useEffect(()  => {
        const ws = new WebSocket(window.location.origin.replace(/^http/, "ws"));
        ws.onmessage = (event) => {
            const { sentBy, message } = JSON.parse(event.data);
            setChatLog((oldState) => [...oldState, { sentBy, message, dateCreated: Date.now() }]);
        };
        setWs(ws);
    }, []);



    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return (
            <div>
                <h1>Error</h1>
                <div id="error-text">{error.toString()}</div>
            </div>
        );
    }


    return (
        <div className={"grid-container section"}>
            <div className={"left section"}>
                <div className={"mid"}>
                    {chatLog.slice(0).reverse().map((chat, index) => (
                        <MessageCard key={index} message={chat} />
                    ))}

                    {data.slice(0).reverse().map((message) => (
                        <div>
                            <MessageCard message={message}/>
                        </div>

                    ))}

                </div>

                <br/>

                <div className={"bottom"}>
                    <form onSubmit={handleNewMessage}>
                        <input
                            autoFocus={true}
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            size="97"
                        />
                        <button>Send</button>
                            <input type={"button"} value={"Back"} onClick={ () => navigate("/")} />
                    </form>
                </div>


            </div>

            <div className={"right section"}>

            </div>

        </div>
    )
}