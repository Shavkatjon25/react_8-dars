import React from 'react'
import { Link } from 'react-router-dom'

function Boshi() {
  return (
    <div className='flex justify-center pt-32'>
        <div className='w-[592px] h-[500px] imh flex flex-col items-center'>
            <img src="/logoh.svg" alt="" className='mt-[-80px]' />
            <Link to={'/yon'}>
            <img src="/play.svg" alt="" className='mt-10 cursor-pointer rounded-full overflow-hidden'/>
            </Link>
            <Link to={'/bosqich'}>
            <button className='bg-[#2463FF] text-white px-16 py-2 rounded-3xl mt-10'>HOW TO PLAY</button>
            </Link>
        </div>
    </div>
  )
}

export default Boshi