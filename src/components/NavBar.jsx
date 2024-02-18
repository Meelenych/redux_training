import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logIn, logOut } from '../redux/loggedInSlice';

function NavBar() {
	const dispatch = useDispatch();
	const cartCount = useSelector(state => state.cartCount.value);
	const loggedIn = useSelector(state => state.loggedIn.value);
	return (
		<div>
			<h1>Is user logged in?</h1>
			<h2>{loggedIn ? 'YES' : 'NO'}</h2>
			<button onClick={() => dispatch(logIn())}>LogIn</button>
			<button onClick={() => dispatch(logOut())}>LogOut</button>
			<h2>Number of items in the cart: {cartCount}</h2>
		</div>
	);
}

export default NavBar;
