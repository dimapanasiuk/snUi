import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';

import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_USERS, GET_ONE_USER, GET_LOGIN_INFO } from '../../query/user';
import { CREATE_USER } from '../../mutations';

const RegistrationModal = () => {
    const { data, loading, error } = useQuery(GET_ALL_USERS);
    const {data:oneUser, loading: loadingOneUser} = useQuery(GET_ONE_USER, {
      variables: {
          id: 1
      }
    });

    const {data:loginUser, loading: loadingUser} = useQuery(GET_LOGIN_INFO, {
      variables: {
        input: {
          username: "Masonovv"      }
      }
    });

    const [newUser] = useMutation(CREATE_USER)
    const [users, setUsers] = useState<any>([])
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')
  
    const [age, setAge] = useState<number>(0)

    useEffect(() => {
      if (!loading) {
        // setUsers(data.findAllUser)
      }
    }, [data]);
  
    const addUser = (e: any) => {
      e.preventDefault()
      newUser({
          variables: {
              input: {
                  username, age, password, email
              }
          }
      }).then(({data}) => {
          console.log(data)
          setUsername('');
          setAge(0);
          setEmail('');
          setPassword('');
      })
  }
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Registration
      </Button>

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <form action="">
        <input type="text" value ={username} placeholder='username' onChange={e => setUsername(e.target.value)}/>
        <input type="text" value ={password} placeholder='password' onChange={e => setPassword(e.target.value)}/> 
        <input type="text" value ={email} placeholder='email' onChange={e => setEmail(e.target.value)}/> 
        <input type="number" value ={age} onChange={e => setAge(+e.target.value)}/>

        <div>
          <button onClick={e=> addUser(e)}>Create</button>
          <button>Get Users</button>
        </div>
      </form>
      <div>
        {users.map((i: { name: string; }) => <h1>{i.name}</h1>)}
      </div>
      </Modal>
    </>
  );
};

export default RegistrationModal;