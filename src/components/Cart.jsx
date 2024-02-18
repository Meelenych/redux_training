import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	increment,
	decrement,
	incrementByAmount,
} from '../redux/CartCountSlice';

function Cart() {
	// let [cartCount, setCartCount] = useState(0);
	let [incrementAmont, setIncrementAcount] = useState(0);

	const dispatch = useDispatch();

	return (
		<div>
			<h3>Cart</h3>
			{/* <p>quantity: {cartCount}</p> */}
			<div>
				{/* <button
					onClick={() => {
						setCartCount(cartCount++);
					}}>
					Increment
				</button> */}
				<button
					onClick={() => {
						dispatch(increment());
					}}>
					Increment
				</button>
				{/* <button
					onClick={() => {
						setCartCount(cartCount--);
					}}>
					Decrement
				</button> */}
				<button
					onClick={() => {
						dispatch(decrement());
					}}>
					Decrement
				</button>
				<input
					type='text'
					onChange={e => setIncrementAcount(parseInt(e.target.value))}
				/>
				{/* <button
					onClick={() => {
						setCartCount(cartCount + incrementAmont);
					}}>
					Add
				</button> */}
				<button
					onClick={() => {
						dispatch(incrementByAmount(incrementAmont));
					}}>
					Add
				</button>
			</div>
		</div>
	);
}

export default Cart;
