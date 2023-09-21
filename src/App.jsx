import './App.css'
import './style/common.scss'
import './style/styles.scss'
import routers from './router';    // 路由文件
import { Routes, Route } from 'react-router-dom';    // 路由插件

import Menu from './component/menu';

import React, { useContext } from 'react';
import { GlobalContext } from './state/globalContext';

function App() {
  const { globalData } = useContext(GlobalContext);
  return (
    <div className={['App '+globalData.mode + '-mode']}>
      <Menu />
      <div className='page'>
        <Routes>
          {
            routers.map((item, index) => (
              <Route path={item.path} key={index} element={<item.components />}></Route>
            ))
          }
        </Routes>
      </div>
    </div>
  )
}
export default App;
