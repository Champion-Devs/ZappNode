import React from 'react';
import '../css/tailwind.generated.css';
import '../css/landing.css';
import Pricing from '../pricing/pricing';

const Navigation = (props)=> {
 
    return(
    <nav className="block items-center justify-between py-10 bg-primary px-10 w-auto d-none pos-abs trans-back">
  <div className="flex justify-between">
  <div className="flex items-center flex-shrink-0 text-white mr-32">

  </div>
  <button className="flex items-center px-3 py-2 border rounded text-white border-green hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>

  <div className="w-full">
    <div className="text-sm flex flex-col my-10 font-semibold">
      <a href="#features" className="text-cl-none mr-10 my-5 block mt-4 text-base text-gray-500 lg:inline-block lg:mt-0  hover:text-white mr-4">
       Features
      </a>
      <a href="#integration" className="text-cl-none my-5 mr-10 block text-base mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
        Integration
      </a>
      <a href="#pricing" className="text-cl-none block my-5 text-base mt-4 lg:inline-block lg:mt-0 hover:text-white">
        Pricing
      </a>
    </div>
    <div className="flex justify-between">
    <div className="mr-10">
      <a href="#" className="trans inline-block  px-5 py-3 text-base leading-none border rounded text-white border-white hover:border-transparent text-trans hover:bg-primary hover:bg-white mt-4 lg:mt-0">Login</a>
    </div>

    <div>
      <a href="#" className="trans text-pri inline-block px-5 py-3 text-base leading-none rounded text-white hover:text-primary hover:bg-transparent border border-green-500 btn-primary mt-4 lg:mt-0">Register</a>
    </div>
  </div>
  </div>
</nav>
    )
}

export default Navigation;