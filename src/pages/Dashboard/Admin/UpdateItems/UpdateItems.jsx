import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import MenuItemForm from '../Shared/MenuItemForm/MenuItemForm';
import { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const UpdateItems = () => {
    const [btnStatus, setBtnStatus] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();
    const item = useLoaderData();
    const id = item._id;
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    const onUpdateItem = async (item) => {
        setBtnStatus(true);
        axiosSecure.put(`/updateFoods/${id}`, item).then((res) => {
            if (res.data.modifiedCount > 0) {
                setBtnStatus(false);
                toast.success('Successfully Updated');
                navigate('/dashboard/admin/manageItems');
            } else {
                setBtnStatus(false);
                toast.error('Please change something');
            }
        });
    };

    return (
        <div>
            <h2 className="text-center text-neutral-900 text-[40px] font-normal font-['Inter']">
                UPDATE ITEM
            </h2>
            <div>
                <MenuItemForm
                    onAddItem={onUpdateItem}
                    handleSubmit={handleSubmit}
                    register={register}
                    errors={errors}
                    update={true}
                    updateValue={item}
                    buttonStatus={btnStatus}
                />
            </div>
        </div>
    );
};

export default UpdateItems;
