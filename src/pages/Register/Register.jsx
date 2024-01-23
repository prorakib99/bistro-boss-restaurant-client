import bgImg from '../../assets/others/authentication.png';
import { Link, useNavigate } from 'react-router-dom';
import authentication2 from '../../assets/others/authentication2.png';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Register = () => {
    const [show, setShow] = useState(false);
    const { user, createUser, logOut } = useContext(AuthContext);
    const [buttonStatus, setButtonStatus] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        setButtonStatus(true);
        createUser(data.email, data.password)
            .then((result) => {
                const LoggedUser = result.user;
                console.log(LoggedUser);
                logOut()
                    .then(() => {
                        navigate('/login');
                    })
                    .catch((error) => console.log(error));
                setButtonStatus(false);
                toast.success(`User Registered Successful`);
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.message);
                setButtonStatus(false);
            });
    };

    if (user) {
        return navigate('/');
    }
    return (
        <div
            style={{ backgroundImage: `url('${bgImg}')` }}
            className='bg-no-repeat bg-cover lg:h-screen overflow-x-hidden lg:w-screen flex justify-center px-5 items-center'
        >
            <div className='grid lg:grid-cols-2 shadow-[11px_19px_31px_-8px_rgba(0,0,0,0.75)] my-5 px-5 lg:px-20 py-10 border rounded-md border-gray-300 items-center gap-10'>
                <div>
                    <h3 className="text-center text-neutral-900 text-2xl mb-5 lg:text-[40px] font-bold font-['Inter']">
                        Sign Up
                    </h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
                        <div className='flex gap-2 flex-col'>
                            <label
                                htmlFor='name'
                                className="text-neutral-700 ps-1 text-lg font-semibold font-['Inter']"
                            >
                                Name
                            </label>
                            <input
                                type='text'
                                {...register('name', { required: true })}
                                name='name'
                                id='name'
                                placeholder='Full Name'
                                className="w-full h-[50px] px-5 py-3 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300"
                            />
                            {errors.name && (
                                <span className='text-red-500'>Name field is required</span>
                            )}
                        </div>
                        <div className='flex gap-2 flex-col'>
                            <label
                                htmlFor='email'
                                className="text-neutral-700 ps-1 text-lg font-semibold font-['Inter']"
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                {...register('email', { required: true })}
                                name='email'
                                id='email'
                                placeholder='Enter Email'
                                className="w-full h-[50px] px-5 py-3 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300"
                            />
                            {errors.email && (
                                <span className='text-red-500'>Email field is required</span>
                            )}
                        </div>
                        <div className='flex gap-2 relative flex-col'>
                            <label
                                htmlFor='password'
                                className="text-neutral-700 ps-1 text-lg font-semibold font-['Inter']"
                            >
                                Password
                            </label>
                            <p className='absolute mr-3 right-0 top-12'>
                                {show ? (
                                    <FaEyeSlash
                                        onClick={() => setShow(!show)}
                                        className='text-[25px] cursor-pointer'
                                    />
                                ) : (
                                    <FaEye
                                        onClick={() => setShow(!show)}
                                        className='text-2xl cursor-pointer'
                                    />
                                )}
                            </p>
                            <input
                                type={show ? 'text' : 'password'}
                                {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })}
                                name='password'
                                id='password'
                                placeholder='Enter Your Password'
                                className="w-full h-[50px] px-5 py-3 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300"
                            />

                            {errors.password?.type === 'required' && (
                                <span className='text-red-500'>Password field is required</span>
                            )}
                            {errors.password?.type === 'minLength' && (
                                <span className='text-red-500'>Password must six character</span>
                            )}
                            {errors.password?.type === 'maxLength' && (
                                <span className='text-red-500'>
                                    Password not upto twenty character
                                </span>
                            )}
                            {errors.password?.type === 'pattern' && (
                                <span className='text-red-500'>
                                    Please Enter at least enter one (Uppercase, Lowercase, Number
                                    and Special)
                                </span>
                            )}
                        </div>
                        <div className='flex gap-2 flex-col'>
                            <label
                                htmlFor='password'
                                className="text-neutral-700 ps-1 text-lg font-semibold font-['Inter']"
                            >
                                Photo URL
                            </label>
                            <input
                                type='url'
                                {...register('photo', { required: true })}
                                name='photo'
                                id='photo'
                                placeholder='https://photoURL.com...'
                                className="w-full h-[50px] px-5 py-3 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300"
                            />
                            {errors.photo && (
                                <span className='text-red-500'>Photo URL field is required</span>
                            )}
                        </div>
                        <div className='mt-3'>
                            <button
                                type='submit'
                                className="w-full h-[50px] cursor-pointer duration-300 text-white text-xl font-bold font-['Inter'] bg-[#D1A054] hover:bg-[#ffb84e] focus:bg-[#ffb84e] hover:text-black bg-opacity-70 rounded-lg flex items-center justify-center"
                            >
                                {buttonStatus ? (
                                    <span className='loading loading-spinner loading-md'></span>
                                ) : (
                                    'Sign Up'
                                )}
                            </button>
                        </div>
                    </form>
                    <div className="text-[#D1A054] text-center my-4 text-lg font-medium font-['Inter']">
                        <span>Already registered? </span>
                        <Link to='/login' className='font-bold hover:text-[#ffb84e]'>
                            Go to log in
                        </Link>
                    </div>
                    <SocialLogin />
                </div>
                <div className='lg:block hidden'>
                    <img src={authentication2} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Register;
