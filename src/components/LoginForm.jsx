import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addAuth } from '../storage/authSlice';
import { createAlert, removeAlert } from '../storage/alertSlice';
import { enableLoading, disableLoading } from '../storage/loadSlice';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const users = useSelector((state) => state.users.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(enableLoading());
		const user = users.filter(
			(u) => u.email === email && u.password === password
		);
		if (user[0]) {
			dispatch(
				addAuth({
					user: user[0],
					jwt: JSON.stringify(user[0]),
				})
			);
			dispatch(removeAlert())
			navigate('/dashboard');
		} else {
			dispatch(
				createAlert({
					message: 'Invalid email or password',
					type: 'error',
				})
			);
		}
		setEmail('');
		setPassword('');
		dispatch(disableLoading());
	};
	useEffect(() => {
		dispatch(addAuth({
			user: null,
			jwt: ''
		}))
	}, [])

	return (

		<form
			className='h-4/5 w-3/5 flex flex-col justify-around items-center p-5 border-2 rounded-xl m-5'
			onSubmit={handleSubmit}
		>
			<div>
				<label
					htmlFor='email'
					className='text-xl m-5'
				>
					Email
				</label>
				<input
					type='email'
					id='email'
					className='border-b-2 bg-transparent text-white focus:outline-none'
					autoComplete='off'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className='my-5'>
				<label
					htmlFor='password'
					className='text-xl m-5'
				>
					Password
				</label>
				<input
					type='password'
					id='password'
					className='border-b-2 bg-transparent text-white focus:outline-none'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div className='w-full flex justify-between items-center'>
				<Link
					to='/signup'
					className='text-sm underline outline-none'
				>
					Do not have an account sign up?
				</Link>
				<button
					type='submit'
					className='text-sm md:text-md text-green-500 border-green-500 border-2 rounded-lg hover:text-white hover:border-green-500 hover:bg-green-500'
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
