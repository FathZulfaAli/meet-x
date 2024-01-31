'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Card = ({ howMany }) => {
  const [event, setEvents] = useState([]);
  useEffect(() => {
    getEvent();
  }, []);
  async function getEvent(slug) {
    try {
      const res = await axios.get('http://localhost:8000/event/list-events', {
        params: {
          'fields.slug': slug,
          limit: 1,
          content_type: 'events',
        },
      });
      setEvents(res.data);
    } catch (error) {
      throw new Error('Failed to fetch event data');
    }
  }

  return (
    <div className="px-6 py-12 text-center bg-white bg-#319a94 md:px-12 lg:text-left">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        {event.slice(0, howMany).map((data, index) => (
          <div
            key={index}
            className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          >
            <h3 className="mb-3 text-xl font-bold text-indigo-600">
              {data.category}
            </h3>
            <div className="relative">
              <Image
                className="w-full rounded-xl"
                src="/b1.jpg"
                alt="Colors"
                width={500}
                height={400}
              />
              <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                {data.price_type}
              </p>
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              {data.tittle}
            </h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p>
                  {data.date_event} {data.time}
                </p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <p>{data.place}</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                <p>{data.price}</p>
              </div>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                Buy Ticket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
