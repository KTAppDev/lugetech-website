import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main className=' h-full w-full flex flex-col'>
      <div id='logo' className='flex flex-row items-center justify-around font-bold text-xl'>
        <p> LugeTech </p>
      </div>
      <div id='profiles' className=' flex flex-row'>
          <div id='profile-iamge' className='flex flex-col'>
          <Image 
          className='flex flex-col rounded-full' 
          src='https://avatars.githubusercontent.com/u/61248118?v=4' alt='Clint' width={60} height={60} />
          </div>
        <div id='profile'>
          <div id='profile-name'>Clint</div>
        </div>
      </div>
    </main>
  )
}

export default page