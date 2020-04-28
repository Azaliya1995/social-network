import React from "react";
import FriendItem from "./FriendItem";

const Friends = props => {
    let friendsElements = props.state.friends.map(friend =>
        <FriendItem name={friend.friendName} id={friend.id}/>
    );
console.log(props);
    return (
        <div>
            <div>
                {friendsElements}
            </div>
        </div>
    );
}

export default Friends;