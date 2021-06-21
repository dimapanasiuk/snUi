import { useState } from 'react';
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

  const { data: lolData, loading } = useQuery(GET_LOGIN_INFO, {
    variables: {
      input: {
        username, password
      }
    }
  });

  const loginHandler = (e: any) => {
    e.preventDefault();
    const data = { username, password, email: '' };
    console.log(lolData?.getLoginData);
    if (lolData?.getLoginData) {
      dispatch({ type: LOGIN_AC, data });
    }
  }

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
        {lolData?.getLoginData ? (lolData?.getLoginData?.username || username) : 'login'}
      </Button>

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <form action="">
          <input type="text" value={username} placeholder='username' onChange={e => setUsername(e.target.value)} />
          <input type="text" value={password} placeholder='password' onChange={e => setPassword(e.target.value)} />

          <div>
            <button onClick={e => loginHandler(e)}>Login</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default LoginModal;
