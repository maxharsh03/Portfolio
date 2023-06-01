import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {

    e.preventDefault();

    let params = {
      from_name : document.getElementById('fullName').value,
      email : document.getElementById('email_id').value,
      message : document.getElementById('message').value,
    }

    emailjs.send("service_fqkkod7", "template_tpovgk5", params, "rHc1Ku9P08jyLElGE").then((res) => {
      alert("Email sent successfully!");
    }, (error) => {
      alert("Error sending email.")
    });
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div id='contact' className='flex flex-col justify-center items-center py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h1 className='justify-center text-center text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900'>Contact Me</h1>
        
        <div className='w-3/5'>
          <div className='py-3'> 
          <input 
            className='shadow-sm py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light' 
            id='fullName' 
            type='text' 
            placeholder='Name' 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
          </div>

          <div>
          <input 
            className='block py-2 p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
            id='email_id' 
            type='text' 
            placeholder='Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          </div>

          <div className='sm:col-span-2 py-4'> 
            <textarea 
              className='h-36 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              id='message' 
              placeholder='Leave a comment...' 
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button className="py-3 px-5 text-sm font-medium text-center inline-block border-2 border-stone-900
          text-blue rounded-lg bg-primary-700 sm:w-fit bg-gradient-to-r from-orange-400 to-pink-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={sendEmail}>Send Message</button>
        </div>

    </div>
  )
}

export default Contact;