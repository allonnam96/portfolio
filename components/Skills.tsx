import React from 'react'
import { motion } from 'framer-motion'
import JavaScript from './Skill/Javascript'
import Python from './Skill/Python'
import Ruby from './Skill/Ruby'
import PostgreSQL from './Skill/PostgreSQL'
import Reacts from './Skill/React'
import Redux from './Skill/Redux'
import Node from './Skill/Node'
import Express from './Skill/Express'
import MongoDB from './Skill/MongoDB'
import Rails from './Skill/Rails'
import Aws from './Skill/Aws'
import Typescript from './Skill/Typescript'
import Postman from './Skill/Postman'
import Html from './Skill/Html'
import Css from './Skill/Css'
import Tailwind from './Skill/Tailwind'

type Props = {}

function Skills({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex relative flex-col text-center md:text-left xl:flow-row
            max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h3>

            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                Hover over a skill for current proficiency
            </h3>

            <div className='grid grid-cols-4 gap-5'>
                <JavaScript />
                <Ruby />
                <Typescript />
                <Python /> 
                <MongoDB />
                <Express />
                <Reacts />
                <Redux />
                <Node />
                <PostgreSQL />
                <Rails />
                <Aws />
                <Postman />
                <Html />
                <Css />
                <Tailwind />

            </div>
        </motion.div>
    )
}

export default Skills