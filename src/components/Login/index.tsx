import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import { connect, useDispatch  } from "react-redux"; 
import { useQuery } from '@apollo/client';
import { GET_LOGIN_INFO } from '../../query/user';
import {loginAc} from "../../redux/actions/loginActions";
import { LOGIN_AC } from "../../redux/constants/counterConstants";

const LoginModal = ({loginData}: any) => {
  const [username, setUsername] = useState<string>(loginData?.username);
  const [password, setPassword] = useState<string>(loginData?.password);

  const [dataLogin, setDataLogin  ] =useState<any>({
    id: "",
    username: "",
    password: ""});

    const dispatch = useDispatch();

  const isLogin = !!(loginData?.username && loginData?.password || dataLogin?.username && dataLogin?.password);

  const {data, loading} = useQuery(GET_LOGIN_INFO, {
    variables: {
      input: {
        // username: dataLogin?.username,
        // password: dataLogin?.password
        username: 'test',
        password: 'test',
      }
    }
  });

  useEffect(() => {
    if (!loading) {
      // console.log(data);
    }
  }, [data]);
  
  const loginHandler = (e: any) => {
    e.preventDefault();
    const data = {username, password, email: ''};
    setDataLogin(data);
    dispatch({type: LOGIN_AC, data});
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
        {isLogin ? (loginData?.username || username) : 'login'}
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

const mapStateToProps = (state: any) => {
  return  {
  loginData: state.login,
 }
};
 
 const mapDispatchToProps = { loginAc };

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
