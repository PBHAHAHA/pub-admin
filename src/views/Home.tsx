import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  SettingFilled,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {Outlet, useNavigate} from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('仪表盘', '/dashbord', <PieChartOutlined />),
  getItem('关于', '/about', <DesktopOutlined />),
  getItem('用户管理', '/user', <UserOutlined />, [
    getItem('用户列表', '/user'),
    getItem('用户权限', '4'),
  ]),
  getItem('文章管理', '/ports', <FileOutlined />),
  getItem('网站设置', '/websit', <SettingFilled />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigateTo = useNavigate()
  const menuClick = (e: {key:string}) => {
    console.log("点击了菜单", e);
    navigateTo(e.key)
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo">
          好多资源管理后台
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick} />
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