import { Link } from 'react-router-dom';    // 路由插件
import FontAwesome from 'react-fontawesome';
import { useState, useEffect } from 'react';

const Menu = (arr) => {
  const list = [{ name: '首页', url: '/' }, { name: '算法', url: '/sort' }, { name: '动画', url: '/canvas' }]
  const [mode, setMode] = useState('')

  const changMode = () => {
    const val = mode === 'dark' ? 'light' : 'dark'
    localStorage.setItem('mode', val)
    setMode(val)
    window.location.reload()
  }

  useEffect(() => {
    setMode(localStorage.getItem('mode'))
  })

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

        <li>
          {/* <i data-feather="circle"></i> */}
          <FontAwesome
            name={mode === 'dark' ? 'toggle-off' : 'toggle-on'}
            onClick={changMode}
          />
        </li>
      </ul>
    </div>
  )
}
export default Menu