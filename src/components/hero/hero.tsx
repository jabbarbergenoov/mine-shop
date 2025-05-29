import React from 'react'
import Image from "next/image";

export default function Hero() {
    return (
      <section className="text-gray-800 body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Left Side (Image) */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
              className="object-cover object-center rounded-xl shadow-lg"
              alt="hero"
              width={720}
              height={600}  
              src="https://dummyimage.com/720x600"
            />
          </div>
  
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-gray-900">
              Start your journey with us
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-600">
              Powerful solutions for your everyday workflow. Boost your presence and connect with users in a modern way.
            </p>
  
            {/* Input and Button */}
            <div className="flex w-full max-w-md md:justify-start justify-center items-end mb-6">
              <div className="relative w-full mr-4">
                <label htmlFor="hero-field" className="leading-7 text-sm text-gray-500">
                  Your Email
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full bg-white bg-opacity-75 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:bg-white focus:border-blue-500 text-base outline-none text-gray-700 py-3 px-4 leading-6 transition-all duration-300"
                  placeholder="you@example.com"
                />
              </div>
              <button className="inline-flex text-white bg-blue-600 hover:bg-blue-700 border-0 py-3 px-6 rounded-xl text-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
  
            <p className="text-sm text-gray-500 mb-8 w-full text-center md:text-left">
              We’ll never share your email with anyone else.
            </p>
  
            {/* Store Buttons */}
            {/* <div className="flex lg:flex-row md:flex-col w-full md:justify-start justify-center">
              <button className="bg-gray-100 hover:bg-gray-200 shadow-md inline-flex py-3 px-5 rounded-xl items-center focus:outline-none transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                  <path d="M99.617 8.057..."></path>
                </svg>
                <span className="ml-4 flex flex-col text-left leading-none">
                  <span className="text-xs text-gray-600">GET IT ON</span>
                  <span className="font-semibold">Google Play</span>
                </span>
              </button>
  
              <button className="bg-gray-100 hover:bg-gray-200 shadow-md inline-flex py-3 px-5 rounded-xl items-center lg:ml-4 mt-4 md:mt-4 lg:mt-0 ml-4 focus:outline-none transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                  <path d="M40.74 112.12..."></path>
                  <path d="M212.1 0..."></path>
                </svg>
                <span className="ml-4 flex flex-col text-left leading-none">
                  <span className="text-xs text-gray-600">Download on the</span>
                  <span className="font-semibold">App Store</span>
                </span>
              </button>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
  
