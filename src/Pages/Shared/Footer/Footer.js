import React from 'react';

const Footer = () => {
    return (

        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div><h2 className='text-3xl text-center font-bold'>
                Task Manager
            </h2></div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="font-bold block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Task Manager™. All Rights Reserved.
            </span>
        </footer>

    );
};

export default Footer;