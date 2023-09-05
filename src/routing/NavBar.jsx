import { NavLink } from 'react-router-dom';
import { routing } from './routing';
import { useDispatch, useSelector } from 'react-redux';
import { removeAuth } from '../storage/authSlice';
import { createAlert } from '../storage/alertSlice';

const NavBar = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth.auth);
	const handleLogout = () => {
		dispatch(
			removeAuth({
				user: auth.user,
				jwt: auth.jwt,
			})
		);
		dispatch(createAlert({
			message: 'Logout successfully',
			type: 'success'
		}))
	};
	return (
		<>
			<div
				className='h-[2.5rem] w-screen flex justify-around items-center 
			p-5 bg-blue-800'
			>
				{auth.user
					? routing
						.filter(
							(route) =>
								route.role === auth.user.role ||
								(route.role === 'any' &&
									route.name !== 'Login')
						)
						.map((route) => (
							<NavLink
								key={route.id}
								to={route.path}
								className={({ isActive }) => {
									return isActive
										? 'border-b-2 '
										: null;
								}}
							>
								{route.name}
							</NavLink>
						))
					: routing
						.filter((route) => !route.isPrivate)
						.map((route) => (
							<NavLink
								key={route.id}
								to={route.path}
								className={({ isActive }) => {
									return isActive
										? 'border-b-2 '
										: null;
								}}
							>
								{route.name}
							</NavLink>
						))}
				{auth.user && (
					<NavLink onClick={handleLogout}>Logout</NavLink>
				)}
			</div>
		</>
	);
};

export default NavBar;
