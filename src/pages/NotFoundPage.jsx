import React from 'react';
import NotFoundIcon from '../assets/App-Error.png'
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img src={NotFoundIcon} alt="OPPS!! APP NOT FOUND" className='w-74 h-74' />
                <h1 className='font-bold text-3xl text-black mt-5'>OPPS!! APP NOT FOUND</h1>
                <p className='font-normal text-black mt-2'>The App you are requesting is not found on our system.  please try another apps</p>
                <div>
                    <button onClick={() => navigate("/")} className='border rounded bg-purple-700 hover:bg-purple-500 text-white font-bold py-1 px-2 mt-3 mb-4 cursor-pointer'>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;