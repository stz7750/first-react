import React from 'react';


function User({user , onRemove , onToggle}) {
    const {username, email, id, active} = user;
    return (
        <div>
             <div>
                <b style={{
                    color: active ? 'green' : 'black',
                    cursor : 'pointer'
                }}
                onClick={() => onToggle(id)}
                >
                    {username}
                </b>
                &nbsp;
                <span>{email}</span>
                <button onClick={() => onRemove(id)}>삭제</button>
            </div>
        </div>
    );
}
 

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
           {
            users.map(
                user => (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}></User>)
            )
           }
        </div>
    );
}

export default UserList;