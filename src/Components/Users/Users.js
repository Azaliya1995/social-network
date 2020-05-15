import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {

        props.setUsers([
            {
                id: 1,
                photoURL: "https://placekitten.com/200/300",
                followed: false,
                fullName: "Dima",
                status: "Who am I",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoURL: "https://placekitten.com/200/300",
                followed: true,
                fullName: "Sasha",
                status: "Hi",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoURL: "https://placekitten.com/200/300",
                followed: false,
                fullName: "Masha",
                status: "Lalala",
                location: {city: "Kazan", country: "Russia"}
            },
            {
                id: 4,
                photoURL: "https://placekitten.com/200/300",
                followed: true,
                fullName: "Dasha",
                status: "Hello",
                location: {city: "Kiev", country: "Ukraine"}
            }]);
    }

    return (
        <div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photoURL} className={styles.userPhoto}/>
                            </div>

                            <div>
                                {
                                    user.followed
                                        ? <button onClick={() => {
                                            props.unFollow(user.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            props.follow(user.id)
                                        }}>Follow</button>
                                }
                            </div>
                        </span>

                        <span>
                            <span>
                                <div> {user.fullName} </div>
                                <div> {user.status} </div>

                                <div> {user.location.country} </div>
                                <div> {user.location.city} </div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    )
};

export default Users;