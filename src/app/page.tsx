'use client';
import { useState } from 'react';
import { ArrowLongRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';

import { Brand } from "@/components/Brand";
import clsx from 'clsx';

export default function Home() {
  const [menuToggle, setMenuToggle] = useState<boolean>(false)
  return (
    <div className='max-w-screen max-h-screen py-6 px-3 md:px-20'>
      <div className={clsx('flex flex-col fixed top-0 bottom-0 left-0 right-0 z-20 py-6 px-3 bg-zinc-900', {
        'invisible': !menuToggle,
        'visible': menuToggle,
      })}>
        <div className='flex justify-end'>
          <XMarkIcon className='w-6 h-6 cursor-pointer' onClick={() => setMenuToggle(!menuToggle)} />
        </div>
        <nav className='flex flex-1 justify-center items-center text text-center'>
          <ul className='flex flex-col gap-6 font-medium text-lg'>
            <li><span className='border-b-2 font-bold pb-2'>Home</span></li>
            <li>Collection</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      <div className="flex justify-between text-center">
        <Brand text="this interior" />
        <div className='hidden md:flex'>
          <nav className='flex flex-1 justify-end items-center text-center'>
            <ul className='flex gap-16 md:gap-20 font-medium text-lg'>
              <li><span className='border-b-2 font-bold pb-2'>Home</span></li>
              <li>Collection</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <Bars3Icon className='w-6 h-6 cursor-pointer md:hidden' onClick={() => setMenuToggle(!menuToggle)} />
      </div>
      <main className='flex flex-1 flex-col mt-9 md:mt-40 md:flex-row md:items-center md:justify-center md:gap-36'>
        <div className='flex flex-col gap-6 md:gap-12 items-start mb-9'>
          <h1 className='font-alt font-medium text-4xl md:text-5xl'>Modern interior</h1>
          <p className='max-w-[250px] text-sm font-normal md:text-2xl md:max-w-[410px]'>A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</p>
          <div className='flex gap-4 font-bold text-sm md:text-lg'>
            <button>Read more</button>
            <ArrowLongRightIcon className='w-6 h-6' />
          </div>
        </div>
        <div className='relative max-w-full h-64 md:w-[737px] md:h-[555px]'>
          <Image src="/photo1.png" alt='photo1.png' fill className='object-cover' />
          <div className='flex flex-col absolute bg-zinc-900 w-[85%] h-40 md:w-[410px] md:h-[189px] shadow-[0px_8px_8px_rgba(0,0,0,0.25)] p-4 z-10 right-4 -bottom-32'>
            <div className='flex items-center mb-6 gap-3'>
              <div className='relative h-9 w-9'>
                <Image src="/photo2.png" alt='photo2.png' fill className='object-cover rounded-full' />
              </div>
              <div className='flex flex-1 flex-col'>
                <h4 className='font-medium text-sm capitalize md:text-lg'>aliza webber</h4>
                <span className='text-xs text-zinc-400 md:text-base'>Interior design</span>
              </div>
            </div>
            <h3 className='font-alt font-bold text-xl max-w-[210px] md:text-2xl'>Designed in 2020 by Aliza Webber</h3>
          </div>
        </div>
      </main>
      <footer className='flex text-center justify-center mt-52 text-sm py-4'>
        <p>created by <b>Rick Neves</b> - devchallenges.io</p>
      </footer>
    </div >
  )
}
