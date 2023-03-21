import { useState, useNavigate } from "react-router-dom";
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
              <a onClick={goto(i.url)}>{i.name}</a>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default HomePage