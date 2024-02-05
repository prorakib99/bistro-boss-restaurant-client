import './AllUsers.css';
import { FaUsers } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import swal from 'sweetalert';
import SectionTitles from '../../../Shared/SectionTitles/SectionTitles';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import DashboardTable from '../Shared/DashboardTable/DashboardTable';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    });

    // Handle Admin Role
    const handleAdminRole = (user) => {
        swal({
            title: 'Are you sure?',
            text: `${user.name} Admin Role`,
            icon: 'warning',
            buttons: true,
            dangerMode: true
        }).then((willUpdate) => {
            if (willUpdate) {
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
                    method: 'PATCH'
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.modifiedCount) {
                            refetch();
                            swal('SuccessFull Admin Role', {
                                icon: 'success'
                            });
                        }
                    });
            }
        });
    };

    const handleDeleteUser = (user) => {
        swal({
            title: 'Are you sure?',
            text: `${user.name} Delete This User?`,
            icon: 'warning',
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
                    method: 'DELETE'
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            refetch();
                            swal('SuccessFull Delete This User', {
                                icon: 'success'
                            });
                        }
                    });
            }
        });
    };

    const nameBodyTemplate = (user, index) => {
        return (
            <div className='flex gap-8'>
                <h2 className="text-neutral-900 text-xl font-bold font-['Inter']">
                    {index.rowIndex + 1}
                </h2>
                <h2 className="text-neutral-500 text-base font-normal font-['Inter']">
                    {user.name}
                </h2>
            </div>
        );
    };

    const emailBodyTemplate = (user) => {
        return (
            <h2 className="text-neutral-500 text-base font-normal font-['Inter']">{user.email}</h2>
        );
    };

    const roleBodyTemplate = (user) => {
        return user.role === 'admin' ? (
            <button className='px-3 py-1 text-white rounded bg-violet-500 hover:bg-violet-600'>
                Admin
            </button>
        ) : (
            <button onClick={() => handleAdminRole(user)} className='p-3 bg-[#D1A054] rounded'>
                <FaUsers className='text-2xl text-white' />
            </button>
        );
    };

    const actionBodyTemplate = (user) => {
        return (
            <button onClick={() => handleDeleteUser(user)} className='p-3 rounded bg-[#B91C1C]'>
                <FaRegTrashAlt className='text-2xl text-white' />
            </button>
        );
    };

    return (
        <div>
            {/* section Title */}
            <SectionTitles subTitle='How many??' title='MANAGE ALL USERS' />

            <div className='py-10 sm:px-[20px] lg:px-[50px] xl:px-[100px]'>
                <DashboardTable
                    data={users}
                    header1='# NAME'
                    header2='EMAIL'
                    header3='ROLE'
                    header4='ACTION'
                    item1BodyTemp={nameBodyTemplate}
                    item2BodyTemp={emailBodyTemplate}
                    item3BodyTemp={roleBodyTemplate}
                    item4BodyTemp={actionBodyTemplate}
                />
            </div>
        </div>
    );
};

export default AllUsers;
