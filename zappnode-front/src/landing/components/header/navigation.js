import React, {useState, useEffect} from 'react';
import '../css/tailwind.generated.css';
import '../css/landing.css';

const Navigation = props => {
    return(
        <>
        <nav class="flex items-center justify-between flex-wrap p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-32">
    <span class="font-semibold text-xl tracking-tight">ZappNode</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-white border-green hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full text-base font-semibold block flex-grow lg:flex lg:items-center lg:w-auto md:hidden sm:hidden">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="text-cl-none mr-10 block mt-4 text-base lg:inline-block lg:mt-0  hover:text-white mr-4">
       Features
      </a>
      <a href="#responsive-header" class="text-cl-none mr-10 block text-base mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
        Integration
      </a>
      <a href="#responsive-header" class="text-cl-none block text-base mt-4 lg:inline-block lg:mt-0 hover:text-white">
        Pricing
      </a>
    </div>
    <div className="mr-10">
      <a href="#" class="trans inline-block  px-5 py-3 text-base leading-none border rounded text-white border-white hover:border-transparent text-trans hover:bg-primary hover:bg-white mt-4 lg:mt-0">Login</a>
    </div>

    <div>
      <a href="#" class="trans text-pri inline-block px-5 py-3 text-base leading-none rounded text-white hover:text-primary hover:bg-transparent border-green btn-primary mt-4 lg:mt-0">Register</a>
    </div>
  </div>
</nav>
</>
    )
}

export default Navigation;