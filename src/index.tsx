import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/index.global.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from 'state';  
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HistoryRoute from 'routes/history';
import UserDetailsRoute from 'routes/userDetails';
import Navigation from 'components/navigation';
import NotFound from 'components/notFound';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Navigation />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="history" element={<HistoryRoute />} />
              <Route path="user/:userId" element={<UserDetailsRoute />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
