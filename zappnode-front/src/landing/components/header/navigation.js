import React from 'react';

// navigation component 
// please read and understand the code before making changes
// the component is build on tailwind css so incase you see wired classes
const Navigation = props => {
  
  const handleClick = (e) => {
    e.preventDefault();

    props.change('to-front')

  }

    return(
        <nav className="flex items-center justify-between flex-wrap p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-32">
    <span className="font-semibold text-xl tracking-tight">ZappNode</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-white border-green hover:text-white hover:border-white" onClick={handleClick}>
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full hidden text-base font-semibold block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <a href="#features" className="text-cl-none mr-10 block mt-4 text-base lg:inline-block lg:mt-0  hover:text-white mr-4">
       Features
      </a>
      <a href="#integration" className="text-cl-none mr-10 block text-base mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
        Integration
      </a>
      <a href="#pricing" className="text-cl-none block text-base mt-4 lg:inline-block lg:mt-0 hover:text-white">
        Pricing
      </a>
    </div>
    <div className="mr-10">
      <a href="#" className="trans inline-block  px-5 py-3 text-base leading-none border rounded text-white border-white hover:border-transparent text-trans hover:bg-primary hover:bg-white mt-4 lg:mt-0">Login</a>
    </div>

    <div>
      <a href="#" className="trans text-pri inline-block px-5 py-3 text-base leading-none rounded text-white hover:text-primary hover:bg-transparent border border-green-500 btn-primary mt-4 lg:mt-0">Register</a>
    </div>
  </div>
</nav>
    )
}

export default Navigation;
