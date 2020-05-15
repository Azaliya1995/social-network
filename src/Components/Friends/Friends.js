import React from "react";
import FriendItem from "./FriendItem";

const Friends = props => {
    let friendsElements = props.store.friends.map(friend =>
        <FriendItem name={friend.friendName} id={friend.id} key={friend.id} />
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