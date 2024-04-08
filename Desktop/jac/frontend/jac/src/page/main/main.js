import React from 'react'
import type { FC } from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom'
import {
  AppOutline,
  FlagOutline ,
  UserOutline,
  ReceiptOutline
} from 'antd-mobile-icons'
import Home from './page/Home/home'
import Work from './page/Work/work'
import Debt from './page/Debt/debt'
import User from './page/User/user'


const Bottom: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    navigate(value)
  }

  const tabs = [
    {
      key: '/home',
      title: 'Home',
      icon: <AppOutline />,
    },
    {
      key: '/debt',
      title: 'debt',
      icon: <ReceiptOutline />,
    },
    {
      key: '/work',
      title: 'work',
      icon: <FlagOutline />,
    },
    {
      key: '/user',
      title: 'me',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

export default function main() {
  return (
    <>
      <div style={styles.app}>

        <div style={styles.top}>
          <NavBar>配合路由使用</NavBar>
        </div>

        <div style={styles.body}>
        <Routes >
              <Route exact path='/home'element = {<Home/>}/>
              <Route exact path = '/work' element={<Work/>}/>
              <Route exact path = '/user' element={<User/>}/>
              <Route exact path = '/debt' element={<Debt/>}/>
        </Routes>
        </div>

        <div style={styles.bottom}>
          <Bottom />
        </div>
      </div>
   </>
  )
}

const styles = {
  app:{
   
    display: "flex",
    height: "100%",
    flexDirection: "column",
    margin: 0,
    padding: 0,
   
    
  },
  top:{
    position: 'fixed',
    backgroundColor: "#fff",
    boxSizing: "border-box",
    top: 0,
    width: "100%",
    zIndex: 2
  },
  body:{
    display: "block",
    padding : "12px",
    boxSizing: "border-box",
    marginTop: "50px",
    paddingBottom: "50px",
    zIndex: 1,
    height:"100%"
  },
  bottom:{
    position: "fixed",
    bottom: 0,
    width: "100%",
    color: "#fff",/* 设置导航栏文字颜色 */
    backgroundColor: "#fff",
    zIndex: 2
  }
  
}