import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const UserStore = () => {
	const auth = useSelector((state) => state.auth.auth);
	return auth.user.role !== 'user' ? (
		<Navigate to='/dashboard' />
	) : (
		<>
			<h1>This is User store</h1>
			<p>Only can be visited by having role user</p>
		</>
	);
};

export default UserStore;
