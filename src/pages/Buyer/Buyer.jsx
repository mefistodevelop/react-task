import React from 'react';
import './Buyer.scss';
import { useParams } from 'react-router-dom';
import { useBuyers } from '../../state/BuyersState';

export function Buyer() {
  const { id: buyerId } = useParams();
  const { getBuyer } = useBuyers();

  const { id, name, averageCheck, purchasesAmount, total } = getBuyer(
    Number(buyerId)
  )[0];

  return (
    <div className="buyer">
      <h1 className="buyer__title">Покупатель #{id}</h1>
      <ul className="buyer__data-list">
        <li className="buyer__data-item">
          имя:
          <span className="buyer__data-value">{name}</span>
        </li>
        <li className="buyer__data-item">
          средний чек:
          <span className="buyer__data-value">{averageCheck}</span>
        </li>
        <li className="buyer__data-item">
          количество покупок:
          <span className="buyer__data-value">{purchasesAmount}</span>
        </li>
      </ul>
      <p className="buyer__total">
        Общая выручка:
        <span className="buyer__data-value">{total}</span>
      </p>
    </div>
  );
}
