'use client';
import React from 'react';
import {useState} from 'react';
import clsx from 'clsx';

interface CardProps {
  img: string;
  title: string;
  text: string;
  origin: string;
  sira: string;
}

export default function DynamicCard({ img, title, text, origin, sira }: CardProps) {
    const [active, setActive] = React.useState('false');

    const onHover = () =>{
        setActive('true');
    }
    const onLeave = () =>{
        setActive('false');
    }
  return (
    <div 
        className={clsx(`bg-my-black h-[360px] overflow-hidden flex-grow flex-shrink-0 basis-[300px] lg:w-full  origin-${origin} px-6 py-8 mb-5 text-my-white bg-dynamic-${img} bg-cover bg-no-repeat bg-center rounded-3xl   `,{' hover:basis-[500px] transition-flex-basis duration-1000 ease-in-out':active=='true'},
        {'hover:basis-[300px] transition-flex-basis duration-1000 ease-in-out ':active=='false'},
        {'lg:col-span-2':sira=='1'},
        )}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
    >
      <h2 className=" font-medium xl:text-lg lg:text-lglg text-lgmob">
        {title}
      </h2>
      <p className="xl:text-sm lg:text-smmd text-smmob">
        {text}
      </p>
    </div>
  );
}
