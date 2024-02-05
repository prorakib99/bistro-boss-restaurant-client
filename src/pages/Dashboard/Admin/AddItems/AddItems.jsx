import { useForm } from 'react-hook-form';
import SectionTitles from '../../../Shared/SectionTitles/SectionTitles';
import MenuItemForm from '../Shared/MenuItemForm/MenuItemForm';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { useState } from 'react';

const imageUploadToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItems = () => {
    const [btnStatus, setBtnStatus] = useState(false);
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit
    } = useForm();

    const [axiosSecure] = useAxiosSecure();

    const onSubmit = (data) => {
        setBtnStatus(true);

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(`https://api.imgbb.com/1/upload?key=${imageUploadToken}`, {
            method: 'POST',
            body: formData
        })
            .then((res) => res.json())
            .then((imgRes) => {
                if (imgRes.success) {
                    const { name, recipe, category, price } = data;
                    const newItem = {
                        name,
                        recipe,
                        image: imgRes.data.display_url,
                        category: category.toLowerCase(),
                        price: parseFloat(price)
                    };

                    console.log(newItem);

                    axiosSecure.post('/foods', newItem).then((data) => {
                        if (data.data.insertedId) {
                            reset();
                            setBtnStatus(false);
                            toast.success('New Item Successfully Added!');
                        }
                    });
                }
            });
    };
    return (
        <div>
            <Helmet>
                <title>Admin || Add Items</title>
            </Helmet>
            <SectionTitles subTitle="What's new?" title='ADD AN ITEM' />

            <section className='md:px-10 xl:px-20'>
                <MenuItemForm
                    onAddItem={onSubmit}
                    register={register}
                    errors={errors}
                    handleSubmit={handleSubmit}
                    buttonStatus={btnStatus}
                />
            </section>
        </div>
    );
};

export default AddItems;
