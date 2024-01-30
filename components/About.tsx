import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import profilePic2 from '../_util/profilePic/profilePic1.jpg';

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 md:top-0 uppercase tracking-[20px] text-gray-500 text-2xl w-full'>
                About
            </h3>
            <div className="flex-shrink-0 mt-10 md:mt-20">
                <Image
                    src={profilePic2}
                    alt='profile picture'
                    className='w-56 h-56 md:w-64 md:h-64 rounded-full object-cover md:rounded-lg'
                />
            </div>

            <div className='w-full mt-10 md:mt-0 overflow-x-auto md:overflow-visible'>
                <div className='space-y-10 px-0 md:px-10'>
                    <h4 className='text-4xl font-semibold'>
                        Here Is My&nbsp;
                        <span className='underline decoration-[#1DB954]/50'>Background</span>&nbsp;
                    </h4>
                    <p className='text-sm text-wrap'>
                        I am a graduate of Baruch College's Zicklin School of Business, earning a Bachelor of Business Administration (BBA) degree with a major in Finance and a minor in Real Estate (2020). My experience as a Financial Analyst at Flexport, a global trading and technology company, spanning two years, sharpened my expertise in data analytics and nurtured a deep appreciation for the collaborative spirit of software engineering teams. Embracing the opportunity to delve into software engineering, I joined the New York cohort of App Academy in 2023. There, I immersed myself in intensive training, mastering React, Redux, Ruby on Rails, and swiftly adapting to new technologies such as the MERN stack. From crafting engaging games to developing complex projects like a pixel-perfect Spotify clone, I tackled challenges with enthusiasm and demonstrated adaptability. My portfolio showcases projects that reflect my proficiency and growth, underscoring my eagerness to contribute meaningfully to innovative software engineering endeavors.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
