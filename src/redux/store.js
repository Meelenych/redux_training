import { configureStore } from '@reduxjs/toolkit';
import CartCountReducer from './CartCountSlice';
import loggedInReducer from './loggedInSlice';

export const store = configureStore({
	reducer: {
		cartCount: CartCountReducer,
		loggedIn: loggedInReducer,
	},
});
