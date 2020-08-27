import React from "react";
import Profile from "../Profile";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    updateStatusThunkCreator
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        console.log(this.props);
        let userId = this.props.match.params.userId;
        if (!userId) {

            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose(connect(mapStateToProps, {
    getUserProfile: getUserProfileThunkCreator,
    getStatus: getStatusThunkCreator,
    updateStatus: updateStatusThunkCreator
}), withRouter)(ProfileContainer);