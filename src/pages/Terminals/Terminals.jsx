import React, { useState } from 'react';
import './Terminals.scss';
import { TerminalsTable } from './TerminalsTable';
let terminalsData = [
  { id: 1, name: 't1', description: 't1 descr' },
  { id: 2, name: 't2', description: 't12descr' },
  { id: 3, name: 't3', description: 't3 descr' },
];
window.terminals = terminalsData;
export function Terminals() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim() || description.trim()) {
      const newTerminal = { name, description, id: terminalsData.length + 1 };
      terminalsData.push(newTerminal);
      setName('');
      setDescription('');
    }
  };

  return (
    <div className="terminals">
      <h1 className="terminals__title">Терминалы</h1>
      <form className="terminals__form" onSubmit={onSubmit}>
        <label className="terminals__label">
          Название терминала
          <input
            type="text"
            className="terminals__field"
            placeholder="Название терминала"
            value={name}
            onChange={(e) => {
              const value = e.target.value;
              setName(value);
            }}
          />
        </label>

        <label className="terminals__label">
          Описание
          <textarea
            type="text"
            className="terminals__field"
            placeholder="Описание терминала"
            value={description}
            onChange={(e) => {
              const value = e.target.value;
              setDescription(value);
            }}
          />
        </label>
        <button className="terminals__button" type="submit">
          Добавить
        </button>
      </form>

      <div className="terminals__table">
        <TerminalsTable data={terminalsData} />
      </div>
    </div>
  );
}
