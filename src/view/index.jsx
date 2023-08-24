import { useNavigate } from "react-router-dom";
import DebounceDemo from '../component/debounce'
import homeMenus from '../libs/home.js'

const HomePage = () => {
  const navigat = useNavigate()
  const goto = (url) => {
    navigat(url)
  }
  
  return (
    <div className='home'>
      {/* 悬浮菜单 */}
      <div className="right-content">
        {
          homeMenus.map((i, index) => (
            <div className='item' key={index}>
              <a onClick={() => goto(i.url)}>{i.name}</a>
            </div>
          ))
        }
      </div>
      <DebounceDemo />
      <br />
      <br />
      <br />
    </div>
  )
}
export default HomePage