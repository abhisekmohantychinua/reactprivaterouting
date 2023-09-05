import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../storage/userSlice';
import { enableLoading, disableLoading } from '../storage/loadSlice';
import { createAlert } from '../storage/alertSlice';

const SignUpForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(enableLoading())
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData)
        dispatch(addUser(data))
        dispatch(disableLoading())
        dispatch(createAlert({
            message: 'Account created successfully.',
            type: 'success'
        }))
        navigate('/login')
    }
    return <form
        className='h-full w-3/5 flex flex-col justify-around items-center p-5 border-2 rounded-xl m-5'
        onSubmit={handleSubmit}
    >
        <div className='my-5'>
            <label
                htmlFor='name'
                className='text-xl m-5'
            >
                Name
            </label>
            <input
                type='text'
                id='name'
                name='name'
                className='border-b-2 bg-transparent text-white focus:outline-none'
                autoComplete='off'
            />
        </div>
        <div className='my-5'>
            <label
                htmlFor='email'
                className='text-xl m-5'
            >
                Email
            </label>
            <input
                type='email'
                id='email'
                name='email'
                className='border-b-2 bg-transparent text-white focus:outline-none'
                autoComplete='off'
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
                name='password'
                className='border-b-2 bg-transparent text-white focus:outline-none'
            />
        </div>
        <div className='my-5'>
            <label
                htmlFor='role'
                className='text-xl m-5'
            >
                Role
            </label>
            <select name='role' id="role" className='border-b-2 bg-transparent text-white focus:outline-none focus:bg-black focus:ring-blue-700 '>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>
        </div>
        <div className='w-full flex justify-between items-center'>
            <Link
                to='/login'
                className='text-sm underline outline-none'
            >
                Already have an account Log in?
            </Link>
            <button
                type='submit'
                className='text-sm md:text-md text-green-500 border-green-500 border-2 rounded-lg hover:text-white hover:border-green-500 hover:bg-green-500'
            >
                Submit
            </button>
        </div>
    </form>
};

export default SignUpForm;
