import { useDispatch, useSelector } from 'react-redux';
import { ImCross } from 'react-icons/im';
import { removeAlert } from '../storage/alertSlice';

const Alert = () => {
	const alert = useSelector((state) => state.alert.alert);
	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(removeAlert());
	};

	if (alert) {
		return (
			<div className='w-full h-[3rem] absolute z-50 mt-8 flex justify-center text-xl text-white'>
				<div
					className={
						'w-2/3 h-full flex border-2  text-center justify-center p-2 items-center rounded-full ' +
						(alert.type === 'error'
							? 'bg-red-500 border-red-500 '
							: 'bg-green-500 border-green-500 ')
					}
				>
					<span className='w-11/12 text-center'>
						{alert.message}
					</span>
					<ImCross
						className='w-1/12 text-end cursor-pointer'
						onClick={handleClose}
					/>
				</div>
			</div>
		);
	} else {
		return <></>;
	}
};

export default Alert;
