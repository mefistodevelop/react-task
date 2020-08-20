import React from 'react';
import './Buyers.scss';
import { BuyersTable } from './BuyersTable';

export function Buyers() {
  return (
    <div className="buyers">
      <h1>Покупатели</h1>
      <div className="buyers__table">
        <BuyersTable />
      </div>
    </div>
  );
}
