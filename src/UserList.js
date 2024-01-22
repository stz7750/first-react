import React from 'react';


function User({user}) {
    return (
        <div>
             <div>
                <b>{user.username}</b> <span>{user.email}</span>
            </div>
        </div>
    );
}


function UserList({users}) {
    return (
        <div>
           {
            users.map(
                user => (<User user={user} key={user.id}></User>)
            )
           }
        </div>
    );
}

export default UserList;