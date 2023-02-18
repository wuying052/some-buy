import './common.scss'
import { useNavigate } from "react-router-dom";

const HomePage = ()=>{
 
  const navigat = useNavigate()
  const goto = ()=>{
    navigat('other')
  }
  return (
    <div className='home'>
      <div className='item'>
        <a onClick={goto}>组件</a>
      </div>
    </div>
  )
}
export default HomePage