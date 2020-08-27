import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";


let Users = (props) => { //презентационная компонента

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span className={props.currentPage === page && styles.selectedPage}
                                 onClick={(event) => { //event - нигде не используем, но пишем, т.к. это обработчик событий
                                     props.onPageChanged(page);
                                 }}>{page}</span>
                })}
            </div>

            {
                props.users.map(user =>
                    <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small ? user.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                                     </NavLink>
                            </div>

                            <div>
                                {
                                    user.followed
                                        ? <button disabled={props.followingInProgress
                                            .some(id => id === user.id)}
                                                  onClick={() => { props.unFollow(user.id) }}>Unfollow</button>

                                        : <button disabled={props.followingInProgress
                                            .some(id => id === user.id)}
                                                  onClick={() => { props.follow(user.id) }}>Follow</button>
                                }
                            </div>
                        </span>

                        <span>
                            <span>
                                <div> {user.name} </div>
                                <div> {user.status} </div>

                                <div> {"user.location.country"} </div>
                                <div> {"user.location.city"} </div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    )
};

export default Users;