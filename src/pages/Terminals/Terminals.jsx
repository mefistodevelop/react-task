import React, { useState } from 'react';
import './Terminals.scss';
import { TerminalsTable } from './TerminalsTable';
import { useTerminals } from '../../state/TerminalsState';
import { useAppData } from '../../state/AppState';
import { Redirect } from 'react-router-dom';

export function Terminals() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { terminals, addTerminal } = useTerminals();
  const { isAuthorized } = useAppData();

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim() || description.trim()) {
      const lastTerminal = terminals[terminals.length - 1];
      const id = lastTerminal ? lastTerminal.id + 1 : 1;
      const newTerminal = { id, name, description };

      addTerminal(newTerminal);
      setName('');
      setDescription('');
    }
  };

  return (
    <>{!isAuthorized ? <Redirect to="/" />
    : (
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
          <TerminalsTable data={terminals} />
        </div>
      </div>
    )}
    </>
  );
}
