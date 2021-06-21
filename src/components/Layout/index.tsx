import { useEffect, useState } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { useQuery } from '@apollo/client';
import { connect } from "react-redux";

import Header from '../Header';
import CreateTodo from '../Todo';
import { GET_LOGIN_INFO } from '../../query/user';

const { Content } = Layout;

interface ILoginData {
  __typename?: string;
  id: string;
  username: string;
  password?: string;
  email?: string;
  todo?: Array<any>
}

interface IMainLayout {
  loginData: any
}

const MainLayout = ({loginData} :IMainLayout) => {

  console.log(loginData);
  const { data, loading } = useQuery(GET_LOGIN_INFO, {
    variables: {
      input: {
        username: loginData?.username,
        password: loginData?.password,
      }
    }
  });

  const [userData, setUserData] = useState<any>({});

  useEffect(() => {
    if (data?.getLoginData) {
      setUserData(data.getLoginData);
    }
  }, [data]);

  return (
    <Layout>
      <Header />
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          {!data?.getLoginData?.username && <h1>please login in app</h1>}
          {data?.getLoginData?.username && <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <h1>{userData?.username}</h1>
            <CreateTodo userData={userData} />
          </Content>}

        </Layout>
      </Layout>
    </Layout>
  )
}

const mapStateToProps = (state: any) => ({
  loginData: state.login,
});

export default connect(mapStateToProps)(MainLayout);
