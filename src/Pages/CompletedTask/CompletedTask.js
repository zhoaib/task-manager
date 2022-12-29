import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';

const CompletedTask = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/myTask?email=${user?.email}`
    const { data: allTask = [], isLoading, refetch } = useQuery({
        queryKey: ['myTask'],
        queryFn: async () => {
            try {
                const res = fetch(url);
                const data = await (await res).json();
                return data;
            }
            catch (error) {

            }
        }
    })

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

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="3000">
            <div>
                <div>
                    <h2 className='text-2xl my-10 text-center font-bold'>You have completed {allTask?.length} tasks successfully</h2>
                    <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-10 '>
                        {
                            allTask.map(task => task.status === "completed" &&
                                <div key={task._id} className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                                    <img src={task.taskImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-semibold tracking-wide">{task.taskName}</h2>
                                            <p className="dark:text-gray-100"><strong>Details: </strong>{task.taskDetails}</p>
                                            <p className="dark:text-gray-100"><strong>Date of the task:</strong> {task.taskDate}</p>
                                        </div>
                                        <button onClick={() => handleDelete(task._id)} type="button" className="mt-5 text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Delete Task</button>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>



            </div>
        </div>
    );
};

export default CompletedTask;