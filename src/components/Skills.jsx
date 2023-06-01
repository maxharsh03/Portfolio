import React from 'react'
import sk from '../data/skill'
import SkillItem from './SkillItem'

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col items-center justify-center pt-20 pb-2'>
      <h1 className='text-3xl md:text-6xl mb-1 md:mb-3 font-bold '>Skills</h1>
      <div className='flex flex-row'>  
      {sk && sk.map((skill, idx) => (
        <SkillItem 
          key={idx}
          title={skill.title}
          skills={skill.skills}
        />
      ))}
      </div>
    </div>
  )
}

export default Skills;