import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { API } from '../service/API';
// Setting up our Initial State
let initialState = {
  user: [],
  error: '',
};

// Setting up Context
export const AppContext = createContext(initialState);

// Setting up App Provider Component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // User Registration

  const registerUser = async (name, email, password, passwordcheck) => {
    const validEmail = () => {
      const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
      return re.test(email);
    };

    const validPassword = () => {
      const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
      return re.test(password);
    };

    if (!name || !email || !password) {
      dispatch({
        type: 'ERROR',
        payload: 'Please fill in all the fields',
      });
    } else if (!validEmail()) {
      dispatch({
        type: 'ERROR',
        payload: 'Please provide valid email',
      });
    } else if (!validPassword()) {
      dispatch({
        type: 'ERROR',
        payload: 'Password should be min 8 characters long with Uppercase, Lowercase, Numbers and Special Characters',
      });
    } else if (password !== passwordcheck) {
      dispatch({
        type: 'ERROR',
        payload: 'Password do not match',
      });
    } else {
      const res = await API.auth.signup(name, email, password);

      if (res.data === 'success') {
        return true;
      } else {
        dispatch({
          type: 'ERROR',
          payload: res.data,
        });
      }
    }

    // dispatch({
    //   type: 'GEN_URL',
    //   payload: res.data,
    // });
  };

  return (
    <AppContext.Provider
      value={{
        user: state.user,
        error: state.error,
        registerUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
