import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
	const auth = useSelector((state) => state.auth.auth);

	return auth.user === null && auth.jwt === '' ? (
		<Navigate to='/login' />
	) : (
		<>
			<Outlet />
		</>
	);
};

export default PrivateRoutes;
