import React from 'react'

const SkillItem = ({ title, skills }) => {
  return (
    <div className='flex flex-col w-full p-4'>
      <h3 className='text-lg md:text-xl mb-2 mdLmb-2 font-semibold'>{title}</h3>
        <div className='flex flex-wrap gap-2 flex-col itesm-center justify-center text-xs md:text-sm'>
            {skills && skills.map((skill, idx) => (
                <p key={idx} className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md hover:bg-sky-300'>
                    {skill}
                </p>
            ))}
        </div>
    </div>
  )
}

export default SkillItem;