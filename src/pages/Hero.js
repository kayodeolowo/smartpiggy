import React from 'react'

const Hero = () => {
  return (
    <section className='w-full font-Inter'> 
        <div className='w-11/12 md:w-10/12   mx-auto max-w-[1280px]'> 
            <div className='md:flex'> 
                    <div className='md:w-1/2'> 
                        <h1 className='text-3xl text-center border-2 md:w-9/12 font-inter text-[#333333] '> We know how to help you <span className='text-[#EC4176]'> invest </span>  in your children's future </h1> 

                        <p className='mt-6 md:w-9/12'> Smartpiggy offers you an amazing way to manage all finances related to your kids, such as budgeting, saving and investing in their future! </p>

                        <div className='mt-10 flex md:justify-start justify-center'> 
                            <div className=''>
                                <button> <img className='w-24' src="./images/play.jpg"/> </button> 

                            </div>

                             <div className='ml-4 '>
                                <button> <img className='w-24' src="./images/apple.jpg"/> </button> 

                            </div>
                        </div>

                        <div className='flex justify-around mt-6 md:justify-between md:w-1/2 '> 
                            <div>
                                <h1 className='font-semibold text-[#333333]'> 1M+ </h1>
                                <h2 className='text-sm text-[#EC4176] md:text-xs font-semibold'> Active users </h2>
                            </div> 

                             <div>
                                <h1 className='font-semibold text-[#333333]'> 10+ </h1>
                                <h2 className='text-sm text-[#EC4176] md:text-xs font-semibold'> Countries </h2>
                            </div> 

                             <div>
                                <h1 className='font-semibold text-[#333333]'> $30M+ </h1>
                                <h2 className='text-sm text-[#EC4176] md:text-xs font-semibold'> Transactions </h2>
                            </div> 
                        </div>

                    </div>




                    <div className=' md:w-1/2 flex-wrap'> 

                        <div className='mt-4'>
                           <img src="./images/percent.png"/> 
                           <img className='mt-[-15%]' src="./images/family.png"/> 
                            <img className='mt-[-9%] ' src="./images/books.png"/> 
                        </div>
                        
                    </div>

            </div>

        </div>
    </section>
  )
}

export default Hero