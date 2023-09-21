import React, { useContext } from 'react';
import { Link } from 'react-router-dom';    // 路由插件
import FontAwesome from 'react-fontawesome';

import { GlobalContext } from '../../state/globalContext';

const Menu = (arr) => {
  const list = [
    { name: '首页', url: '/' },
    { name: '书籍', url: '/book' },
    { name: '算法', url: '/sort' },
    { name: '动画', url: '/canvas' }
  ]

  const { globalData, updateGlobalData } = useContext(GlobalContext);
  
  const changMode = () => {
    const newMode = globalData.mode === 'dark' ? 'light' : 'dark'
    updateGlobalData({ mode: newMode })
  }

  return (
    <div className='header'>
      <div>
        <div className='logo'>
          <img className='icon' alt="" src={require("../../assets/logo.svg").default} />
          <div className='name'>Some Buy</div>
        </div>
        <div className='slogon'>诗三百，一言以蔽之</div>
      </div>
      <ul className='menu'>
        {
          list.map((i, index) => (
            <li key={index}>
              <Link to={i.url} >{i.name}</Link>
            </li>
          ))
        }
      </ul>
      <div>
        {/* <i data-feather="circle"></i> */}
        <FontAwesome
          name={globalData.mode === 'dark' ? 'toggle-off' : 'toggle-on'}
          onClick={changMode}
        />
      </div>
    </div>
  )
}
export default Menu