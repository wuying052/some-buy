import { useState } from "react";

const DebounceDemo = ()=>{
  const [search,setSearch] = useState('请输入')
  let timer = null 

  //防抖
  const ondebounce = ()=>{
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      setSearch(search)
    }, 1000);
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