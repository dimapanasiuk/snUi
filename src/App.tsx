import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from './query/user';

const App: React.FC = () => {
  const { data, loading, error } = useQuery(GET_ALL_USERS);
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    if (!loading) {
      console.log('data', data.findAllUser);
      setUsers(data.findAllUser)
    }
  }, [data]);

  return (
    <>
      <form action="">
        <input type="text" />
        <input type="number" />
        <div>
          <button>Create</button>
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
