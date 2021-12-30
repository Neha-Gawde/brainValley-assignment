import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import api from '../services/middelWare/api';
import { countryReducer } from './countryslice';

// export const store = configureStore ({
//   reducer: {
//     country : countryReducer
//   },
// })

const reducer = {
    country : countryReducer
}

export const store = configureStore ({
    reducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
})