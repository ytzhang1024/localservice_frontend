import React, { useEffect, useState } from 'react'
import { Rate, Avatar, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './customerccss.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import PayService from './PayService';
import { useContext } from 'react';
import axios from 'axios';



interface Service {
    key: number;
    ID: number;
    title: string;
    prices: number;
    city: string;
    description: string;
    address: string;
    category: string;
    photos: string;
    Status: string;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    areas_coverd: number;
    availibility: string;
    longitude_latitude: string;
    mobile: string;
    user_id: number;
}

interface ServiceDescProps {
    serviceData: Service;
}


const ServiceDesc: React.FC<ServiceDescProps> = ({ serviceData }) => {
    console.log("当前获取到的service")
    console.log(serviceData)

    serviceData

    const PayButton: React.FC = () => ( 
        <Space wrap>
            <Button className='paybutton' type="primary">Pay</Button>
        </Space>
    );

    return (
        <div>
            <div className='servicename'>{serviceData.title}</div>
            <div><img className='serviceimage' alt="Loading" src={serviceData.photos} /></div>
            <div className='serviceprice'>￡{serviceData.prices}</div>
            <div className='servicedesc'>Eligible for Shipping To Southampton or somewhere else{serviceData.description}</div>
            {/* <div className='servicerate'>Rate：<Rate disabled defaultValue={3} /></div> */}

            <Link to='/customer/viewservice/payservice'>
                <PayButton />
            </Link>

            <Routes>
                <Route path='/customer/viewservice/payservice' element={<PayService />}></Route>
            </Routes>
        </div>
    );

};

export default ServiceDesc;




