import './App.css'
import HomePage from './view/index'
import routers from './router';    // 路由文件
import { Routes, Link, Route } from 'react-router-dom';    // 路由插件

function App() {
  return (
    <div className='App'>
      <Routes>
        {
          routers.map((item, index) => (
            <Route path={item.path} key={index} element={<item.components />}></Route>
          ))
        }
      </Routes>
    </div>
  )
}
export default App;
