import {connect} from "react-redux";
import {
    follow,
    unFollowSuccess,
    setCurrentPage, toggleFollowingProgress, getUsers, unFollow
} from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => { //настраивает данные которые мы берем из state(store) для connect
    return {
        //с помощью mapStateToProps в качестве пропсов в функциональную комп Users придет users (значением будут пользователи из state)
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unFollow,
        unFollowSuccess,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
        //диспачим не сам ActionCreator, а его вызов (connect из AC сам создаст коллбэк, который внутри задиспачит то, что вернет AC)
    })
)(UsersAPIComponent);

/*
22-29
const mapDispatchToProps = (dispatch) => {
    //функция, которая служит для того, чтобы передавать дочерней презентационной компоненте (для connect) коллбэки
    //передает props из store в UsersAPIComponent, а она уже передает их в презентационную компоненту
    return {
        follow: (userId) => {  //props: follow
            dispatch(followActionCreator(userId))
        },
        unFollow: (userId) => { //props: unFollow
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => { //props: setUsers
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber) => { //props: setCurrentPage
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => { //props: setTotalUsersCount
            dispatch(setUsersTotalCountActionCreator(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching)) //диспачим не сам ActionCreator, а его вызов
        }
    }
};
 */