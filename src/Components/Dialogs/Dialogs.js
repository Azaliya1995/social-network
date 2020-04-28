import React from "react";
import DialogsStyles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    );

    let messagesElements = props.state.messagesData.map(mes =>
        <Message message={mes.message}/>
    );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text});
    };

    return (
        <div className={DialogsStyles.dialogs}>

            <div className={DialogsStyles.dialogsItems}>{dialogsElements}</div>

            <div className={DialogsStyles.messages}>
                <div>{messagesElements}</div>
            </div>
            <div className={DialogsStyles.messageArea}>
            <textarea ref={newMessageElement} value={props.state.newMessageText} onChange={onMessageChange} />
                <button onClick={ addMessage }>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;
