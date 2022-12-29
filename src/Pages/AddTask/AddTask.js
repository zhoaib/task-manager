import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AddTask = () => {
    const [updated, setUpdated] = useState('');
    const { user } = useContext(AuthContext)
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate()

    const addTask = event => {
        event.preventDefault()
        const form = event.target;
        const task = form.task.value;
        const details = form.details.value;
        const actionDate = form.date.value;
        const image = form.img.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imgHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const myTask = {
                        taskName: task,
                        taskDetails: details,
                        taskImage: imgData.data.url,
                        taskDate: actionDate,
                        userEmail: user.email,
                        userName: user.displayName,
                    }
                    fetch('http://localhost:5000/allTask', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(myTask)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success('Task added successfully');
                            navigate('/mytask')

                        })
                }
            })
    }
    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            setUpdated(updated);

        }
    }

    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000" className='text-center my-20 text-3xl font-semibold'>
            Add Your Daily Task
            <div>
                <div className='flex flex-col justify-center items-center mt-8  '>
                    <form onSubmit={addTask} className="w-1/2 p-6 shadow-2xl rounded-xl">

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
                            <input name="img" className="mb-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" required />
                        </div>

                        <button type="submit" onKeyDown={handleKeyDown} className="mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Add Task</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;