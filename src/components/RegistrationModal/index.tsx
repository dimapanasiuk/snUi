import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { useDispatch } from "react-redux";
import { LOGIN_AC } from "../../redux/constants";

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../mutations';

const RegistrationModal = () => {
  const dispatch = useDispatch();

  const [newUser] = useMutation(CREATE_USER)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [age, setAge] = useState<number>(0)

  const addUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    newUser({
      variables: {
          input: {
              id: Date.now(), username, age, password, email
          }
      }
    }).then(({data}: any) => {
      const {id, username, password, email} = data?.createUser;
      dispatch({type: LOGIN_AC, data: {id, username, password, email}});
      setUsername('');
      setAge(0);
      setEmail('');
      setPassword('');
    })
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (): void => setIsModalVisible(true);
  const handleOk = (): void => setIsModalVisible(false);
  const handleCancel = (): void => setIsModalVisible(false);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Registration
      </Button>

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <form action="">
        <input type="text" value ={username} placeholder='username' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
        <input type="text" value ={password} placeholder='password' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/> 
        <input type="text" value ={email} placeholder='email' onChange={(e: React.FocusEvent<HTMLInputElement>) => setEmail(e.target.value)}/> 
        <input type="number" value ={age} onChange={e => setAge(+e.target.value)}/>

        <div>
          <button onClick={(e: React.MouseEvent<HTMLButtonElement>)=> addUser(e)}>Create</button>
        </div>
      </form>
      </Modal>
    </>
  );
};

export default RegistrationModal;
