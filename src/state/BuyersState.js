import React, { useReducer, useContext } from 'react';

const BuyersContext = React.createContext();
export const useBuyers = () => useContext(BuyersContext);

const initialState = {
  buyers: [
    {
      id: 1,
      name: 'Иван',
      averageCheck: 300,
      purchasesAmount: 1,
      total: 300,
    },
    {
      id: 2,
      name: 'Иван',
      averageCheck: 3000,
      purchasesAmount: 5,
      total: 6000,
    },
    {
      id: 3,
      name: 'Ирина',
      averageCheck: 10000,
      purchasesAmount: 20,
      total: 50000,
    },
    {
      id: 4,
      name: 'Федор',
      averageCheck: 1000,
      purchasesAmount: 4,
      total: 5000,
    },
    {
      id: 5,
      name: 'Анастасия',
      averageCheck: 100,
      purchasesAmount: 1,
      total: 100,
    },
    {
      id: 6,
      name: 'Юлия',
      averageCheck: 6787,
      purchasesAmount: 10,
      total: 1567600,
    },
    {
      id: 7,
      name: 'Егор',
      averageCheck: 588,
      purchasesAmount: 9,
      total: 67879,
    },
    {
      id: 8,
      name: 'Федор',
      averageCheck: 123,
      purchasesAmount: 11,
      total: 1012310,
    },
    {
      id: 9,
      name: 'Михаил',
      averageCheck: 231,
      purchasesAmount: 11,
      total: 101230,
    },
    {
      id: 10,
      name: 'Елена',
      averageCheck: 2131,
      purchasesAmount: 11,
      total: 1123100,
    },
    {
      id: 11,
      name: 'Иван',
      averageCheck: 102,
      purchasesAmount: 3,
      total: 302,
    },
    {
      id: 12,
      name: 'Анна',
      averageCheck: 12334,
      purchasesAmount: 6,
      total: 1242124,
    },
    {
      id: 13,
      name: 'Михаил',
      averageCheck: 5000,
      purchasesAmount: 4,
      total: 20000,
    },
    {
      id: 14,
      name: 'Анна',
      averageCheck: 100,
      purchasesAmount: 1,
      total: 100,
    },
    {
      id: 15,
      name: 'Анастасия',
      averageCheck: 1000,
      purchasesAmount: 10,
      total: 8000,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export function BuyersState({ children }) {
  const [state] = useReducer(reducer, initialState);

  return (
    <BuyersContext.Provider value={{ buyers: state.buyers }}>
      {children}
    </BuyersContext.Provider>
  );
}