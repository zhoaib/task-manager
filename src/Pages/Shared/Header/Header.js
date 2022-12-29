import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>


            <Navbar className='bg-blue-600'
                fluid={true}
                rounded={true}
            >
                <Link to={'/'}><button type="button" className="px-8 py-3 text-xl font-semibold border rounded-xl dark:border-gray-100 dark:text-gray-100">Task Manager</button></Link>

                <Navbar.Toggle />
                <Navbar.Collapse>

                    <Link to={'/'}><button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Home</button></Link>
                    <Link to={'/addtask'}><button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Add Task</button></Link>
                    <Link to={'/mytask'}><button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">My Task</button></Link>
                    <Link to={'/completedtask'}> <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Completed Task</button></Link>
                    {
                        user?.uid ?

                            <Link onClick={handleLogOut} >
                                <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Logout</button>
                            </Link>

                            :

                            <Link to='/login' >
                                <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Login</button>
                            </Link>


                    }
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Header;