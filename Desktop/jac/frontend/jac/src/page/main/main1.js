import React from 'react';
import {  Layout, Menu, theme } from 'antd';
import AddWork from './component/AddWork'
import SearchWork from './component/SearchWork'
import WorkInfo from './component/WorkInfo'

import {Routes,Route,useNavigate} from "react-router-dom"
const { Header, Content, Sider } = Layout;
const items1 = ['Home', 'UserInfo', 'Main'].map((key) => ({
  key,
  label: `${key}`,
}));


const items2 = [{
  key: 'Work',
  label: 'Work',
  children: [
    {key: 'WorkInfo',label:"Work Info"},
    {key: 'AddWork', label:"Add Work"}]
},{
  key: 'Search',
  label:'Search'
},{
  key: 'Income',
  label: 'Income',
  children: [{key:'Month',label:"Month"},{key:'Date',label:"Date"},{key:'Year',label:'Year'}]
}];

export default function Main() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  
  const navigate = useNavigate();


  const go = (e)=>{
    navigate(`/`+e.key)
  }
  
  return (
    <Layout style={{height: "100vh"}}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
         
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
            onClick={go}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
            height: '100%',
          }}
        >
         
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
          
     
          <Routes>
            <Route path='/' element={<AddWork/>}/>
            <Route path='workinfo' element = {<WorkInfo/>}/>
            <Route path='/Search' element={<SearchWork/>}/>
            <Route path='/profile' element={<AddWork/>}/>
            <Route path='/*' element={<AddWork/>}/> 
          </Routes>

          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
