import React from 'react';
import './Buyer.scss';
import { useParams, Redirect } from 'react-router-dom';
import { useBuyers } from '../../state/BuyersState';

export function Buyer() {
  const { id: buyerId } = useParams();
  const { getBuyer } = useBuyers();

  const buyerData = getBuyer(Number(buyerId))[0];

  return (
    <>
      {!buyerData ? <Redirect to="/404" /> : 
        <div className="buyer">
          <h1 className="buyer__title">Покупатель #{buyerData.id}</h1>
          <ul className="buyer__data-list">
            <li className="buyer__data-item">
              имя:
              <span className="buyer__data-value">{buyerData.name}</span>
            </li>
            <li className="buyer__data-item">
              средний чек:
              <span className="buyer__data-value">{buyerData.averageCheck}</span>
            </li>
            <li className="buyer__data-item">
              количество покупок:
              <span className="buyer__data-value">{buyerData.purchasesAmount}</span>
            </li>
          </ul>
          <p className="buyer__total">
            Общая выручка:
            <span className="buyer__data-value">{buyerData.total}</span>
          </p>
        </div>
      }
    </>
  );
}
