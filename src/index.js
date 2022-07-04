import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card } from 'components/Card/App';
import { Statis } from 'components/Statistics/App';
import { Friends } from 'components/Friends/App';
import { TransactionHistory } from 'components/TransactionHistory/App'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="conteiner">
      <Card />
      <Statis />
      <Friends />
      <TransactionHistory />
    </div>
  </React.StrictMode>
);
