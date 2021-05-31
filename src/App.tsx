import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_USERS } from './query/user';
import { CREATE_USER } from './mutations';

const App: React.FC = () => {
  const { data, loading, error } = useQuery(GET_ALL_USERS);
  const [newUser] = useMutation(CREATE_USER);
  const [users, setUsers] = useState<any>([]);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [age, setAge] = useState<number>(0);


  useEffect(() => {
    if (!loading) {
      setUsers(data.findAllUser)
    }
  }, [data]);

  const addUser = (e: any) => {
    e.preventDefault();
    
    newUser({
      variables: {username: "test2", age: 12, password: "1234"}
    }).then(({data}) => {
      console.log('promise',data)
    })
  };

  return (
    <>
      <form action="">
        <input type="text" value ={username} onChange={e => setUsername(e.target.value)}/>
        <input type="text" value ={password} onChange={e => setPassword(e.target.value)}/>
        <input type="number" value ={age} onChange={e => setAge(+e.target.value)}/>

        <div>
          <button onClick={e=> addUser(e)}>Create</button>
          <button>Get Users</button>
        </div>
      </form>
      <div>
        {users.map((i: { name: string; }) => <h1>{i.name}</h1>)}
      </div>
    </>
  )
}

export default App;
