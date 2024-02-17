const USER_ACTION_TYPES = {
  SET_CUURENT_USER: "SET_CUURENT_USER",
};
const InitialState = {
  currentUser: null,
};

export const userReducer = (state, action) => {
  console.log("dispatch");
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CUURENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};
