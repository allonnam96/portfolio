import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import flexportIcon from '../../_util/experienceIcon/Flexport.avif'
import SQLIcon from '../../_util/experienceSkillsIcon/SQL.svg'
import MySQLIcon from '../../_util/experienceSkillsIcon/mySql.png'
import JiraIcon from '../../_util/experienceSkillsIcon/Jira.png'
import LookerIcon from '../../_util/experienceSkillsIcon/looker.svg'
import GoogleSheetIcon from '../../_util/experienceSkillsIcon/googleSheet.webp'

type Props = {}

export default function ExperienceCard2({ }: Props) {
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
                    src={flexportIcon}
                    alt="Flexport Icon"
                    width={125}
                    height={125}
                />
            </motion.div>

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Financial Analyst</h4>
                <p className='font-bold text-2xl mt-1'>Flexport</p>
                <div className='flex space-x-2 my-2'>
                    <Image
                        src={SQLIcon}
                        alt="SQL Icon"
                        width={35}
                        className="rounded-full"
                    />
                    <Image
                        src={MySQLIcon}
                        alt="MySQL Icon"
                        width={35}
                        className="rounded-full"
                    />
                    <Image
                        src={JiraIcon}
                        alt="Jira Icon"
                        width={35}
                        className="rounded-full"
                    />
                    <Image
                        src={LookerIcon}
                        alt="Looker Icon"
                        width={35}
                        className="rounded-full"
                    />
                    <Image
                        src={GoogleSheetIcon}
                        alt="GoogleSheet Icon"
                        width={35}
                        className="rounded-full"
                    />
                </div>
                <p className='uppercase py-5 text-gray-300'>Jul 2021 – Jun 2023</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Collected and explored big financial data using SQL within Looker for a high-stake project, encompassing several million dollar transactions and succinctly presented these insights through impactful visualizations to the client. </li>
                    <li>Collaborated extensively with the company’s software engineers, providing critical feedback that enhanced the efficiency of the internal quoting system by 50%, through the elimination of duplicated and non-essential data.</li>
                    <li>Presenting weekly, monthly and quarterly financial reports to clients as well as upper management by employing V lookup, the IF function, and Pivot Tables to compare previous financial trends </li>

                </ul>

            </div>
        </article>
    )
}

