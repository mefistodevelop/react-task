import React, { useReducer, useContext } from 'react';

const TerminalsContext = React.createContext();
export const useTerminals = () => useContext(TerminalsContext);

const ADD_TERMINAL = 'ADD_TERMINAL';
const REMOVE_TERMINAL = 'REMOVE_TERMINAL';

const initialState = {
  terminalsList: [
    { id: 1, name: 'терминал 1', description: 'первый терминал' },
    { id: 2, name: 'терминал 2', description: 'второй терминал' },
    { id: 3, name: 'терминал 3', description: 'терминал после второго' },
  ],

};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TERMINAL:
      return {
        ...state,
        terminalsList: [...state.terminalsList, action.payload],
      };

    case REMOVE_TERMINAL:
      return {
        ...state,
        terminalsList: state.terminalsList.filter((terminal) => terminal.id !== action.payload),
      };
    default:
      return state;
  }
};

export function TerminalsState({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTerminal = (newTerminal) =>
    dispatch({ type: ADD_TERMINAL, payload: newTerminal });
  const removeTerminal = (terminalId) => dispatch({ type: REMOVE_TERMINAL, payload: terminalId });

  return (
    <TerminalsContext.Provider value={{
      addTerminal,
      removeTerminal,
      terminals: state.terminalsList,
    }}>
      {children}
    </TerminalsContext.Provider>
  );
}