import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard2({ }: Props) {
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
                src='https://images.ctfassets.net/92fo1e671z6m/2ejzF1tDsjEvaQeTPkey2c/3f5c0690c86a43955d3d7e4d3528496b/Flexport_Mark_-_alternative_white.png?w=720&h=400&q=50&fm=png'
                alt=''
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Financial Analyst</h4>
                <p className='font-bold text-2xl mt-1'>Flexport</p>
                <div className='flex space-x-2 my-2'>
                    <img className='h-10 w-10 rounded-full'
                        src='https://www.svgrepo.com/show/331760/sql-database-generic.svg'
                    />
                    <img className='h-10 w-10 rounded-full'
                        src='https://pngimg.com/d/mysql_PNG9.png'
                    />
                    <img className='h-10 w-10 rounded-full'
                        src='https://www.guidecx.com/wp-content/uploads/2023/08/Jira-Icon-Website.png'
                    />
                    <img className='h-10 w-10 rounded-full'
                        src='https://www.svgrepo.com/show/354012/looker-icon.svg'
                    />
                    <img className='h-10 w-10 rounded-full'
                        src='https://static.vecteezy.com/system/resources/previews/027/179/355/non_2x/google-sheet-spreadsheet-icon-logo-symbol-free-png.png'
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

