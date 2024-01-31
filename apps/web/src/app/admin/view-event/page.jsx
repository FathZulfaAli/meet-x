'use client';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Details({ params }) {
  // const { data } = await getEvent(params.slug);
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
  const data = event;
  return (
    <div className="px-6 py-12 text-center bg-teal-600 bg-#319a94 flex md:px-12 lg:text-left">
      <div key={data.id} className="px-6 item-center justify-center ">
        <Image
          src="/m1.jpg"
          alt="marathon1"
          width={1300}
          height={500}
          className="w-1300 h-900 rounded-lg"
        />
        <div className="container flex justify-between mx-auto pt-10">
          <div className="w-full lg:w-8/12">
            <div className="mt-6">
              <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <span className="font-light text-gray-600">
                    {data.date_event}
                  </span>
                  <a
                    href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                  >
                    {data.category}
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    href="#"
                    className="text-2xl font-bold text-gray-700 hover:underline"
                  >
                    Build Your New Idea with Laravel Freamwork.
                  </a>
                  <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora expedita dicta totam aspernatur doloremque.
                    Excepturi iste iusto eos enim reprehenderit nisi, accusamus
                    delectus nihil quis facere in modi ratione libero!
                  </p>
                </div>
                {/* <!-- component --> */}
                <div className="flex gap-10 items-center justify-between">
                  <label>
                    <input
                      className="peer/showLabel absolute scale-0"
                      type="checkbox"
                    />
                    <span className=" mt-10 mb-10 block max-h-14 max-w-xs overflow-hidden rounded-lg bg-lime-100 px-4 py-0 text-cyan-800 shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-52">
                      <h3 className="flex h-14 cursor-pointer items-center font-bold">
                        BASIC : Rp. 500.000
                      </h3>
                      <p className="mb-2">
                        Dapatkan Tempat Duduk Depan atau Belakang
                      </p>
                    </span>
                  </label>
                  <form className="max-w-sm mx-auto">
                    <input
                      type="number"
                      id="number-input"
                      aria-describedby="helper-text-explanation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Jumlah Item"
                      required
                    />
                  </form>

                  <a
                    href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                  >
                    Pilih Tiket
                  </a>
                </div>
                <div className="flex gap-10 items-center justify-between">
                  <label>
                    <input
                      className="peer/showLabel absolute scale-0"
                      type="checkbox"
                    />
                    <span className=" mt-10 mb-10 block max-h-14 max-w-xs overflow-hidden rounded-lg bg-lime-100 px-4 py-0 text-cyan-800 shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-52">
                      <h3 className="flex h-14 cursor-pointer items-center font-bold">
                        SILVER : Rp. 950.000
                      </h3>
                      <p className="mb-2">
                        Dapatkan Tempat Duduk Ditengah dan Makan
                      </p>
                    </span>
                  </label>
                  <form className="max-w-sm mx-auto">
                    <input
                      type="number"
                      id="number-input"
                      aria-describedby="helper-text-explanation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Jumlah Item"
                      required
                    />
                  </form>

                  <a
                    href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                  >
                    Pilih Tiket
                  </a>
                </div>
                <div className="flex gap-10 items-center justify-between">
                  <label>
                    <input
                      className="peer/showLabel absolute scale-0"
                      type="checkbox"
                    />
                    <span className=" mt-10 mb-10 block max-h-14 max-w-xs overflow-hidden rounded-lg bg-lime-100 px-4 py-0 text-cyan-800 shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-52">
                      <h3 className="flex h-14 cursor-pointer items-center font-bold">
                        GOLD : Rp. 1.400.000
                      </h3>
                      <p className="mb-2">
                        Dapatkan Tempat Duduk Depan Panggung dan Makan
                      </p>
                    </span>
                  </label>
                  <form className="max-w-sm mx-auto">
                    <input
                      type="number"
                      id="number-input"
                      aria-describedby="helper-text-explanation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Jumlah Item"
                      required
                    />
                  </form>

                  <a
                    href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                  >
                    Pilih Tiket
                  </a>
                </div>
                <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                  <div className="w-full flex items-center">
                    <div className="flex-grow pl-3">
                      <h6 className="font-semibold uppercase text-gray-600">
                        Ray Ban Sunglasses.
                      </h6>
                      <p className="text-gray-400">x 1</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-600 text-xl">
                        $210
                      </span>
                      <span className="font-semibold text-gray-600 text-sm">
                        .00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="-mx-2 flex items-end justify-end">
                    <div cclassName="flex-grow px-2 lg:max-w-xs">
                      <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                        Discount code
                      </label>
                      <div>
                        <input
                          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="XXXXXX"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="px-2">
                      <button className="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">
                        APPLY
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                  <div className="w-full flex mb-3 items-center">
                    <div className="flex-grow">
                      <span className="text-gray-600">Subtotal</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold">$190.91</span>
                    </div>
                  </div>
                  <div class="w-full flex items-center">
                    <div class="flex-grow">
                      <span class="text-gray-600">Taxes (GST)</span>
                    </div>
                    <div class="pl-3">
                      <span class="font-semibold">$19.09</span>
                    </div>
                  </div>
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                  <div className="w-full flex items-center">
                    <div className="flex-grow">
                      <span className="text-gray-600">Total</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold text-gray-400 text-sm">
                        AUD
                      </span>{' '}
                      <span className="font-semibold">$210.00</span>
                    </div>
                  </div>
                  <div>
                    <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
                      <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden w-4/12  lg:block">
            <div className="mt-6">
              <div className="flex flex-col max-w-sm  mx-auto bg-white rounded-lg shadow-md">
                {/* <!-- Card 2 --> */}
                <a
                  href="#"
                  className="] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50"
                >
                  <div className="grid grid-cols-6 p-5 gap-y-2">
                    {/* <!-- Profile Picture --> */}
                    <div>
                      <Image
                        alt=""
                        src="https://picsum.photos/seed/2/200/200"
                        class="rounded-full"
                        width={25}
                        height={25}
                      />
                    </div>

                    {/* <!-- Description --> */}
                    <div className="col-span-5 md:col-span-4 ml-4">
                      <p className="text-sky-500 font-bold text-xs">
                        {' '}
                        7+ SPOTS LEFT{' '}
                      </p>

                      <p className="text-gray-600 font-bold">
                        {' '}
                        [Beginner] Light Discussion{' '}
                      </p>

                      <p className="text-gray-400">
                        {' '}
                        Fri, Mar 11 . 8:00 - 9:30 AM{' '}
                      </p>

                      <p className="text-gray-400"> Beginner speakers </p>
                    </div>

                    {/* <!-- Price --> */}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
