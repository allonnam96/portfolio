import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import BaruchCollegeIcon from '../../_util/experienceIcon/BaruchCollege.jpeg'

type Props = {}

export default function EducationCard2({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.div
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 xl:w-[125px] xl:h-[125px] object-cover object-center rounded-full overflow-hidden'
            >
                <Image
                    src={BaruchCollegeIcon}
                    alt="Baruch College Icon"
                    width={125}
                    height={125}
                />
            </motion.div>
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Baruch College, Zicklin School of Business</h4>
                <p className='font-bold text-2xl mt-1'>Bachelor of Business Administration in Finance and Real Estate </p>
                <div className='flex space-x-2 my-2'>
                </div>
                <p className='uppercase py-5 text-gray-300'>Aug 2018 – Dec 2020</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <ul>Grade: 3.5/4.0</ul>
                    
                    <ul>Coursework: Corporate Finance, Investment Analysis, Real Estate Capital Market, Real Estate Law</ul>
                    <ul>Other Coursework: Calculus I, II, III and Linear Algebra</ul>
                </ul>

            </div>
        </article>
    )
}

