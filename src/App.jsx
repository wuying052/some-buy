import './App.css'
import './style/common.scss'
import './style/styles.scss'
import routers from './router';    // 路由文件
import { Routes, Link, Route,useNavigate } from 'react-router-dom';    // 路由插件
import FontAwesome from 'react-fontawesome';

function App() {
  return (
    <div className='App dark-mode'>
      <ul className='menu'>
        <li>
          <Link to="/" >首页</Link>
        </li>
        <li>
          <FontAwesome
            name='toggle-off'
          />
        </li>
      </ul>
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
