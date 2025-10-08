import React from 'react';
import ErrorIcon from '../assets/error-404.png'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img src={ErrorIcon} alt="OPPS!! APP NOT FOUND" className='w-74 h-74'/>
            <h1 className='font-bold text-3xl text-black mt-5'>Oops, page not found!</h1>
            <p className='font-normal mt-2'>The page you are looking for is not available.</p>
            <div>
                <button onClick={()=> navigate("/")} className='border rounded bg-purple-700 text-white font-bold py-1 px-2 mt-3 mb-4'>Go Back</button>
            </div>
            </div>
            
        </div>
    );
};

export default ErrorPage;