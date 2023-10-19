import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className="max-w-5xl pb-36 pt-20 mx-auto bg-[#009CDB26]">
                <div className='flex justify-center'>
                <img className='h-96' src="https://i.ibb.co/T4mC54y/1535143-220600-P161-UP-995.jpg" alt="" />

                </div>
                <div className="mt-20 max-w-lg mx-auto text-white border-solid border-2 border-indigo-600 bg-slate-500">
                   
                    <p>Some Things went worng</p>
                    <p>Check the internet connection and Route</p>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;