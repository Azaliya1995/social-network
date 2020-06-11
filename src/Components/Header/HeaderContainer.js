import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AuthAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        AuthAPI.auth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setAuthUserData(id, email, login);
                //data.data - стандартная структура axios, data(второй раз) т.к. в properties данные тоже называются data
            }
        });
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

}); //функция принимает state, возвращает объект

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);