import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './AllUsers.css';
import { FaUsers } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Button } from 'primereact/button';
import swal from 'sweetalert';
import SectionTitles from '../../../Shared/SectionTitles/SectionTitles';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

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

    const paginatorLeft = <Button type='button' icon='pi pi-refresh' text />;
    const paginatorRight = <Button type='button' icon='pi pi-download' text />;

    return (
        <div>
            {/* section Title */}
            <SectionTitles subTitle='How many??' title='MANAGE ALL USERS' />

            <div className='py-10 sm:px-[20px] lg:px-[50px] xl:px-[100px]'>
                <DataTable
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    paginatorTemplate='RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink'
                    currentPageReportTemplate='{first} to {last} of {totalRecords}'
                    paginatorLeft={paginatorLeft}
                    paginatorRight={paginatorRight}
                    value={users}
                    pt={{
                        headerRow: {
                            className: '!bg-[#D1A054] !rounded-tl-[15px] !rounded-tr-[15px]'
                        },
                        bodyRow: { className: '!py-5 border-b border-gray-200' }
                    }}
                    tableStyle={{ minWidth: '60rem' }}
                >
                    <Column header='NAME' body={nameBodyTemplate}></Column>
                    <Column header='EMAIL' body={emailBodyTemplate}></Column>
                    <Column header='ROLE' body={roleBodyTemplate}></Column>
                    <Column header='ACTION' body={actionBodyTemplate}></Column>
                </DataTable>
            </div>
        </div>
    );
};

export default AllUsers;
