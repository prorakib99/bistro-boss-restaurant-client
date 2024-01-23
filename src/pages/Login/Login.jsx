import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import bgImg from '../../assets/others/authentication.png';
import authentication2 from '../../assets/others/authentication2.png';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import {
    loadCaptchaEnginge,
    LoadCanvasTemplateNoReload,
    validateCaptcha
} from 'react-simple-captcha';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);
    const [buttonStatus, setButtonStatus] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [captchaStatus, setCaptchaStatus] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { user, loginUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.pathname?.from || '/';
    const captchaRef = useRef();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleCaptcha = () => {
        const inputText = captchaRef.current.value;
        if (inputText.length < 6) {
            return alert('Enter Captcha Text First');
        } else if (validateCaptcha(inputText) === true) {
            toast.success('Captcha Successfully Matched');
            setIsDisabled(false);
            setCaptchaStatus(true);
        } else {
            setCaptchaStatus(false);
            toast.error('Wrong Captcha Input');
            captchaRef.current.value = '';
        }
    };

    const onSubmit = (data) => {
        setButtonStatus(true);
        loginUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success(`${data?.email} Login Successful!`);
                setButtonStatus(false);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error(error.message);
                setButtonStatus(false);
            });
    };

    if (user) {
        return <Navigate to='/' replace={true}></Navigate>;
    }

    return (
        <div
            style={{ backgroundImage: `url('${bgImg}')` }}
            className='bg-no-repeat bg-cover lg:h-screen overflow-x-hidden lg:w-screen flex justify-center px-5 items-center'
        >
            <div className='grid lg:grid-cols-2 shadow-[11px_19px_31px_-8px_rgba(0,0,0,0.75)] my-5 px-5 lg:px-20 py-10 border rounded-md border-gray-300 items-center gap-10'>
                <div className='lg:block hidden'>
                    <img src={authentication2} alt='' />
                </div>
                <div>
                    <h3 className="text-center text-neutral-900 text-2xl mb-5 lg:text-[40px] font-bold font-['Inter']">
                        Login
                    </h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
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
                                {...register('password', { required: true })}
                                name='password'
                                id='password'
                                placeholder='Enter Your Password'
                                className="w-full h-[50px] px-5 py-3 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300"
                            />
                            {errors.password && (
                                <span className='text-red-500'>Password field is required</span>
                            )}
                        </div>
                        <div className='grid lg:grid-cols-2 mt-2 gap-5'>
                            <div className=''>
                                <div className="w-full h-[50px] py-2 mb-1 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300">
                                    <LoadCanvasTemplateNoReload />
                                </div>
                                <button
                                    type='button'
                                    onClick={() => loadCaptchaEnginge(6)}
                                    className="text-indigo-500 cursor-pointer text-start ps-2 text-lg hover:text-indigo-700 font-semibold font-['Inter']"
                                >
                                    Reload Captcha
                                </button>
                            </div>
                            <div className='relative'>
                                <input
                                    type='text'
                                    ref={captchaRef}
                                    name='captcha'
                                    id='captcha'
                                    disabled={captchaStatus}
                                    placeholder='Enter Captcha Text'
                                    className="w-full h-[50px] disabled:bg-slate-200 px-5 py-3 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300"
                                />
                                <button
                                    type='button'
                                    onClick={handleCaptcha}
                                    disabled={captchaStatus}
                                    className='btn btn-outline disabled:hidden mt-2 mr-2 absolute right-0 pb-[3px] btn-sm font-bold'
                                >
                                    Check
                                </button>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <button
                                type='submit'
                                disabled={isDisabled}
                                className="w-full h-[50px] cursor-pointer duration-300 text-xl font-bold font-['Inter'] bg-[#ffb84e] focus:bg-[#ffb84e] disabled:bg-slate-200 disabled:text-slate-500 text-black bg-opacity-70 rounded-lg flex items-center justify-center"
                            >
                                {buttonStatus ? (
                                    <span className='loading loading-spinner loading-md'></span>
                                ) : (
                                    'Sign In'
                                )}
                            </button>
                        </div>
                    </form>
                    <div className="text-[#D1A054] text-center my-4 text-lg font-medium font-['Inter']">
                        <span>New here? </span>
                        <Link to='/register' className='font-bold hover:text-[#ffb84e]'>
                            Create a New Account
                        </Link>
                    </div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;
