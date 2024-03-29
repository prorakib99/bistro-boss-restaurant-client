import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const SocialLogin = () => {
    const { socialLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSocialLogin = (provider) => {
        socialLogin(provider)
            .then((result) => {
                const loggedUser = result.user;
                const savedUser = {
                    name: loggedUser.displayName,
                    email: loggedUser.email
                };
                fetch('https://bistro-boss-restaurant-server-zeta.vercel.app/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(savedUser)
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        toast.success(`${result?.user?.email || ''} Login Successful!`);
                        navigate(from, { replace: true });
                    });
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.message);
            });
    };

    return (
        <div className='grid justify-center gap-4'>
            <p className="text-neutral-700 text-xl font-medium font-['Inter']">Or sign in with</p>
            <div className='flex gap-10'>
                <button
                    onClick={() => handleSocialLogin(googleProvider)}
                    className='w-[52px] h-[52px] bg-gray-100 rounded-full border-2 flex justify-center items-center text-3xl hover:bg-sky-200 duration-300 border-neutral-700'
                >
                    <FcGoogle />
                </button>
                <button
                    onClick={() => handleSocialLogin(githubProvider)}
                    className='w-[52px] h-[52px] bg-gray-100 rounded-full border-2 flex justify-center items-center text-2xl hover:text-white duration-300 hover:bg-black border-neutral-700'
                >
                    <FaGithub />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
