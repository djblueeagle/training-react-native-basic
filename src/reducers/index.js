import mockNews from '../data/news.json';
const initialState = {
  counter: 0,
  news: [],
  loading: false,
};

const dataReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...previousState,
        counter: previousState.counter + 1
      };
    case 'DECREMENT':
      return {
          ...previousState,
        counter: previousState.counter - 1
      };
    case 'SET':
      return {
        ...previousState,
        counter: action.payload
      };
    case 'FETCH_NEWS':
     return {
       ...previousState,
       loading: true,
     };
    case 'FETCH_NEWS_SUCCESS':
    return {
      ...previousState,
      loading: false,
      news: action.response.content,
    };
    default:
      return previousState;
  }
};

export default dataReducer;
