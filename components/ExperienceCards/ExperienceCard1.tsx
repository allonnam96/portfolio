import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import HomeKeeperIcon from '../../_util/experienceIcon/HomeKeeper.webp';
import MongoDBIcon from '../../_util/experienceSkillsIcon/MongoDB.png';
import ExpressJsIcon from '../../_util/experienceSkillsIcon/ExpressJS.jpg';
import ReactIcon from '../../_util/experienceSkillsIcon/React.png';
import NodeJsIcon from '../../_util/experienceSkillsIcon/nodeJS.png';
import GithubIcon from '../../_util/experienceSkillsIcon/github.png';
import GoogleMapIcon from '../../_util/experienceSkillsIcon/googleMap.webp';

type Props = {};

export default function ExperienceCard1({ }: Props) {
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
                    src={HomeKeeperIcon}
                    alt="HomeKeeper Icon"
                    width={125}
                    height={125}
                />
            </motion.div>

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Team Lead (Freelance)</h4>
                <p className='font-bold text-2xl mt-1'>HomeKeeper</p>
                <div className='flex space-x-2 my-2'>
                    <Image 
                        src={MongoDBIcon}
                        alt="MongoDB Icon"
                        width={35}
                        className="rounded-full"
                    />
                    <Image 
                        src={ExpressJsIcon}
                        alt="ExpressJS Icon"
                        width={35}
                        className="rounded-full"
                    />
                    <Image 
                        src={ReactIcon}
                        alt="React Icon"
                        width={35}
                        className="rounded-full"
                    />
                    <Image
                        src={NodeJsIcon}
                        alt="NodeJS Icon"
                        width={35}
                        className="rounded-full"
                    />
                    <Image 
                        src={GithubIcon}
                        alt="Github Icon"
                        width={35}
                        className="rounded-full"
                    />
                    <Image 
                        src={GoogleMapIcon}
                        alt="Google Map Icon"
                        width={35}
                        className="rounded-full"
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
    );
}
