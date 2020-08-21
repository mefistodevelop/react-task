import React from 'react';
import './Buyers.scss';
import { BuyersTable } from './BuyersTable';
import { useAppData } from '../../state/AppState';
import { Redirect } from 'react-router-dom';

export function Buyers() {
  const { isAuthorized } = useAppData();
  return (
   <>{!isAuthorized ? <Redirect to="/" />
    : (
      <div className="buyers">
        <h1>Покупатели</h1>
        <div className="buyers__table">
          <BuyersTable />
        </div>
      </div>
    )}
   </>
  );
}
