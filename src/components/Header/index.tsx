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
    <Menu theme="dark" mode="horizontal" >
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
