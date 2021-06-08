import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';

import { useQuery } from '@apollo/client';
import { GET_LOGIN_INFO } from '../../query/user';

const LoginModal = () => {
    const {data, loading} = useQuery(GET_LOGIN_INFO, {
      variables: {
        input: {
          username: "test",
          password: "test"
        }
      }
    });

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  useEffect(() => {
    if (!loading) {
      console.log(data);
    }
  }, [data]);
  
  const loginHandler = (e: any) => {
    e.preventDefault()
    console.log('test');
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
        Login
      </Button>

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <form action="">
        <input type="text" value ={username} placeholder='username' onChange={e => setUsername(e.target.value)}/>
        <input type="text" value ={password} placeholder='password' onChange={e => setPassword(e.target.value)}/> 

        <div>
          <button onClick={e=> loginHandler(e)}>Login</button>
        </div>
      </form>
      </Modal>
    </>
  );
};

export default LoginModal;
