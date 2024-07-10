import React from 'react';
import Card3 from './card3';

export default function Comp3() {
    return (
        <div className='max-w-6xl mx-auto px-5 py-20'>
            <Card3 title='Do you offer non-dairy milk options?' description='
Yes, we offer almond, soy, and oat milk as non-dairy alternatives.'/>
            <Card3 title='Can I order online for pickup?' description='Absolutely! You can place your order online through our website for quick and easy pickup.'/>
            <Card3 title='Do you have free Wi-Fi?' description='Yes, we offer free Wi-Fi to all our customers. Just ask our staff for the password.' />
            <Card3 title='Where are you located?' description='We are located at 123 Main Street, right in the heart of downtown.' />
        </div>
    );
}