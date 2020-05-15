import React from "react";
import DialogsStyles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;


    let dialogsElements = state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
    );

    let messagesElements = state.messagesData.map(mes =>
        <Message message={mes.message} key={mes.id} />
    );

    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={DialogsStyles.dialogs}>

            <div className={DialogsStyles.dialogsItems}>{dialogsElements}</div>

            <div className={DialogsStyles.messages}>
                <div>{messagesElements}</div>


                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'/></div>

                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
