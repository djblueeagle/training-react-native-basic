
export const counterIncrement = () => {
  return {
    type: 'INCREMENT'
  };
};

export const counterDecrement = () => {
  return {
    type: 'DECREMENT'
  };
};

export const setCounter = (number) => {
  return {
    type: 'SET',
    payload: parseInt(number)
  };
};

export const fetchNews = () => {
  return {
    type: 'FETCH_NEWS'
  };
};

export const fetchNewsSuccess = () => {
  return {
    type: 'FETCH_NEWS_SUCCESS'
  };
};