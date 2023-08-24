import { useState,useEffect,useReducer } from "react"
// import bookReducer from '../../state/book.js'
import { getBookList } from "../../server/book.js";

const BookPage = () => {
  const [booklist, setBooklist] = useState([])

  const queryList = () => {
    getBookList().then(res => {
      console.log('getbook', res);
     
      const list = res.data.data
      setBooklist(list)
    }).catch(err => {
      console.log('err', err);
    })
  }
  useEffect(() => {
    queryList()
  })
  return (
    <div>
      {/* <button onClick={addbook}>上传</button> */}
      {
        booklist.map((i, index) => (
          <div key={index}>{i.name}</div>
        ))
      }
    </div>
  )

}

export default BookPage