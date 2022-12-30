import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import CompletedTask from "../../Pages/CompletedTask/CompletedTask";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyTask from "../../Pages/MyTask/MyTask";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/mytask',
                element: <PrivateRoute><MyTask></MyTask></PrivateRoute>
            },
            {
                path: '/addtask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: '/completedtask',
                element: <PrivateRoute><CompletedTask></CompletedTask></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;