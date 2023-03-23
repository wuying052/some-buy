import { useState } from "react";

const DebounceDemo = ()=>{
  const [search,setSearch] = useState('')
  let timer = null 

  //防抖
  const ondebounce = (event)=>{    
    if(timer) clearTimeout(timer)

    const val = event.target.value
    timer = setTimeout(() => {
      setSearch(val)
    }, 500);
  }
  //节流
  const onthrottle = ()=>{
    if(timer) return ;
    timer = setTimeout(() => {
      setSearch(search)
      timer = null
    }, 1000);
  }
 
  return (  
    <div>
      <input type="text" value={search} onChange={ondebounce} />
      <button onClick={onthrottle}>查询</button>
    </div>
  )

}
export default DebounceDemo