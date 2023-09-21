import { useState } from "react";

function useLocalStorage(name,initValue){
  const [mode, setMode] = useState(localStorage.getItem(name) || initValue)

  const updateMode = (newValue) => {
    setMode(newValue);
    localStorage.setItem(name, newValue)
    //刷新页面
    window.location.reload()
  };
  return {mode, updateMode}
}
export default useLocalStorage
