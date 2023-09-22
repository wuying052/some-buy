import axiosRequest from "./axiosRequest"

/**查询书籍列表
 * 
 */
export const getBookList = () => {
  return axiosRequest({
    method:'get',
    url:'api/book/list'
  })
}

/**新增书籍
 * 
 */
export const addBook = (data) => {
  return axiosRequest({
    method:'post',
    url:'api/book/add',
    data
  })
}

/**删除书籍
 * 
 */
export const removeBook = () => {
  return axiosRequest({
    method:'get',
    url:'api/book/remove'
  })
}

/**查询书籍详情
 * 
 */
export const getBookDetail = () => {
  return axiosRequest({
    method:'get',
    url:'api/book/detail'
  })
}