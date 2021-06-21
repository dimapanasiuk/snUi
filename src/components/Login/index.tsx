import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { useDispatch } from "react-redux";
import { useQuery } from '@apollo/client';
import { GET_LOGIN_INFO } from '../../query/user';
import { LOGIN_AC } from "../../redux/constants";

const LoginModal = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { data: lolData, } = useQuery(GET_LOGIN_INFO, {
    variables: {
      input: {
        username, password
      }
    }
  });

  const loginHandler = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    e.preventDefault();
    const data = { username, password, email: '' };
    if (lolData?.getLoginData) {
      dispatch({ type: LOGIN_AC, data });
    }
  }

  const showModal = (): void => setIsModalVisible(true);
  const handleOk = (): void => setIsModalVisible(false);
  const handleCancel = (): void => setIsModalVisible(false);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {lolData?.getLoginData ? (lolData?.getLoginData?.username || username) : 'login'}
      </Button>

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <form action="">
          <input type="text" value={username} placeholder='username' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
          <input type="text" value={password} placeholder='password' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />

          <div>
            <button onClick={(e: React.MouseEvent<HTMLButtonElement> ) => loginHandler(e)}>Login</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default LoginModal;
