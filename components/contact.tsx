import React from 'react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function Contact(){
    return (
        <div className='w-full h-[228px] rounded-3xl bottom-8 backdrop-blur-lg flex flex-col justify-between two-items py-10 px-10'>
            <div className='flex justify-center gap-4 flexbox-item'>
                <div className='grid place-content-center border p-4 border-my-white rounded-full contact'>
                    <Instagram size={20} color='#ffffff' strokeWidth={2} className='images '/>
                </div>
                <div className='grid place-content-center border p-4 border-my-white rounded-full contact'>
                    <Twitter size={20} color='#ffffff' strokeWidth={2} className='images '/>
                </div>
                <div className='grid place-content-center border p-4 border-my-white rounded-full contact'>
                    <Mail size={20} color='#ffffff' strokeWidth={2} className='images '/>
                </div>
            </div>
            <div className='flex justify-center gap-8 text-my-white  flexbox-item two-items' >
                <div className='flex justify-end gap-5 flexbox-item'>
                    <p>Privacy Policy</p>
                    <p>Imprint</p>
                    <p>404</p>
                </div>
                <div className='flex justify-start gap-5 flexbox-item'>
                    <p>Homepage</p>
                    <p>Menu</p>
                    <p>Locations</p>
                </div>

            </div>

        </div>
    );

}