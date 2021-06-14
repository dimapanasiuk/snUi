import React from 'react';
import { Layout, Menu } from 'antd';
import { connect } from "react-redux";
import RegistrationModal from '../RegistrationModal';
import LoginModal from '../Login';
const { Header, } = Layout;

const MainHeader: React.FC = ({loginData} : any) => {
  const isRender = !!(loginData?.username && loginData?.password);

  return (
    <Header className="header">
      <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
      {!isRender && <RegistrationModal />}
      <LoginModal />
    </Menu>
  </Header>
  );
}

const mapStateToProps = (state: any) => {
  return ({loginData: state.login})
};
 
export default connect(mapStateToProps)(MainHeader);
