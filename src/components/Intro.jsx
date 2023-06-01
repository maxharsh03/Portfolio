import React from 'react'
import githubIcon from '../assets/github.png'
import linkedinIcon from '../assets/linkedin.png'

const Intro = () => {
  return (
    <div id='home' className=''>
      <div className='flex items-center justify-center flex-col text-center pt-20 pb-3'> 
        <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Max Harshberger</h1>
        <p className='text-base md:text-xl mb-3 font-medium'> Software Engineer and Web Developer</p>
        <p className='text-sm max-w-xl mb-3 font-bold'>My main mission is to create innovative, useful, and sleek looking applications while infusing my own creative touch along the way. Besides coding, I enjoy watching the 49ers and mastering new recipes.</p>
      </div>

      <nav className='flex flex-row justify-center'> 
        <a href='https://github.com/maxharsh03' target='_blank'> 
          <img src={githubIcon} alt='github' className='w-10 object-contain'/>
        </a>

        <a href='https://www.linkedin.com/in/maxharsh/' target='_blank'> 
          <img src={linkedinIcon} alt='github' className='w-10 object-contain'/>
        </a>
      </nav>
    </div>
  )
}

export default Intro;