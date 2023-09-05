import LoginForm from '../../components/LoginForm';

const Login = () => {
	return (
		<div className='h-1/2 flex flex-col justify-center items-center'>
			<h1 className='text-4xl'>Login</h1>
			<LoginForm />
		</div>
	);
};

export default Login;
