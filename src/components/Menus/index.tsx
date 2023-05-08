import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    SettingFilled,
    UserOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Menu } from 'antd';
import { MenuItemGroupType, SubMenuType } from 'antd/lib/menu/hooks/useItems';
  import React, { useState } from 'react';
  import {useLocation, useNavigate} from "react-router-dom"
  
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
    getItem('用户列表', '/user/list'),
    getItem('用户权限', '/user/auth'),
  ]),
  getItem('文章管理', '/ports', <FileOutlined />,[
    getItem('用户列表', '/ports/list'),
  ]),
  getItem('网站设置', '/websit', <SettingFilled />),
];

export default function Menus() {
    const navigateTo = useNavigate()
    const currentRoute = useLocation()
    console.log(currentRoute.pathname.split("/"))
    
    const menuClick = (e: {key:string}) => {
      console.log("点击了菜单", e);
      navigateTo(e.key)
    }

    // 设置展开项的初始值
    let firstOpenkey = "";
    function findKey(obj:{key: string}){
      return obj.key === currentRoute.pathname
    }
    for(let i=0;i<items.length;i++){
      const item = items[i] as SubMenuType | MenuItemGroupType
      if(
        item.children && 
        item.children.length > 0 && 
        item.children.find( () => findKey)
      ){
        firstOpenkey = item?.key as string
      }
    }
        // 只能有一个展开操作
        const [openKeys, setOpenKeys] = useState([firstOpenkey])
        const handleOpenChange = (keys: string[]) => {
          console.log(keys)
          setOpenKeys([keys[keys.length-1]])
        }
  return (
    <div>
        <Menu
          theme="dark" 
          defaultSelectedKeys={[currentRoute.pathname]} 
          mode="inline" 
          items={items} 
          onClick={menuClick}
          openKeys={openKeys}
          onOpenChange={handleOpenChange}
        />
    </div>
  )
}
