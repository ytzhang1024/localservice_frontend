import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Route } from 'react-router';
import MesssageList from './MessageList';
import { Link, NavLink, Outlet } from 'react-router-dom';
import "./customerccss.css"


const items: MenuProps['items'] = [
  {
    label: (
      <div>
        <img src='src\assets\findserviceLogo.png' alt="Logo" height={40} style={{ margin: 10 }} />
      </div>
    ),
    key: 'logo',
    style: { marginLeft:100},
  },
  {
    label: <NavLink to="/customer" style={{ border: 'none', fontWeight: 'bold' ,fontSize:16}}>Home</NavLink>,
    key: 'Home',
    style: { margin: 10, marginLeft:700},
    // icon: <MailOutlined />,
  },
  {
    label: <div style={{ border: 'none', fontWeight: 'bold' ,fontSize:16}}><img className="profile-avatar2" src='src\assets\profile.png' alt="Profile" />IVY</div>,
    key: 'SubMenu',
    // icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        // label: 'Item 1',
        children: [
          {
            label: <NavLink to="profile">Profile</NavLink>,
            key: 'profile',
            style: { margin: 2},
           
          },
          {
            label: <NavLink to="messagelist">Message</NavLink>,
            key: 'Message',
            style: { margin: 2},
           
          },
          {
            label: <NavLink to="bookinglist">Booking</NavLink>,
            key: 'Booking',
            style: { margin: 2},
        
          },
          {
            label: <a href="" target="_blank" rel="noopener noreferrer">
              Log out
            </a>,
            key: 'Log out',
            style: { margin: 2},
           
          },


        ],
      },

    ],
    style: { margin: 10},
  },
  {
    label: <NavLink to="/login" style={{ border: 'none', fontWeight: 'bold' ,fontSize:16}}>Log in</NavLink>,
    key: 'Log in',
    // icon: <MailOutlined />,
    style: { margin: 10},
  }
];

const CustomerMenu: React.FC = () => {
  const [current, setCurrent] = useState('Home');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div  >
      <Menu
        theme='light'
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        // style={{ float:'right' }}
        items={items} />
      <Outlet />
    </div>
  );
};

export default CustomerMenu;



