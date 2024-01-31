'use client';
import Toaster from '@/components/Toaster';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [openToast, setOpenToast] = useState(false);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:8000/auth/login', {
        email: email,
        password: password,
      });
      setSuccessMessage('Loging in...');
      setErrorMessage('');
      setOpenToast(true);

      window.localStorage.setItem('token', res.data.token);

      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 3000);
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage(`Error ${error.response.data}`);
      setOpenToast(true);
    }
  };

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url(https://res.cloudinary.com/dzdrs7dkj/image/upload/v1706521450/epn8onwyjo44aotl6wji.jpg)]">
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <Image src="/logo.png" width="250" height="200" alt="Hero" />
              <span className="text-gray-300">Enter login details</span>
            </div>
            <form action={handleSubmit}>
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-lime-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-lime-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-lime-400 bg-opacity-70 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-3">
              <span className="text-gray-300">Not a Organizer ? </span>
              <a href="/login/login-cust">
                <span className="text-gray-300 hover:text-green-300">
                  Login Customer
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        successMessage={successMessage}
        errorMessage={errorMessage}
        open={openToast}
        onClose={() => setOpenToast(false)}
      />
    </>
  );
}
