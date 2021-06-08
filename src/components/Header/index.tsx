import React from 'react';
import { Layout, Menu } from 'antd';
import RegistrationModal from '../RegistrationModal';
import LoginModal from '../Login';

const { Header, } = Layout;

const MainHeader: React.FC = () => {
  
  return (
    <Header className="header">
      <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
      <RegistrationModal />
      <LoginModal />
    </Menu>
  </Header>
  );
}

export default MainHeader;
