import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard3({ }: Props) {
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
                src='data:image/png;base64,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'
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Finance Specialist</h4>
                <p className='font-bold text-2xl mt-1'>Amore Pacific</p>
                <div className='flex space-x-2 my-2'>
                    <img className='h-10 w-10 rounded-full'
                        src='https://i.pinimg.com/originals/98/6c/09/986c095a109a79c675a70a08d9185fbd.png'
                    />
                    <img className='h-10 w-10 rounded-full'
                        src='https://banner2.cleanpng.com/20180802/bfe/kisspng-macintosh-microsoft-excel-excel-2016-microsoft-cor-software-zum-geb%C3%A4ude-management-5b632974cd7a30.6125640815332253328417.jpg'
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

