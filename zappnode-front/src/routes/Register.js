import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '../assets/imgs/btn_google_light.svg';

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  return (
    <React.Fragment>
      <div className="flex justify-center mt-10">
        <form className="bg-white max-w-xs w-full rounded px-8 pt-6 pb-8 mb-4" action="">
          <h1 className="font-bold text-xl mb-6">Register</h1>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold" for="username">
              Username
            </label>
            <input
              class="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold" for="email">
              Email address
            </label>
            <input
              class="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              id="email"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-1">
            <label class="block text-gray-700 text-sm font-bold" for="password">
              Choose a password
            </label>
            <input
              class="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-green-500"
              id="passwordCheck"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label class="block text-gray-700 text-sm font-bold" for="passwordCheck">
              Please enter your password again.
            </label>
            <input
              class="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-green-500"
              id="password"
              type="password"
              value={passwordCheck}
              onChange={e => setPasswordCheck(e.target.value)}
            />
          </div>
          <div class="flex items-center justify-between mb-12">
            <Link class="w-full text-center trans border border-green bg-green-500 hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register
            </Link>
          </div>
          <div>
            <Link to="/api/auth/google" className="trans align-middle tracking-wide flex w-full border border-gray-300 rounded hover:border-green-500 shadow">
              <img src={GoogleIcon} className="block" />
              <span className="w-full flex items-center font-bold text-gray-700">
                Sign in with Google
              </span>
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Register;
