import React from 'react';

const AddTask = () => {
    return (
        <div className='text-center my-20 text-3xl font-semibold'>
            Add Your Daily Task
            <div>
                <div className='flex flex-col justify-center items-center mt-8  '>
                    <form className="w-1/2 p-6 shadow-2xl">

                        <div >
                            <h2 className='font-bold text-xl my-3'>Name of your task</h2>
                            <input type="text" name='task' className="rounded-lg w-full" placeholder="Task Name " required />
                        </div>

                        <div >
                            <h2 className='font-bold text-xl my-3'>Details about task</h2>
                            <input type="text" name='details' className="rounded-lg w-full" placeholder="Details " required />
                        </div>

                        <div >
                            <h2 className='font-bold text-xl my-3'>Date for the task</h2>
                            <input type="text" name='date' className="rounded-lg w-full" placeholder="Date " required />
                        </div>

                        <div>
                            <h2 className='font-bold text-xl my-3'>Any photo for the task</h2>
                            <input name="img" className="mb-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" />
                        </div>

                        <button type="submit" className="mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Add Task</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;