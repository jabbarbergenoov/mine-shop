import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="bg-white border-b-3 border-gray-950/10 text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Shop</span>
      </Link>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <Link className="mr-5 hover:text-gray-900" href='/'>Home</Link>
        <Link className="mr-5 hover:text-gray-900" href='/products'>Products</Link>
        
      </nav>
      <div className='flex gap-5'>
        <Link href={'/bag'}>
        <button className="group inline-flex items-center text-white bg-blue-600 border border-transparent py-2 px-4 rounded-2xl mt-4 md:mt-0 transition-all duration-300 hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:shadow-md">
    Bag
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </button>
        </Link>



</div>


     
    </div>
  </header>
  )
}
