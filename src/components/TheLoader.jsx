import React from 'react';

const TheLoader = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-neutral-950'>
            <span className="loading loading-dots loading-lg text-white"></span>
        </div>
    );
};

export default TheLoader;