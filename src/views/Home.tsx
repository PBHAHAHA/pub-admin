
import Menus from '@/components/Menus';
import { Breadcrumb, Layout } from 'antd';
import React, { useState } from 'react';
import {Outlet} from "react-router-dom"

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo">
          好多资源管理后台
        </div>
        <Menus></Menus>
      </Sider>
      {/* 右边内容区 */}
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} >
          <Breadcrumb style={{ lineHeight: "64px",marginLeft: '16px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: '16px' }} className="site-layout-background">
          <div className="" style={{ padding: 24, minHeight: 360 }}>
            <Outlet></Outlet>
          </div>
        </Content>
        
      </Layout>
    </Layout>
  );
};

export default App;