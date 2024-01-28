import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard1({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[125px] xl:h-[125px] object-cover object-center'
                src='https://home-keeper.com/static/media/house-icon-clipart-transparent-background-free-png.ce7fb2074b7ec171fff2.webp'
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Team Lead (Freelance)</h4>
                <p className='font-bold text-2xl mt-1'>HomeKeeper</p>
                <div className='flex space-x-2 my-2'>
                    <img className='h-10 w-10 rounded-full'
                        src='https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png'
                    />
                    <img className='h-10 w-10 rounded-full'
                        src='https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
                    />
                    <img className='h-10 w-10 rounded-full'
                        src='https://static-00.iconduck.com/assets.00/react-icon-512x456-liq40yrp.png'
                    />
                    <img className='h-10 w-10 rounded-full'
                        src='https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
                    />
                    <img className='h-10 w-10 rounded-full'
                        src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                    />
                    <img className='h-10 w-10 rounded-full'
                        src='https://www.sourcecon.com/_next/image?url=https%3A%2F%2Fapi.eremedia.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fgoogle-maps-1797882_1920.png&w=3840&q=75'
                    />
                    <img className='h-10 w-10 rounded-full'
                        src='https://www.svgrepo.com/show/424933/raspberry-logo-raspberry-pi.svg'
                    />

                </div>
                <p className='uppercase py-5 text-gray-300'>Jul 2023 – Jan 2024</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Streamlined and led a large-scale project, efficiently assigning roles and responsibilities to team members. Oversaw 30 daily tasks, coordinated the creation of 10 wireframes , and ensured seamless organization through a git repository.</li>
                    <li>Implemented a scalable NoSQL database system, supporting multiple data queries, seamlessly integrating data flow to the frontend by optimizing more than 10  routes and accurately populating relevant data within Express, enhancing data retrieval efficiency by 40%.</li>
                    <li>Engineered RESTful APIs, leveraging Express.js to seamlessly handle HTTP requests and enable full CRUD functionalities for appointments and reviews through JSON data interchange.</li>

                </ul>

            </div>
        </article>
    )
}

