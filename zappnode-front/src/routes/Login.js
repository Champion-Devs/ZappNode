import React, { useState } from 'react';
import GoogleIcon from '../assets/imgs/btn_google_light.svg';

function Login() {
  const [credentials, setCredentials] = useState(
    { username: "", password: "" }
  );

  return (
    <React.Fragment>
      <div className="flex justify-center mt-10">
        <form className="bg-white max-w-xs w-full rounded px-8 pt-6 pb-8 mb-4" action="">
          <h1 className="font-bold text-xl mb-6">Login</h1>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input class="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500" id="username" type="text" value={credentials.username} />
          </div>
          <div class="mb-3">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-green-500" id="password" type="password" value={credentials.password}/>
          </div>
          <div class="flex items-center justify-between mb-12">
            <button class="trans border border-green bg-green-500 hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Login
            </button>
            <a class="trans inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-400" href="#">
              Forgot Password?
            </a>
          </div>
          <div>
            <button className="trans align-middle tracking-wide flex w-full border border-gray-300 rounded hover:border-green-500 shadow">
              <img src={GoogleIcon} className="block" />
              <span className="w-full py-3 inline-block align-center font-bold text-gray-700 pr-2">
                Sign in with Google
              </span>
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
