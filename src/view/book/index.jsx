import { useState,useEffect,useReducer } from "react"
import bookReducer from '../../state/bookstate.js'
import { getBookList,addBook } from "../../server/book.js";

const BookPage = () => {
  // const [booklist, setBooklist] = useState([])
  const [booklist, dispatch] = useReducer(bookReducer,[])
  
  const queryList = () => {
    getBookList().then(res => {
      const list = res.data.data

      dispatch({type:'init',list})

    }).catch(err => {
      console.log('err', err);
    })
  }
  
  const addbook=(book)=>{
    const data = {title:'1'}

    addBook(data).then(res => {
      dispatch({type:'added',data})
    }).catch(err => {
      console.log('err', err);
    })
  }

  useEffect(() => {
    // queryList()
  })
  return (
    <div>
      <button onClick={queryList}>查询</button>
      <button onClick={addbook}>新增</button>
      <ul>
      {
        booklist.map((i, index) => (
          <li key={index}>{index}={i.title}</li>
        ))
      }
      </ul>
    </div>
  )

}

export default BookPage