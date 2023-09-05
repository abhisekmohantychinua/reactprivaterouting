/* eslint-disable no-unused-vars */
import React from 'react';
import SignUpForm from '../../components/SignUpForm';

const SignUp = () => {
	return (
		<div className='h-4/5 flex flex-col justify-center items-center'>
			<h1 className='text-4xl'>Sign Up</h1>
			<SignUpForm />
		</div>
	);
};

export default SignUp;
