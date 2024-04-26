"use client"
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios'; // Import Axios
import Payment from '../component/Payment';

function Page() {
  const [stripePromise, setStripePromise] = useState(null);
  const [publishableKey, setPublishableKey] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/config"); // Use Axios to fetch data
        const { publishableKey } = res.data;
        setPublishableKey(publishableKey);
        setStripePromise(loadStripe(publishableKey));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Payment stripePromise={stripePromise} />
    </main>
  );
}

export default Page;
