import { useNavigate } from "react-router-dom";
import DebounceDemo from '../component/debounce'
import SortChart from '../component/sort-chart'
import home from '../libs/home.js'

const HomePage = ()=>{
  const navigat = useNavigate()
  const goto = (url)=>{
    navigat(url)
  }
  return (
    <div className='home'>
      <div className="content">
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
    </div>
  )
}
export default HomePage