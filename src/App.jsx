import { Route, Routes } from 'react-router-dom';
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import SignUp from './pages/public/SignUp';
import PrivateRoutes from './pages/private/PrivateRoutes';
import Profile from './pages/private/Profile';
import Dashboard from './pages/private/Dashboard';
import UserStore from './pages/private/user/UserStore';
import Insights from './pages/private/admin/Insights';
import NavBar from './routing/NavBar';
import Alert from './components/Alert';
import { useSelector } from 'react-redux';
import { ImSpinner3 } from 'react-icons/im';
import './App.css';

function App() {
	const loading = useSelector((state) => state.loading.loading);
	return loading ? (
		<div className='w-full h-full flex justify-center items-center'>
			<ImSpinner3 className='animate-spin text-3xl' />
		</div>
	) : (
		<>
			{/* alerts and erros */}
			<Alert />
			<NavBar />

			<Routes>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='login'
					element={<Login />}
				/>
				<Route
					path='signup'
					element={<SignUp />}
				/>
				<Route
					path='/'
					element={<PrivateRoutes />}
				>
					<Route
						path='dashboard'
						element={<Dashboard />}
					/>
					<Route
						path='profile'
						element={<Profile />}
					/>
					<Route
						path='insights'
						element={<Insights />}
					/>
					<Route
						path='store'
						element={<UserStore />}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
