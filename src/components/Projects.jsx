import React from 'react'
import projects from "../data/project"
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col'>
      <h1 className='justify-center text-center text-3xl md:text-6xl mb-1 md:mb-3 font-bold pt-20 pb-5 px-5'>Projects</h1>
      <div className='md:flex-row items-center justify-center px-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'> 
          {projects && projects.map((project, idx) => (
            <ProjectItem 
            key={idx}
            title={project.title}
            imgUrl={project.imgUrl}
            stack={project.stack}
            link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
