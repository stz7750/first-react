import logo from './logo.svg';
import './App.css';
import InputSample from './InputSample';
import UserList from './UserList';
import { useRef } from 'react';

function App() {
  const  nextId = useRef(4);
  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  }
  
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
    <UserList users={users}></UserList>
  );
}

export default App;
