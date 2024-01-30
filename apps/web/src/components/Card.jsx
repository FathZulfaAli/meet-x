'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Card = () => {
  const [event, setEvents] = useState([]);
  useEffect(() => {
    getEvent();
  }, []);
  console.log('terrrr', event);
  async function getEvent(slug) {
    try {
      const res = await axios.get('http://localhost:8000/events/list-events', {
        params: {
          'fields.slug': slug,
          limit: 1,
          content_type: 'events',
        },
      });
      console.log(res);
      setEvents(res.data.getEvents);
    } catch (error) {
      throw new Error('Failed to fetch event data');
    }
  }

  return (
    <div class="px-6 py-12 text-center bg-white bg-#319a94 md:px-12 lg:text-left">
      {/* <!-- component --> */}
      {/* <!-- component -->
<!-- Create By Joker Banny --> */}

      <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        {event.map((data, index) => (
          <div
            key={index}
            class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          >
            <h3 class="mb-3 text-xl font-bold text-indigo-600">
              {data.category}
            </h3>
            <div class="relative">
              <Image
                class="w-full rounded-xl"
                src="/b1.jpg"
                alt="Colors"
                width={500}
                height={400}
              />
              <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                {data.price_type}
              </p>
            </div>
            <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              {data.tittle}
            </h1>
            <div class="my-4">
              <div class="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p>
                  {data.date_event} {data.time}
                </p>
              </div>
              <div class="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <p>{data.place}</p>
              </div>
              <div class="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                <p>{data.price}</p>
              </div>
              <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                Buy Ticket
              </button>
            </div>
          </div>
        ))}
        <button className="mt-6 group relative h-12 w-48 overflow-hidden mx-auto my-auto rounded-2xl bg-green-500 text-lg font-bold text-white">
          <Link
            href="/discovery"
            className="mt-6 group relative h-12 w-48 overflow-hidden mx-auto my-auto rounded-2xl bg-green-500 text-lg font-bold text-white"
          >
            Load More
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Card;
