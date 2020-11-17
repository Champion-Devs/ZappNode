import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import GoogleIcon from '../assets/imgs/btn_google_light.svg';
import FacebookIcon from '../assets/imgs/btn_facebook.svg';
import { AppContext } from '../context/AppState';

function Register() {
  const { registerUser } = useContext(AppContext);

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordCheck, setPasswordCheck] = useState(null);
  const [redirect, setRedirect] = useState(null);

  const register = async (e) => {
    e.preventDefault();
    const res = await registerUser(username, email, password, passwordCheck);
    return res ? setRedirect(res) : null;
  };

  return (
    <React.Fragment>
      {redirect ? <Redirect to="/dashboard" /> : null}
      <div className="flex bg-lin">
        <form className="bg-white mx-auto rounded w-1/2 px-16 py-8 m-10" action="">
          <h1 className="font-bold text-2xl mb-6 text-center">Create an account</h1>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold">Username</label>
            <input
              className="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold">Email address</label>
            <input
              className="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              id="email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold">Choose a password</label>
            <input
              className="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              id="passwordCheck"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold">Please enter your password again</label>
            <input
              className="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              id="password"
              type="password"
              value={passwordCheck}
              onChange={(e) => {
                setPasswordCheck(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full text-center trans border border-green bg-green-500 hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none"
              onClick={register}
            >
              Register
            </button>
          </div>
          <div className="mb-12">
            <p className="text-xs text-center mt-4">
              Already have an account?{' '}
              <a href="/login" className="text-green-500 hover:text-green-300">
                Login
              </a>
            </p>
          </div>
          <div>
            <Link
              to="/api/auth/google"
              className="trans align-middle tracking-wide text-center flex w-full border border-gray-300 rounded shadow"
            >
              <img src={GoogleIcon} className="block p-2 mx-auto" alt="googleIcon" />
              <span className="w-full flex items-center font-bold text-gray-700 text-center">Sign in with Google</span>
            </Link>
          </div>
          <div className="mt-3 text-center">
            <Link
              to="/api/auth/facebook"
              className="trans align-middle bg-blue-600 tracking-wide justify-center flex w-full border border-blue-600 rounded shadow"
            >
              <img src={FacebookIcon} className="block p-2" alt="facebookIcon" />
              <span className="w-full flex items-center font-bold text-white">Log in with Facebook</span>
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Register;
