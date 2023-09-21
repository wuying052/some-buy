import './App.css'
import './style/common.scss'
import './style/styles.scss'
import routers from './router';    // 路由文件
import { Routes, Route } from 'react-router-dom';    // 路由插件

import useLocalStorage from './libs/useLocalStorage';
import Menu from './component/menu';

function App() {
  const { mode } = useLocalStorage('mode', 'dark')

  return (
    <div className={['App '+mode + '-mode']}>
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
