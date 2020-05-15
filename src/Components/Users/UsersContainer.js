import React from "react";
import {connect} from "react-redux";
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => { //настраивает данные которые мы берем из state для connect
    return {
        users: state.usersPage.users
        //с помощью mapStateToProps в качестве пропсов в функциональную комп Users придет users (значением будут пользователи из state)
    }
};

const mapDispatchToProps = (dispatch) => {
    //функция, которая служит для того, чтобы передавать дочерней презентационной компоненте (для connect) коллбэки
    return {
        follow: (userId) => {  //props: follow
            dispatch(followActionCreator(userId))
        },
        unFollow: (userId) => { //props: unFollow
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => { //props: setUsers
            dispatch(setUsersActionCreator(users))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users); //законнекть Users к store, коннект возвращает новую контейнерную компоненту

export default UsersContainer;