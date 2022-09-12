import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CgMenuBoxed } from 'react-icons/cg';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };



    return (
        <div className="flex w-full justify-between  items-center h-20 md:h-14 px-4 md:px-12  text-white  bg-white font-public "> 
            <div className='md:ml-16'>
                
               <img className='' src="./images/logo.png  " alt='logo' > 
                </img>
                
            </div> 

            <div className='md:w-2/5 md:m-auto text-black '> 
              <ul className=' hidden md:flex  justify-center text-sm text-[#9c9ea8]  '> 
                      <li className='md:mx-3 hover:text-[#31D06A]  hover:underline ' href>  <a href='#'> <span> Home </span>  </a> </li>
                      <li className='md:mx-3 hover:text-[#31D06A]  hover:underline ' href>  <a href='#'> <span> About </span>  </a> </li>
                      <li className='md:mx-3 hover:text-[#31D06A]  hover:underline  ' href>  <a href='#'> <span> Contact </span>  </a> </li>
                      <li className='md:mx-3 hover:text-[#31D06A]  hover:underline ' href>  <a href='#'> <span> Blog </span>  </a> </li>
                     
                            
                        </ul>
            </div>
            <div className='hidden md:flex  md:mr-24  '> 
             <li className=' hover:text-[#31D06A]   hover:underline ' href>  <a href='#'> <span> Careers </span>  </a> </li>
            <button className='px-1 hover:text-white rounded-full text-black bg-gradient-to-r from-[#31D06A] to-[#2CB9CB]'> Request Invite </button> 
            </div>
           

         
            {/* hamburger */} 
            <div  onClick={handleNav} className=' md:hidden z-10'> 
            {nav ? <AiOutlineClose className='text-black' size={26}/> :   <CgMenuBoxed className='text-black' size={30}/>}
              
            </div>


             <div  onClick={handleNav} className={nav ? ' leading-loose text-center text-2xl rounded-bl-lg absolute text-white  left-0 top-4  w-11/12 m-auto  mx-4  flex h-96  mt-20 bg-gradient-to-b from-[#31D06A] to-[#2CB9CB] flex-col' : 'absolute left-[-100%] '}>
        <ul  className='md:hidden mt-32 '>
          
                            <li  className=''> Home </li>
                            <li className='' > About </li>
                            <li className='' > Contact </li>
                            <li className='' > Blog </li>
                            <li className='' >  Carrers </li>
         
         
        </ul>
      </div>
            
        </div>
    )
}

export default Navbar;