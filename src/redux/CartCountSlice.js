import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 0,
};

const CartCountSlice = createSlice({
	name: 'cartCount',
	initialState,
	reducers: {
		increment: state => {
			state.value += 1;
		},
		decrement: state => {
			state.value -= 1;
		},
		// incrementByAmount: (sate, action) => {
		// 	state.value += action.payload;
		// },
	},
});

export const { increment, decrement, incrementByAmount } =
	CartCountSlice.actions;
export default CartCountSlice.reducer;
