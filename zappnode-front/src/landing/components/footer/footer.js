import React from 'react';

const Footer = (props) => {
  // complete footer page
  return (
    <footer className="border-top py-10 flex flex-col justify-center text-primary bg-secondary text-gray-800 text-base">
      <div className="flex justify-around flex-wrap">
      <div className="flex flex-col ml-2 mb-5 w-1/3 color-gray">
        <h2 className="text-xl font-bold">About ZappNode</h2>
        <p className="mt-2">ZappNode is a fast growing company that provide realtime services to the users and
         help monitor users website in other to deliver qaulity service by reducing hassle free from the user end, please feel free to change this.
         ZappNode is also backed up by champion-devs that create amazing web technology for startups and big companies.
         </p>
      </div>

      <div className="flex flex-col ml-2 mb-5 color-gray">
        <h2 className="text-xl font-bold">Connect with us</h2>
        <p className="mt-2">Blog</p>
        <p className="mt-2">Status Page</p>
        <p className="mt-2">Useful links</p>
        <p className="mt-2">Docs</p>
        <p className="mt-2">Enroll</p>
      </div>

      <div className="flex flex-col mb-5 mr-8 color-gray">
        <h2 className="text-xl font-bold">Our products</h2>
        <p className="mt-2">Home</p>
        <p className="mt-2">Domain</p>
        <p className="mt-2">About</p>
        <p className="mt-2">Contact</p>
        <p className="mt-2">Blog</p>
      </div>
      </div>
      <div className="text-center color-gray mt-10">
      © 2020 Made and designed by champion devs 
      </div>
    </footer>
  );
};

export default Footer;
