import React, { useState } from 'react';
import GoogleIcon from '../assets/imgs/btn_google_light.svg';
import FacebookIcon from '../assets/imgs/btn_facebook.svg';
import { Link } from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState(
    { username: "", password: "" }
  );
  const [warning, setWarning] = useState("");

  const login = async (e) => {
    e.preventDefault();
    if (credentials.username === "" || credentials.password === "") {
      setWarning("Please enter your login credentials.")
    } 
  };

  return (
    <React.Fragment>
      <div className="flex justify-center mt-10">
        <form className="bg-white max-w-xs w-full rounded px-8 pt-6 pb-8 mb-4" action="">
          <h1 className="font-bold text-xl mb-6">Login</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold" for="username">
              Username
            </label>
            <input
              className="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              id="username"
              type="text"
              value={credentials.username}
              onChange={e => setCredentials({ username: e.target.value, password: credentials.password })}
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold" for="password">
              Password
            </label>
            <input
              className="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              id="password"
              type="password"
              value={credentials.password}
              onChange={e => setCredentials({ username: credentials.username, password: e.target.value })}
            />
            <span className="italic text-xs text-red-500">
              {warning}
            </span>
          </div>
          <div className="flex items-center justify-between mb-12">
            <button
              className="trans border border-green bg-green-500 hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={login}
            >
              Login
            </button>
            <a className="trans inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-400" href="#">
              Forgot Password?
            </a>
          </div>
          <div>
            <a href="/api/auth/google" className="trans align-middle tracking-wide flex w-full border border-gray-300 rounded shadow">
              <img src={GoogleIcon} className="block p-2" />
              <span className="w-full flex items-center font-bold text-gray-700">
                Sign in with Google
              </span>
            </a>
          </div>
          <div className="mt-3">
            <a href="/api/auth/facebook" className="trans align-middle bg-blue-600 tracking-wide flex w-full border border-blue-600 rounded shadow">
              <img src={FacebookIcon} className="block p-2" />
              <span className="w-full flex items-center font-bold text-white">
                Log in with Facebook
              </span>
            </a>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
