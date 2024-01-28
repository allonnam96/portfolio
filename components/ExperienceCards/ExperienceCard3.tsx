import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import AmorePacificLogo from '../../_util/experienceIcon/AmorePacific.png'
import SAPLogo from '../../_util/experienceSkillsIcon/SAP.png'
import ExcelLogo from '../../_util/experienceSkillsIcon/Excel.jpg'

type Props = {}

export default function ExperienceCard3({ }: Props) {
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
                    src={AmorePacificLogo}
                    alt="Amore Pacific Logo"
                    width={125}
                    height={125}
                />
            </motion.div>

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Finance Specialist</h4>
                <p className='font-bold text-2xl mt-1'>Amore Pacific</p>
                <div className='flex space-x-2 my-2'>
                <Image
                    src={SAPLogo}
                    alt="SAP Icon"
                    width={35}
                    className="rounded-full"
                />
                <Image
                    src={ExcelLogo}
                    alt="Excel Icon"
                    width={35}
                    className="rounded-full"
                />
                </div>
                <p className='uppercase py-5 text-gray-300'>Sep 2019 - Mar 2021</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Engaged in finance projects such as transferring company expenses from corporate card to SAP Concur</li>
                    <li>Assisted the accounts payable and accounts receivable teams and the payroll department, while also collaborating monthly with the PwC auditing team</li>
                    <li>Curtailed errors exponentially, locating and closing accounts with unnecessary fees while maintaining timely payments and storing data in company internal software</li>

                </ul>

            </div>
        </article>
    )
}

