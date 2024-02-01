import React,{useEffect} from 'react';

function User({ user, onRemove, onToggle }) {
  useEffect((/* 첫번째 파라미터에는  함수를 등록하고*/)=>{
    /* deps에 아무것도 없다면 처음 마운트 될 때만 가능하다.
    간단하게 useEffect 사용 시 deps 배열에 어떤 것들 넣을지에 따라서 
    확인 가능한게 달라진다.
    배열에 아무것도 넣지 않으면 변경된 props 값을 전부 확인
    배열에 하나만 등록한다면 그 배열에 등록된 값이 변경될 때 마다 확인
    배열 자체가 없다면 마운트 될 때 한번. */
    console.log("user 값이 설정")
    console.log(user);
    return (/* 조회하고 있는 값이 언마운트 될 시에  */) => {
      console.log("user 값이 바뀌기 전")
      console.log(user)
    }
  },[user/* 두번째 deps에는 배열을 등록한다. */]);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;