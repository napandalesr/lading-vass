import React from 'react';
import ReactDOM from 'react-dom';
import Header from './containers/header';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/contact';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header/>
      <Contact />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

