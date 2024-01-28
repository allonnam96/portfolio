import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function Projects({ }: Props) {
    const projects = [
        {
            id: 1,
            name: "HomeKeeper",
            imageSrc: "https://github.com/allonnam96/HomeKeeper/raw/main/frontend/src/img/_snippets/ShowpageSnip.gif",
            description: "HomeKeeper is designed to streamline the process of finding and booking contractors. This intuitive platform enhances user experience by allowing the reading and writing of detailed reviews about the contractors. This feature-rich app serves as a one-stop solution for efficiently managing interactions with various service providers across multiple fields.",
            link: "https://home-keeper.com/"
        },
        {
            id: 2,
            name: "Spotipie",
            imageSrc: "https://github.com/allonnam96/Spotipie/raw/mains/frontend/public/_snippets/Screenshot1.gif",
            description: "Spotipie (Spotify clone) is a streaming platform that offers access to a vast library of music, podcasts, and other audio content, personalized to individual preferences.",
            link: "https://spotipie.onrender.com"
        },
        {
            id: 3,
            name: "Path Following Simulation",
            imageSrc: "https://github.com/allonnam96/PathFollowSimulation/raw/main/design/snippets/Screenshot1.gif",
            description: "PathFollowSimulation offers an immersive, space-themed visual journey where vehicles gracefully navigate a cosmic pathway. This simulation is crafted using the P5 library, drawing inspiration from Craig Reynolds' theory on Steering Behaviors for Autonomous Characters. Key features like the p5.Vector class are adeptly employed, bringing programmed movements to life.",
            link: "https://allonnam96.github.io/PathFollowSimulation/"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
                    max-w-full justify-evenly mx-auto items-center z-0'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
                    snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1DB954]/70'>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className='w-screen flex-shrink-0 snap-center flex flex-col
                        space-y-5 items-center justify-center p-20 md:p-44 h-screen'
                    >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <motion.img
                                initial={{
                                    y: -300,
                                    opacity: 0,
                                    scale: 1
                                }}
                                whileHover={{ scale: 1.017 }}
                                transition={{ duration: 0.16 }} 
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={project.imageSrc}
                                alt={project.name}
                                width={650}
                                height={650}
                                className='rounded'
                                style={{ cursor: 'pointer' }}
                            />
                        </a>
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#1DB954]'>
                                    {`Case Study ${project.id} of ${projects.length}:`}
                                </span>{" "}
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
                                    {project.name}
                                </a>
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                                {project.description}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#1DB954]/10 left-0 h-[500px] -skew-y-12'>
            </div>
        </motion.div>
    )
}

export default Projects;
