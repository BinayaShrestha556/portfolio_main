import About from '@/components/about'
import Reveal from '@/components/animated-components/reveal'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import TechStack from '@/components/tech-stack'
import React from 'react'

const page = () => {

  return (
    <div className=' p-3 md:p-0' > 
      <div className='w-full  h-screen flex items-center'>
<Hero/>

      </div>
      <div className='w-full '><About/></div>
      <div className="w-full mt-20"><TechStack/></div>
  <div className="w-full mt-20"><Projects/></div>
    </div>
  )
}

export default page