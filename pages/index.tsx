import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import type { NextPage } from 'next'
import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';
import upArrowIcon from '../_util/__util/upArrow.png'


const Home: NextPage = () => {
  return (
    <div className='bg-[#191414] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#1DB954]/70'>
      <Head>
        <title>allon-portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image
              src={upArrowIcon}
              alt='up Arrow Icon'
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
            />
          </div>
        </footer>
      </Link>

    </div>
  );
};

export default Home;