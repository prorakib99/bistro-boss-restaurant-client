import { Helmet } from 'react-helmet-async';
import useCart from '../../../../hooks/useCart';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Navigate } from 'react-router-dom';
import visaFront from '../../../../assets/cards/visa-card-front.png';
import visaBack from '../../../../assets/cards/visa-card-back.png';
import masterFront from '../../../../assets/cards/master-card-front.png';
import masterBack from '../../../../assets/cards/master-card-back.png';

const paymentGatewayToken = import.meta.env.VITE_PAYMENT_GATEWAY_TOKEN;
const stripePromise = loadStripe(paymentGatewayToken);

const Payments = () => {
    const [cart] = useCart();
    const total = cart?.reduce((sum, item) => sum + item.price, 0);

    const price = parseFloat(total.toFixed(2));

    if (total === 0) {
        return <Navigate to='/' replace={true} />;
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss || Payments</title>
            </Helmet>
            <div className='pt-20 mx-auto text-center max-w-[500px]'>
                <h1 className="text-center text-neutral-900 text-[40px] font-normal font-['Inter']">
                    Payment
                </h1>

                <div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm cart={cart} price={price} />
                    </Elements>
                </div>
                <p className='text-center text-2xl font-bold'>Total Cost: ${price}</p>
            </div>
            <div className='bg-slate-400 lg:w-4/6 mx-auto my-10 rounded-2xl p-8'>
                <h3 className='text-xl mb-8 text-white font-bold text-center'>
                    Try to Payment on this Cards
                </h3>
                <div className='flex items-center justify-center gap-8 flex-wrap'>
                    <div className='flex flex-col gap-8'>
                        <img src={visaFront} alt='' />
                        <img src={visaBack} alt='' />
                    </div>
                    <div className='flex flex-col gap-8'>
                        <img src={masterFront} alt='' />
                        <img src={masterBack} alt='' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payments;
