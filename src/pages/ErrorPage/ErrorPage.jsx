import React from 'react';
import './ErrorPage.scss';

export function ErrorPage() {
  return (
    <div className="error-page">
      <p className="error-page__small-text">page not found</p>
      <p className="error-page__large-text">
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </p>
      <p className="error-page__small-text">
        we are sorry, but the page you requested was not found
      </p>
    </div>
  );
}
