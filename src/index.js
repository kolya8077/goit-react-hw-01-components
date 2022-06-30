import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card } from 'components/card/App';
// import { Staic } from 'components/static/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="conteiner">
      <Card />
      {/* <Staic /> */}
    </div>
  </React.StrictMode>
);
