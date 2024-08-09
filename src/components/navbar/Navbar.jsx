import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-gradient-to-r from-yellow-400 to-green-800 h-32 items-center bg-transparent/80 '>
        <div className="ml-5 h-28 w-28 overflow-hidden">
        <img
          src="/images/bamboologo.png"
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
        <div className='flex justify-around gap-10 pr-5 items-center text-xl font-medium text-white '>
            <div>Home</div>
            <div>About Us</div>
            <div>Lighting</div>
            <div>Decor</div>
            <div>Personal Care</div>

        </div>
    </div>
  )
}

export default Navbar