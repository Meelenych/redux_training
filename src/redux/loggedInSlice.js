import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: false,
};

const loggedInSlice = createSlice({
	name: 'loggedIn',
	initialState,
	reducers: {
		logIn: state => {
			state.value = true;
		},
		logOut: state => {
			state.value = false;
		},
	},
});

export const { logIn, logOut } = loggedInSlice.actions;
export default loggedInSlice.reducer;
