import { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Textarea } from '@chakra-ui/react';
import { FaSpaceShuttle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import SectionTitles from '../../../Shared/SectionTitles/SectionTitles';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import moment from 'moment';
const AddReview = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [rating, setRating] = useState(0);

    const handleAddReview = (item) => {
        if (!rating) {
            toast.error('Places Provide Any Rating');
        } else {
            const { recipe, suggestion, details } = item;
            const newReview = {
                name: user?.displayName,
                recipe,
                suggestion,
                details,
                rating,
                createAt: moment().format('dddd, MMMM D, YYYY, h:mm:ss a')
            };
            axiosSecure.post('/user-review', newReview).then((res) => {
                if (res.data.insertedId) {
                    reset();
                    setRating(0);
                    toast.success('Review Successfully Added');
                }
            });
        }
    };
    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>Bistro Boss || Add Review</title>
            </Helmet>

            {/* Section Title */}
            <SectionTitles subTitle='Sharing is Caring!!!' title='GIVE A REVIEW...' />
            <section className='py-10 lg:px-[80px]'>
                <form
                    onSubmit={handleSubmit(handleAddReview)}
                    className='bg-zinc-100 px-[30px] md:px-[100px] py-[30px] md:py-[50px]'
                >
                    <div className='text-center'>
                        <h2 className="text-neutral-900 text-[32px] font-medium font-['Cinzel']">
                            Rate US!
                        </h2>
                        <div className='flex items-center justify-center pt-5'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                onChange={setRating}
                                isRequired
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 pt-10'>
                        <div>
                            <label
                                htmlFor='recipe'
                                className="block text-neutral-700 text-xl mb-3 font-semibold font-['Inter']"
                            >
                                Which recipe you liked most?
                            </label>
                            <input
                                {...register('recipe', { required: true })}
                                id='recipe'
                                className='w-full px-4 py-3 text-xl text-black border border-gray-300 rounded'
                                type='text'
                                placeholder='Recipe you liked most'
                            />
                            {errors.recipe && (
                                <span className='text-red-600'>Recipe is Required</span>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor='suggestion'
                                className="block text-neutral-700 text-xl mb-3 font-semibold font-['Inter']"
                            >
                                Do you have any suggestion for us?
                            </label>
                            <input
                                {...register('suggestion', { required: true })}
                                id='suggestion'
                                className='w-full px-4 py-3 text-xl text-black border border-gray-300 rounded'
                                type='text'
                                placeholder='Suggestion'
                            />
                            {errors.suggestion && (
                                <span className='text-red-600'>Suggestion is Required</span>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor='details'
                                className="block text-neutral-700 text-xl mb-3 font-semibold font-['Inter']"
                            >
                                Kindly express your care in a short way.
                            </label>
                            <Textarea
                                {...register('details', { required: true })}
                                className='w-full !px-4 !py-3 !text-xl text-black border !bg-white border-gray-300 rounded'
                                rows={6}
                                id='details'
                                placeholder='Review in detail'
                            />
                            {errors.details && (
                                <span className='text-red-600'>Details is Required</span>
                            )}
                        </div>
                        <div className='mx-auto'>
                            <button
                                type='submit'
                                className="flex items-center py-4 px-7 rounded gap-3 bg-gradient-to-r from-yellow-800 to-yellow-600 text-white text-xl font-bold font-['Inter']"
                            >
                                Send Review <FaSpaceShuttle />
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default AddReview;
