import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import resumeIcon from '../_util/icon/resumeIcon.jpg'


type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
        xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'>
                {/* Social Icons */}
                <SocialIcon url="https://www.linkedin.com/in/hyun-jun96/"
                    fgColor='#1DB954'
                    bgColor='transparent'
                />
                <SocialIcon url="https://github.com/allonnam96"
                    fgColor='#1DB954'
                    bgColor='transparent'
                />
                <SocialIcon url="https://docs.google.com/document/d/1PgeByAF4Let4gKjFgdH1JAgRAo5RPI_NNDICs4f68iI/edit"
                    fgColor='#1DB954'
                    bgColor='transparent'
                />
            </motion.div>

            <Link href="#contact">
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    className='flex flex-row items-center text-gray-300 cursor-pointer'>
                    <SocialIcon
                        className='cursor-pointer'
                        network='email'
                        fgColor='#1DB954'
                        bgColor='transparent'
                    />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                        Contact Me
                    </p>
                </motion.div>
            </Link>
        </header>
    )
}

