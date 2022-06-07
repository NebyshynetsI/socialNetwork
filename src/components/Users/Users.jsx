import React from "react";
import style from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
            <div>
                {pages.map(p => {
                    return <span className={p === props.activePage && style.selectedPage} onClick={(e) => props.onPageClick(p)} >{p}</span>
                })}
            </div>
            {
                props.userList.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img className={style.ava} src={u.photos.small != null ? u.photos.small : userPhoto}></img>
                            </NavLink>                            
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingIsDisabled.some(id => id === u.id)}
                                    onClick={(e) => {
                                        props.unfollowUser(u.id);
                                    }
                                    }> Unfollow</button>
                                : <button disabled={props.followingIsDisabled.some(id => id === u.id)}
                                    onClick={(e) => {
                                        props.followUser(u.id)
                                    }
                                    }> Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {"u.location.city"}
                            </div>
                            <div>
                                {"u.location.country"}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>    
};

export default Users;