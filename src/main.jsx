import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { ChakraProvider } from '@chakra-ui/react';
import AuthProvider from './providers/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <HelmetProvider>
                <ChakraProvider>
                    <ToastContainer
                        position='top-right'
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme='colored'
                    />
                    <RouterProvider router={router} />
                </ChakraProvider>
            </HelmetProvider>
        </AuthProvider>
    </React.StrictMode>
);
