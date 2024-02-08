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
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <HelmetProvider>
                <ChakraProvider>
                    <QueryClientProvider client={queryClient}>
                        <Toaster position='top-center' reverseOrder={false} />
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
                    </QueryClientProvider>
                </ChakraProvider>
            </HelmetProvider>
        </AuthProvider>
    </React.StrictMode>
);
