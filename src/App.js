import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';

function App() {


  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: "green",
            color: 'white',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: '#FFAE6D',
              secondary: "green",
            },
          },
        }}
      ></Toaster>

    </div>
  );
}

export default App;
