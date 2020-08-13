import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import GoogleIcon from '../assets/imgs/btn_google_light.svg';
import FacebookIcon from '../assets/imgs/btn_facebook.svg';

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [redirect, setRedirect] = useState(false);

  // warnings for invalid inputs
  const [emailWarning, setEmailWarning] = useState(" ");
  const [passwordWarning, setPasswordWarning] = useState(<ul></ul>)

  const validEmailAdress = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email);
  };

  const validPassword = () => {
    const re = /^([a-zA-Z0-9!@#$%^&*]{8,15})$/;
    var valid = re.test(password);
    if (!valid) return false;
    if (password === passwordCheck) return true;
    return false;
  };

  const register = async (e) => {
    e.preventDefault();
    // check if username || email || password
    if (!validEmailAdress()) {
      setEmailWarning("* Not a valid email address");
    } else if (!validPassword()) {
      setPasswordWarning(
        <ul>
          <li>Valid password characters:</li>
          <li>- upper and lowercase letters</li>
          <li>- numbers</li>
          <li>- special characters: !, @, #, $, %, ^, &, *</li>
          <li>Password must be between 8-15 characters long.</li>
          <li>Passwords must match</li>
        </ul>
      )
    } else {

      const data = {
        name: username,
        email: email,
        password: password
      }
      const res = await fetch(
        "/api/auth/signUp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
        );
        if (res.status === 201) {
          setRedirect(true);
        }
      }
  };

  return (
    <React.Fragment>
      {redirect ? <Redirect to="/dashboard" /> : null};
      <div className="flex justify-center mt-10">
        <form className="bg-white max-w-xs w-full rounded px-8 pt-6 pb-8 mb-4" action="">
          <h1 className="font-bold text-xl mb-6">
            Create an account
          </h1>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold">
              Username
            </label>
            <input
              className="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold">
              Email address
            </label>
            <input
              className="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              id="email"
              type="text"
              value={email}
              onChange={e => {
                setEmail(e.target.value)
                setEmailWarning("")
              }}
            />
            <span className="inline-block italic text-xs text-red-500">
              {emailWarning}
            </span>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold">
              Choose a password
            </label>
            <input
              className="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              id="passwordCheck"
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value)
                setPasswordWarning(<ul></ul>)
              }}
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold">
              Please enter your password again
            </label>
            <input
              className="trans appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
              id="password"
              type="password"
              value={passwordCheck}
              onChange={e => {
                setPasswordCheck(e.target.value)
                setPasswordWarning(<ul></ul>)
              }}
            />
            <span className="italic text-xs text-red-500">
              {passwordWarning}
            </span>
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
            <p className="text-xs">Already have an account? <a href="/login" className="text-green-500 hover:text-green-300">Login</a></p>
          </div>
          <div>
            <Link to="/api/auth/google" className="trans align-middle tracking-wide flex w-full border border-gray-300 rounded shadow">
              <img src={GoogleIcon} className="block p-2" />
              <span className="w-full flex items-center font-bold text-gray-700">
                Sign in with Google
              </span>
            </Link>
          </div>
          <div className="mt-3">
            <Link to="/api/auth/facebook" className="trans align-middle bg-blue-600 tracking-wide flex w-full border border-blue-600 rounded shadow">
              <img src={FacebookIcon} className="block p-2" />
              <span className="w-full flex items-center font-bold text-white">
                Log in with Facebook
              </span>
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Register;
