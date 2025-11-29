import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <div>
            <div className='flex justify-between max-w-[80%] mx-auto pt-5'>
            <div>
            <h2 className='text-white text-xl font-bold '>Neman Yusif</h2>
            </div>
            <div className='flex gap-8 text-[#ABB2BF] text-xl'>
            <Link className='hover:text-lime-500 duration-800' href={"/"}>
                Home
            </Link>
             <Link className='hover:text-lime-500 duration-800' href={"/works"}>
                Works
            </Link>
             <Link className='hover:text-lime-500 duration-800' href={"/about_me"}>
                About Me
            </Link>
             <Link className='hover:text-lime-500 duration-800' href={"/contacts"}>
                Contacts
            </Link>
            </div>
        </div>
        </div>
    </>
  )
}

export default Navbar
