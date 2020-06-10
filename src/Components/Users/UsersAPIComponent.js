import React from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {usersAPI} from "../../api/api";

class UsersAPIComponent extends React.Component { //контейнерная API компонента, делает ajax запрос

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
                .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);
            });
    };

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                />
            }
        </>
    }
}

export default UsersAPIComponent;