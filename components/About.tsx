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
                    Here is a{" "}
                    <span className='underline decoration-[#1DB954]/50'>little</span>{" "}
                    background
                </h4>
                <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat exercitationem, sequi cumque culpa accusamus ratione aliquid, quod, 
                    harum consequatur itaque voluptas. Dolorum nostrum qui illo aliquam 
                    quos error animi odio!
                </p>
            </div>
        </motion.div>
    )
}

