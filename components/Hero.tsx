import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import profilePic1 from '../_util/profilePic/profilePic2.jpg'
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My Name Is Allon Nam",
            "I-Am-A-Software-Engineer.jsx",
            "<WhoLovesToCode />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            
            <Image
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={profilePic1}
                alt=''
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    Software Engineer
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#1DB954' />
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

