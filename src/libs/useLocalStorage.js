import { useState } from "react";

function useLocalStorage(name,initValue){
  const [storage, setStorage] = useState(localStorage.getItem(name) || initValue)

  const updateStorage = (newValue) => {
    setStorage(newValue);
    localStorage.setItem(name, newValue)
  };
  return {storage, updateStorage}
}
export default useLocalStorage
