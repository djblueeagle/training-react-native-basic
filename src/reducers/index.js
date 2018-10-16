const initialState = {
  counter: 0
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
    default:
      return previousState;
  }
};

export default dataReducer;