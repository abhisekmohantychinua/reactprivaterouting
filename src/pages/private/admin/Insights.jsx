import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Insights = () => {
	const auth = useSelector((state) => state.auth.auth);
	return auth.user.role !== 'admin' ? (
		<Navigate to='/dashborad' />
	) : (
		<>
			<h1>This is admin insights</h1>
			<p>Can only be visited by having role admin</p>
		</>
	);
};

export default Insights;
