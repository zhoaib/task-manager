import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';



const Login = () => {
    useTitle('Login')
    const { login, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider()

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
            })
            .then(error => console.log(error));
    };

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch((error) => console.error(error));
    };


    return (

        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000" className='flex flex-col justify-center items-center mt-8  '>
            <h2 className='text-3xl my-10 font-bold'>Login!</h2>
            <form onSubmit={handleLogin} className='w-1/2 p-6 shadow-2xl rounded-lg'>

                <div >
                    <h2 className='my-5'>Your Email</h2>
                    <input type="text" name='email' className="rounded-lg w-full" placeholder="Email " required />

                </div>

                <div>
                    <h2 className='my-5'>Your Password</h2>
                    <input type="password" name='password' className="rounded-lg w-full" placeholder="Password " required />
                </div>

                <button type="submit" className="mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Login</button>

            </form>
            <p className='my-5'>Don't have an account?
                <Link to='/signup' className='text-blue-600 font-semibold'> Signup</Link>
            </p><hr></hr>
            <button onClick={handleGoogleLogin} type="button" className="mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Login With Google</button>

        </div>
    );
};

export default Login;