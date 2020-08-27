import React from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';

class UsersAPIComponent extends React.Component { //контейнерная API компонента, делает ajax запрос

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                       followingInProgress={this.props.followingInProgress}
                />
            }
        </>
    }
}

export default UsersAPIComponent;