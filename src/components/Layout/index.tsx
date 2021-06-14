import { Layout, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import Header from '../Header';
const { Content, Sider } = Layout;

const MainLayout = ( ) => {
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
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
}

export default MainLayout;