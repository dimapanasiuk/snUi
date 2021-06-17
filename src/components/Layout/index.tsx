import {useEffect, useState} from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { useQuery } from '@apollo/client';
import { connect } from "react-redux";

import Header from '../Header';
import CreateTodo from '../Todo';
import { GET_LOGIN_INFO } from '../../query/user';
// import { GET_ONE_USER } from '../../query/user';
const { Content } = Layout;

const MainLayout = ({loginData}: any) => {

console.log({loginData});
  // const {data, loading} = useQuery(GET_ONE_USER, {
  //   variables: {
  //     id: 1
  //   }
  // });

  const {data, loading} = useQuery(GET_LOGIN_INFO, {
    variables: {
      input: {
        username: loginData?.username,
        password: loginData?.password,
      }
    }
  });
  
  const arr : Array<any> = [];

  const [userData , setUserData] = useState<any>({});

  useEffect(() => {
    if(data?.getLoginData) {
      setUserData(data.getLoginData);
    }
  }, [data]);

  return (
    <Layout>
        <Header />
    <Layout>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <h1>{userData?.username}</h1>
          <CreateTodo todos={arr}/>
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
}

const mapStateToProps = (state: any) => ({
  loginData: state.login,
 });

export default connect(mapStateToProps)(MainLayout);
