'use client';
import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';
import {useState} from 'react';

interface Card3Props {
    title: string;
    description: string;
}

export default function Card3({title, description}: Card3Props){

    const [isExpanded, setIsExpanded] = useState(false);

    function handleClick(){
        setIsExpanded(!isExpanded);
    }

    return(
        <button className='w-full border lg:px-10 px-3 py-8 rounded-3xl mb-2 ' onClick={handleClick} >
            <div className='flex justify-between'>
                <h1 className='xl:text-lg lg:text-lglg text-lgmob font-semibold text-left'>{title}</h1>
                <div className=' border rounded-full grid place-content-center w-12 h-12 shrink-0'>
                    {isExpanded ? <ArrowUpRight size={24} className='cursor-pointer'/> : <ArrowDownRight size={24} className='cursor-pointer'/>}
                </div>
            </div>
            {isExpanded && <p className='xl:text-sl lg:text-smd text-sm pt-5 text-left'>{description}</p>}
        </button>
    );
}