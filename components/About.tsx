import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';
import profilePic2 from '../_util/profilePic1.jpg'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity:1 }}
            transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.div
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                {/* @ts-ignore */}
                <Image
                    src={profilePic2}
                    className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
                />
            </motion.div>

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here Is My {""}
                    <span className='underline decoration-[#1DB954]/50'>Background</span>{" "}
                </h4>
                <p className='text-sm text-wrap'>
                I am a graduate of Baruch College's Zicklin School of Business, 
                earning a Bachelor of Business Administration (BBA) degree with a 
                major in Finance and a minor in Real Estate (2020). My experience as a 
                Financial Analyst at Flexport, a global trading and technology company, 
                spanning two years, sharpened my expertise in data analytics and nurtured a 
                deep appreciation for the collaborative spirit of software engineering teams. 
                Embracing the opportunity to delve into software engineering, I joined the New York 
                cohort of App Academy in 2023. There, I immersed myself in intensive training, mastering 
                React, Redux, Ruby on Rails, and swiftly adapting to new technologies such as the MERN stack. From crafting 
                engaging games to developing complex projects like a pixel-perfect Spotify clone, I tackled challenges 
                with enthusiasm and demonstrated adaptability. My portfolio showcases projects that reflect my proficiency 
                and growth, underscoring my eagerness to contribute meaningfully to innovative software engineering endeavors.
                </p>
            </div>
        </motion.div>
    )
}

