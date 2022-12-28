import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(email, password, name);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-8  '>
                <h2 className='text-3xl my-10 font-bold'>Sign Up!</h2>
                <form onSubmit={handleSignUp} className='w-1/2 p-6 shadow-2xl rounded-lg'>

                    <div >
                        <h2 className='my-5'>Your Name</h2>
                        <input type="text" name='name' className="rounded-lg w-full" placeholder="Name " required />

                    </div>
                    <div >
                        <h2 className='my-5'>Your Email</h2>
                        <input type="email" name='email' className="rounded-lg w-full" placeholder="Email " required />

                    </div>

                    <div>
                        <h2 className='my-5'>Your Password</h2>
                        <input type="password" name='password' className="rounded-lg w-full" placeholder="Password " required />
                    </div>

                    <button type="submit" className="mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Login</button>

                </form>
                <p className='my-5'>Already have an account?
                    <Link to='/login' className='text-yellow-500 font-semibold'> Login</Link>
                </p>


            </div>
        </div>
    );
};

export default SignUp;