import React, { useReducer, useContext } from 'react';
import { api } from '../api/api';

const AppContext = React.createContext();
export const useAppData = () => useContext(AppContext);


const SET_AVATAR = 'SET_AVATAR';
const SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED';

const initialState = {
  isAuthorized: false,
  avatar: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };

    case SET_IS_AUTHORIZED:
      return {
        ...state,
        isAuthorized: action.payload,
      };
    default:
      return state;
  }
};

export function AppState({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAvatar = (avatar) => dispatch({ type: SET_AVATAR, payload: avatar });
  const setIsAuthorized = (isAuthorized) =>
    dispatch({ type: SET_IS_AUTHORIZED, payload: isAuthorized });

  const getUserData = async (userName) => {
    let userData;
    try {
      userData = await api.getUser(userName);

      if (userData.status === 200) {
        const avatar = userData.data.avatar_url;
        setIsAuthorized(true);
        setAvatar(avatar);
      }
    } catch (error) {
      console.error(error);
    }   
  };
  
  return (
    <AppContext.Provider value={{ 
      getUserData,
      avatar: state.avatar,
      isAuthorized: state.isAuthorized,
    }}>
      {children}
    </AppContext.Provider>
  );
}