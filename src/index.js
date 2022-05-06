import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// @reduxtool kit 
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// slicers 
import userReducer from './redux/reducer/userReducer';


// create store 
const store = configureStore({
  reducer : {
      users : userReducer,
  }
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);


reportWebVitals();
