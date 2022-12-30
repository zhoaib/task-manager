import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Switch from "react-switch";
import { ThemeContext } from '../../../context/ThemeProvider/ThemeProvider';

const Header = () => {

    const { theme, toogleTheme } = useContext(ThemeContext)

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>


            <Navbar className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
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
                    <Switch className='mt-3' onChange={() => toogleTheme()} checked={theme} />

                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Header;