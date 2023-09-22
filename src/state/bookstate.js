export default function addbookReducer(statebooks,action){
  if (action.type === 'added') {
    return [
      ...statebooks,
      action.data,
    ];
  } else if (action.type === 'changed') {
    return statebooks.map((t) => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  } else if (action.type === 'deleted') {
    return statebooks.filter((t) => t.id !== action.id);
  } else if(action.type === 'init'){
    return action.list
  }else {
    throw Error('未知 action: ' + action.type);
  }
}