import React from "react";
import DialogsStyles from "../Dialogs.module.css";
import {minLengthCreator} from "../../../utils/validators/validators";

const Message = props => {
  return <div className={DialogsStyles.message}>{props.message}</div>;
};

export default Message;