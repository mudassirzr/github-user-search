import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from 'state';  
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HistoryRoute from 'routes/history';
import UserDetails from 'routes/userDetails';
import Navigation from 'components/navigation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="history" element={<HistoryRoute />} />
          <Route path="user/:userId" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
