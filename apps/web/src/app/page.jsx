'use client';
import Brand from '@/components/Brand';
import Card from '@/components/Card';
import Unauthorized from '@/components/Unauthorized';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getProfile();
  }, []);
  async function getProfile() {
    try {
      const token = window.localStorage.getItem('token');
      const res = await axios.post('http://localhost:8000/auth/get-role', {
        token: token,
      });
      if (res.data.role === 'Seller') {
        throw new Error('Unauthorized');
      }
    } catch (error) {
      setIsOpen(true);
      setTimeout(() => {
        window.location.href = '/login/login-cust';
      }, 3000);
    }
  }
  return (
    <>
      <div>
        <Unauthorized showModal={isOpen} />
        <div className=" text-center bg-teal-600 bg-#319a94 px-6 py-12 md:px-12 lg:text-left">
          <div className="mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0">
                <h1 className="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                  Elevate Your <br />
                  <span className="text-[hsl(218,81%,75%)]">
                    Event Experience
                  </span>
                </h1>
              </div>
              <div className="mb-12 lg:mb-0">
                <Image src="/hero.png" alt="hero" width={1550} height={400} />
              </div>
            </div>
          </div>
        </div>

        <Card howMany={3} />
        <div className="flex justify-center items-center px-6 pb-12 text-center bg-white bg-#319a94 md:px-12 lg:text-left">
          <button className="mt-6 group relative h-12 w-48 overflow-hidden mx-auto my-auto rounded-2xl bg-green-500 text-lg font-bold text-white">
            <Link
              href="/discovery"
              className="mt-6 group relative h-12 w-48 overflow-hidden mx-auto my-auto rounded-2xl bg-green-500 text-lg font-bold text-white"
            >
              Load More
            </Link>
          </button>
        </div>
        <div className="flex px-6 py-12 md:px-12">
          <Image src="/hero.png" alt="hero" width={800} height={450} />
          <div className="lg:2/6 xl:w-2/4 mt-10 lg:mt-[90px] lg:ml-16 text-left">
            <div className="text-6xl font-semibold text-gray-900 leading-none">
              Make Your Own Event
            </div>
            <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
              Amplify your events success by registering on our platform,
              unlocking exclusive benefits, and seamlessly connecting with a
              broader audience, sponsors, and collaborators.
            </div>
            <button className="mt-6 group relative h-12 w-48 overflow-hidden mx-auto my-auto rounded-2xl bg-green-500 text-lg font-bold text-white">
              <Link
                href="/create"
                className="mt-6 group relative h-12 w-48 overflow-hidden mx-auto my-auto rounded-2xl bg-green-500 text-lg font-bold text-white"
              >
                Create Event
              </Link>
            </button>
          </div>
        </div>
        <Brand />
      </div>
    </>
  );
};

export default Home;
