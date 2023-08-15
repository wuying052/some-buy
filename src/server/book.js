import axios from "axios";

const axiosRequest = (type, url) => {
  return axios.create({
    baseURL: 'http://localhost:5001/' + url,
    // baseURL: "http://192.168.7.127:8080",
    method: type,
    timeout: 40000,
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      "Content-Type": "application/json",
      // 'Access-Control-Allow-Origin': '*',
      // "access-control-allow-credentials":'true',
      // withCredentials: true
    },
  });
}

/**查询书籍列表
 * 
 */
export const getBookList = () => {
  return axiosRequest(
    'get',
    'api/booklist'
  )
}

/**新增书籍
 * 
 */
export const addBook = () => {
  return axiosRequest(
    'get',
    'api/bookadd'
  )
}

/**删除书籍
 * 
 */
export const removeBook = () => {
  return axiosRequest(
    'get',
    'api/bookdel'
  )
}

/**查询书籍详情
 * 
 */
export const getBookDetail = () => {
  return axiosRequest(
    'get',
    'api/bookdetail'
  )
}