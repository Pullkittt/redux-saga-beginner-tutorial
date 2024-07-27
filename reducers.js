
const initialState = {count : 0, name: "pull", isLoading: false , loadData : [], error:"" };

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      // return state + 1
      return {...state, count: state.count +1};
    case 'INCREMENT_IF_ODD':
      return {...state, count: state.count +1};
    case 'DECREMENT':
      return {...state, count: state.count +1};

    case 'FETCH_DATA_REQUEST':
      return {...state, isLoading:true}
      
    case 'DATA_REQUEST_SUCCESS':
      return {...state, isLoading:false, loadData: action.payload}  
      // console.log(action.payload)

    case 'DATA_REQUEST_ERROR':
      return {...state, isLoading:false, error: action.payload }  
    default:
      return state
  }
}
