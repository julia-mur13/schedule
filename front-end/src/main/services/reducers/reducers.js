/* eslint-disable no-unused-vars */


const initialState = {
    userType: 'guest',
    isAuth: false,
    isReady: true,
    error: false,
};

const app = (state = initialState, action) => {
    switch (action.type) {
        /* case types.IS_LOGGED_IN: {
          return {
            ...state,
            userType: 'student',
            isAuth: true,
            isReady: true,
          };
        } */
        default:
            return state;
    }
};

export default app;