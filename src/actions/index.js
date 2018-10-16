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