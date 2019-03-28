// Initial State
const initialState = {
  authenticated: false,
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SIGNIN':
      return {
        ...state,
        authenticated: true,
        token: action.payload,
      };
    case 'AUTH_SIGNOUT':
      return { ...state, authenticated: false, token: null, error: null };
    default:
      return state;
  }
};

export default reducer;
