// store.js
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {thunk} from 'redux-thunk';
import rootReducer from './root-reducer'; // Adjust the path to your root reducer

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;
