import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';

const MyTask = () => {

    const { user } = useContext(AuthContext)


    const { data: allTask, isLoading, refetch } = useQuery({
        queryKey: ['myTask'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/myTask?email=${user?.email}`);
                const data = await res.json();
                return data;

            }
            catch (error) {

            }

        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDelete = (id) => {
        console.log(id);
        const proced = window.confirm("Confirm Delete?");
        if (proced) {
            fetch(`http://localhost:5000/myTask/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Task deleted')
                        refetch();
                    }
                });
        }
    };
    const handleComplete = (id) => {
        fetch(`http://localhost:5000/myTask/${id}`, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("Task Completed");
                    refetch()

                }

            });
    };



    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="3000">
            <h2 className='text-2xl my-10 text-center font-bold'>You have {allTask?.length} task to complete yet</h2>

            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-10'>
                {
                    allTask?.map(task =>
                        <div key={task._id} className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                            <img src={task.taskImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold tracking-wide">{task.taskName}</h2>
                                    <p className="dark:text-gray-100"><strong>Details: </strong>{task.taskDetails}</p>
                                    <p className="dark:text-gray-100"><strong>Date of the task:</strong> {task.taskDate}</p>
                                </div>
                                {
                                    task.status !== "completed" && (
                                        <button onClick={() => handleComplete(task._id)} type="submit" className="mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Complete Task</button>
                                    )
                                }
                                {
                                    task.status === "completed" && <button type="submit" className="mt-5 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Task Completed</button>
                                }


                                <button onClick={() => handleDelete(task._id)} type="button" className="mt-5 text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Delete Task</button>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default MyTask;