import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => { //настраивает данные которые мы берем из state для connect
    return {
        dialogsPage: state.dialogsPage,
    }
};

const mapDispatchToProps = (dispatch) => { //(для connect) коллбэки, которые мы будем отправлять в презентационную компоненту
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
};


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);