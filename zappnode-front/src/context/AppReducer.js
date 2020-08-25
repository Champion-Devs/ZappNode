export default (state, action) => {
  switch (action.type) {
    case 'ERROR': {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
