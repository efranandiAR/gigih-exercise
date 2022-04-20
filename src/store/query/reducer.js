const initialState = { value: "" };

function queryReducer(state = initialState, action) {
  switch (action.type) {
    case "set":
      return { ...state, value: action.payload };
    case "reset":
      return { ...state, value: "" };
    default:
      return state;
  }
}

export default queryReducer;
