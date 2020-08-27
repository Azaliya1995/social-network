import React from "react";
import DialogsStyles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {AddMessageFormRedux} from "./AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;


    let dialogsElements = state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
    );

    let messagesElements = state.messagesData.map(mes =>
        <Message message={mes.message} key={mes.id}/>
    );

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Redirect to="/login"/>;

    return (
        <div className={DialogsStyles.dialogs}>

            <div className={DialogsStyles.dialogsItems}>{dialogsElements}</div>

            <div className={DialogsStyles.messages}>
                <div>{messagesElements}</div>

                <AddMessageFormRedux onSubmit={addNewMessage}/>

            </div>
        </div>
    );
};

export default Dialogs;