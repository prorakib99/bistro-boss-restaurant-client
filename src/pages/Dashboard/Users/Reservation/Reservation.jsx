import { FaRegCalendarCheck } from 'react-icons/fa';
import SectionTitles from '../../../Shared/SectionTitles/SectionTitles';
import { IoTimeOutline } from 'react-icons/io5';

import { useState } from 'react';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { Calendar } from 'primereact/calendar';
import { Input, Select } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import swal from 'sweetalert';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const Reservation = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    const handleBookTable = (item) => {
        const { email, guest, name, phone } = item;

        const formateDate = moment(date).format('LL');
        const formateTime = moment(time).format('LT');
        const newItem = {
            name,
            email,
            userEmail: user?.email,
            phone: phone,
            guest: parseInt(guest),
            date: formateDate,
            time: formateTime
        };

        axiosSecure.post('/bookings', newItem).then((res) => {
            if (res.data.insertedId) {
                reset();
                setDate(null);
                setTime(null);
                swal('Booking Add SuccessFull', '', 'success');
            }
        });
    };

    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>Bistro Boss || Dashboard Reservation</title>
            </Helmet>

            {/* Section Title */}
            <SectionTitles subTitle='Reservation' title='BOOK A TABLE' />

            {/* Book Table */}
            <section className='py-10'>
                <form
                    onSubmit={handleSubmit(handleBookTable)}
                    className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 sm:gap-y-12'
                >
                    <div>
                        <label
                            className="text-neutral-700 text-xl font-semibold font-['Inter'] block mb-3"
                            htmlFor='date'
                        >
                            Date*
                        </label>
                        <Calendar
                            value={date}
                            className='w-full'
                            id='date'
                            showIcon
                            required
                            name='date'
                            placeholder='mm/dd/yyyy'
                            onChange={(e) => setDate(e.value)}
                            showButtonBar
                            pt={{
                                input: {
                                    root: {
                                        className:
                                            'border border-slate-200 text-gray-600 rounded py-3'
                                    }
                                },
                                dropdownButton: {
                                    root: { className: 'border border-slate-200 py-3' }
                                }
                            }}
                        />
                    </div>
                    <div>
                        <label
                            className="text-neutral-700 text-xl font-semibold font-['Inter'] block mb-3"
                            htmlFor='time'
                        >
                            Time*
                        </label>
                        <Calendar
                            id='time'
                            value={time}
                            placeholder='-- / -- --'
                            className='w-full'
                            onChange={(e) => setTime(e.value)}
                            showIcon
                            required
                            timeOnly
                            icon={() => <IoTimeOutline className='text-2xl' />}
                            pt={{
                                input: {
                                    root: {
                                        className:
                                            'border border-slate-200 text-gray-600 rounded py-3'
                                    }
                                },
                                dropdownButton: {
                                    root: { className: 'border border-slate-200 py-3' }
                                }
                            }}
                        />
                    </div>
                    <div>
                        <label
                            className="text-neutral-700 text-xl font-semibold font-['Inter'] block mb-3"
                            htmlFor='guest'
                        >
                            Guest*
                        </label>
                        <Select
                            {...register('guest', { required: true })}
                            name='guest'
                            defaultValue='1'
                            className="w-full !h-[50px] border pt-0 border-slate-200 rounded py-3 text-gray-600 text-base font-normal font-['Inter'] "
                            id='guest'
                        >
                            <option value='1'>1 Person</option>
                            <option value='2'>2 Person</option>
                            <option value='3'>3 Person</option>
                            <option value='4'>4 Person</option>
                        </Select>
                        {errors.guest && <span className='text-red-600'>Guest is Required</span>}
                    </div>
                    <div>
                        <label
                            className="text-neutral-700 text-xl font-semibold font-['Inter'] block mb-3"
                            htmlFor='name'
                        >
                            Name*
                        </label>
                        <Input
                            {...register('name', { required: true })}
                            id='name'
                            name='name'
                            defaultValue={user?.displayName || ''}
                            className="w-full !h-[50px] border border-slate-200 rounded py-3 text-gray-600 px-3 transition-all focus:outline-[#1C64F2]  text-base font-normal font-['Inter']"
                            placeholder='Your Name'
                        />
                        {errors.name && <span className='text-red-600'>Name is Required</span>}
                    </div>
                    <div>
                        <label
                            className="text-neutral-700 text-xl font-semibold font-['Inter'] block mb-3"
                            htmlFor='phone'
                        >
                            Phone*
                        </label>
                        <Input
                            {...register('phone', {
                                required: true,
                                minLength: 10,
                                maxLength: 15
                            })}
                            id='phone'
                            type='number'
                            defaultValue={user?.phoneNumber || ''}
                            name='phone'
                            className="w-full !h-[50px] border border-slate-200 rounded py-3 text-gray-600 px-3 transition-all focus:outline-[#1C64F2]  text-base font-normal font-['Inter']"
                            placeholder='Phone Number'
                        />
                        {errors.phone && <span className='text-red-600'>Phone is Required</span>}
                        {errors.phone?.type === 'minLength' && (
                            <span className='mt-2 text-red-600'>Min 10 Character</span>
                        )}
                        {errors.phone?.type === 'maxLength' && (
                            <span className='mt-2 text-red-600'>Max 15 Character</span>
                        )}
                    </div>
                    <div>
                        <label
                            className="text-neutral-700 text-xl font-semibold font-['Inter'] block mb-3"
                            htmlFor='email'
                        >
                            Email*
                        </label>
                        <Input
                            {...register('email', { required: true })}
                            id='email'
                            type='email'
                            name='email'
                            defaultValue={user?.email || ''}
                            className="w-full !h-[50px] border border-slate-200 rounded py-3 text-gray-600 px-3 transition-all focus:outline-[#1C64F2]  text-base font-normal font-['Inter']"
                            placeholder='Email'
                        />
                        {errors.email && <span className='text-red-600'>Email is Required</span>}
                    </div>
                    <div className='flex justify-center col-span-1 mt-3 md:col-span-2 lg:col-span-3'>
                        <button
                            className="flex items-center gap-2 text-white sm:text-xl font-bold font-['Inter'] bg-gradient-to-r text-base from-yellow-800 to-yellow-600 py-3 sm:py-4 px-5 sm:px-7 rounded"
                            type='submit'
                        >
                            Book A Table <FaRegCalendarCheck />
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Reservation;
