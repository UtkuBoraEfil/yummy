import React from 'react';

export default function Mail(){
    return (
        <form action="" className='flex justify-center flex-col lg:flex-row gap-3 mt-7'>
            <input type="text" placeholder='email@framer.com' className='px-5 py-3 rounded-3xl'/>
            <button className='bg-my-orange px-4 rounded-3xl py-3'>Sign Up</button>
        </form>
    );
}