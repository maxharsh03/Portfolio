import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    // Scroll to the corresponding section
    const sectionElement = document.getElementById(sectionName);
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
        <ul className='flex flex-row justify-end gap-2 pt-3 pr-3'>
          <button
            className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-sm md:text-base'
            onClick={() => handleSectionClick('home')}
          >
            Home
          </button>
          <button
            className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-sm md:text-base'
            onClick={() => handleSectionClick('skills')}
          >
            Skills
          </button>
          <button
            className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-sm md:text-base'
            onClick={() => handleSectionClick('projects')}
          >
            Projects
          </button>
          <button
            className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-sm md:text-base'
            onClick={() => handleSectionClick('contact')}
          >
            Contact
          </button>
        </ul>
      </nav>
  )
}

export default Navbar;