import React from 'react';
import errorImg from '../../assets/download.png'
const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 mt-36'>
            <img src={errorImg} alt="" />
            <h2 className="text-5xl">Oooppss!</h2>
            <h2 className="text-3xl">Page Not found</h2>
        </div>
    );
};

export default Error;