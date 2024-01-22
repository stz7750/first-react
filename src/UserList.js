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


function UserList(props) {
    const users = [
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com'
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com'
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com'
        }
      ];
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