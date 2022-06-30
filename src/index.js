import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card } from 'components/Card/App';
import { Statis } from 'components/Statistics/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="conteiner">
      <Card />
      <Statis />
    </div>
  </React.StrictMode>
);
