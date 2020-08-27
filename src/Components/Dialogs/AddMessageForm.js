import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {minLengthCreator, required} from "../../utils/validators/validators";
import React from "react";


const minLength2 = minLengthCreator(2);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageBody'}
                       component={Textarea}
                       placeholder='Enter your message'
                       validate={[required, minLength2]}
                /></div>

            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);