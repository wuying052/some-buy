import { useNavigate } from "react-router-dom";
import DebounceDemo from '../component/debounce'
import SortChart from '../component/sort-chart'
import MyCanvas from '../component/animal/canvas'
import home from '../libs/home.js'

const HomePage = ()=>{
  const navigat = useNavigate()
  const goto = (url)=>{
    navigat(url)
  }
  return (
    <div className='home'>
      <div className="right-content">
        {
          home.map((i,index)=>(
            <div className='item' key={index}>
              <a onClick={()=> goto(i.url)}>{i.name}</a>
            </div>
          ))
        }
      </div>
      <DebounceDemo />
      <SortChart />
      <MyCanvas />
    </div>
  )
}
export default HomePage