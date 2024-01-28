import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AppAcademyIcon from '../../_util/experienceIcon/AppAcademy.jpeg';

type Props = {};

export default function EducationCard1({ }: Props) {
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
                    src={AppAcademyIcon}
                    alt="App Academy Icon"
                    width={125}
                    height={125}
                />
            </motion.div>

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>App Academy, New York Cohort</h4>
                <p className='font-bold text-2xl mt-1'>Certification of Software Engineering Track</p>
                <div className='flex space-x-2 my-2'></div>
                <p className='uppercase py-5 text-gray-300'>Aug 2023 – Dec 2023</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>The App Academy's rigorous 16-week curriculum delves into the full stack, encompassing Ruby on Rails, JavaScript, SQL, HTML, CSS, ReactJS, Redux, among others. This program is structured to foster both team collaboration and individual prowess. As a result, students emerge capable of swiftly constructing complex software applications, often integrating newly mastered tech stacks such as MERN stacks within a week. This rapid development is built upon a solid foundation of software engineering skills acquired throughout their intensive training period.</li>
                    <li>Skills: Data Structures · jQuery · PostgreSQL · ERB · React.js · Redux.js · Node.js · JBuilder · Amazon Web Services (AWS) · MongoDB · Express.js · NoSQL · Mongoose ODM · REST APIs · Postman API · Google Maps API · JavaScript · Webpack · HTML · css · Ruby · Ruby on Rails · SQL</li>
                </ul>
            </div>
        </article>
    );
}
