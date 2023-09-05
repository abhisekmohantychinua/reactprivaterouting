import { useSelector } from "react-redux";
import AdminDashboard from './admin/AdminDashboard';
import UserDashboard from './user/UserDashboard';

const Dashboard = () => {
	const auth = useSelector(state => state.auth.auth)
	if (auth.user.role === 'admin') {
		return <>
			<AdminDashboard />
		</>
	} else {
		return <>
			<UserDashboard />
		</>
	}
};

export default Dashboard;
