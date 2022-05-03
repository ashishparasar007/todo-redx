const initialState = [];
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODO_ADD":
      return [action.payload, ...state];
    default:
      return state;
  }
};
