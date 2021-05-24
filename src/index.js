import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/common.css';
import Showsubscribers from './Showsubsribers';
import reportWebVitals from './reportWebVitals';

import AddSubScriber from './AddSubScriber';
import PhoneDirectory from './PhoneDirectory';

ReactDOM.render(
  <React.StrictMode>
    <PhoneDirectory />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
