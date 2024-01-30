import Image from 'next/image';
import React from 'react';

const dashboard = () => {
  return (
    // <!-- component -->
    <div className="flex">
      <div
        id="view"
        class="h-full w-screen flex flex-row"
        x-data="{ sidenav: true }"
      >
        <button
          // @click="sidenav = true"
          class="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
        >
          <svg
            class="w-5 h-5 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="sidebar"
          class="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
          x-show="sidenav"
          // @click.away="sidenav = false"
        >
          <div class="space-y-6 md:space-y-10 mt-10">
            <h1 class="font-bold text-4xl text-center md:hidden">
              D<span class="text-teal-600">.</span>
            </h1>
            <h1 class="hidden md:block font-bold text-sm md:text-xl text-center">
              Dashboard<span class="text-teal-600">.</span>
            </h1>
            <div id="profile" class="space-y-3">
              <img
                src="/m1.jpg"
                alt="Avatar user"
                class="w-10 md:w-16 rounded-full mx-auto"
              />
              <div>
                <h2 class="font-medium text-xs md:text-sm text-center text-teal-500">
                  Eduard Pantazi
                </h2>
                <p class="text-xs text-gray-500 text-center">Administrator</p>
              </div>
            </div>
            <div class="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
              <input
                type="text"
                class="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                placeholder="Search"
              />
              <button class="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
                <svg
                  class="w-4 h-4 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div id="menu" class="flex flex-col space-y-2">
              <a
                href=""
                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  class="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span class="">Dashboard</span>
              </a>
              <a
                href="/products"
                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  class="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                </svg>

                <span class="">Products</span>
              </a>

              <a
                href=""
                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  class="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="">Reports</span>
              </a>
              <a
                href=""
                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  class="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                </svg>
                <span class="">Messages</span>
              </a>
              <a
                href=""
                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  class="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="">Calendar</span>
              </a>
              <a
                href=""
                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  class="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="">Table</span>
              </a>
              <a
                href=""
                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  class="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
                </svg>
                <span class="">UI Components</span>
              </a>
              <a
                href=""
                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  class="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
                <span class="">Users</span>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- component --> */}
        <div className="container  justify-center items-center px-5 mt-10">
          <h3 class="text-base font-semibold leading-6 text-gray-900">
            Last 30 days
          </h3>

          <dl class="mt-5 m-auto grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div class="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
              <dt>
                <div class="absolute rounded-md bg-red-600 p-3">
                  <svg
                    class="h-6 w-6 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
                <p class="ml-16 truncate text-sm font-medium text-gray-300">
                  Total Subscribers
                </p>
              </dt>
              <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p class="text-2xl font-semibold text-gray-100">71,897</p>
                <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <svg
                    class="h-5 w-5 flex-shrink-0 self-center text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only"> Increased by </span>
                  122
                </p>
                <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-orange-400 hover:text-red-500"
                    >
                      View all
                      <span class="sr-only"> Total Subscribers stats</span>
                    </a>
                  </div>
                </div>
              </dd>
            </div>
            <div class="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
              <dt>
                <div class="absolute rounded-md bg-red-600 p-3">
                  <svg
                    class="h-6 w-6 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
                <p class="ml-16 truncate text-sm font-medium text-gray-300">
                  Total Subscribers
                </p>
              </dt>
              <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p class="text-2xl font-semibold text-gray-100">71,897</p>
                <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <svg
                    class="h-5 w-5 flex-shrink-0 self-center text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only"> Increased by </span>
                  122
                </p>
                <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-orange-400 hover:text-red-500"
                    >
                      View all
                      <span class="sr-only"> Total Subscribers stats</span>
                    </a>
                  </div>
                </div>
              </dd>
            </div>
            <div class="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
              <dt>
                <div class="absolute rounded-md bg-orange-500 p-3">
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                </div>
                <p class="ml-16 truncate text-sm font-medium text-gray-300">
                  Avg. Open Rate
                </p>
              </dt>
              <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p class="text-2xl font-semibold text-gray-100">58.16%</p>
                <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <svg
                    class="h-5 w-5 flex-shrink-0 self-center text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only"> Increased by </span>
                  5.4%
                </p>
                <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-yellow-600 hover:text-orange-500"
                    >
                      View all<span class="sr-only"> Avg. Open Rate stats</span>
                    </a>
                  </div>
                </div>
              </dd>
            </div>
            <div class="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
              <dt>
                <div class="absolute rounded-md bg-blue-500 p-3">
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                    />
                  </svg>
                </div>
                <p class="ml-16 truncate text-sm font-medium text-gray-300">
                  Avg. Click Rate
                </p>
              </dt>
              <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p class="text-2xl font-semibold text-gray-100">24.57%</p>
                <p class="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                  <svg
                    class="h-5 w-5 flex-shrink-0 self-center text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only"> Decreased by </span>
                  3.2%
                </p>
                <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-cyan-600 hover:text-green-500"
                    >
                      View all
                      <span class="sr-only"> Avg. Click Rate stats</span>
                    </a>
                  </div>
                </div>
              </dd>
            </div>
          </dl>
          <div class="flex flex-col mt-10">
            <div class="overflow max-auto sm:mx-0.5 lg:mx-0.5">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          First
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Last
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-gray-100 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          1
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Mark
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Otto
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @mdo
                        </td>
                      </tr>
                      <tr class="bg-white border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          2
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Jacob
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Dillan
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @fat
                        </td>
                      </tr>
                      <tr class="bg-gray-100 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          3
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Mark
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Twen
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @twitter
                        </td>
                      </tr>
                      <tr class="bg-white border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          4
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Bob
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Dillan
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @fat
                        </td>
                      </tr>
                      <tr class="bg-gray-100 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          5
                        </td>
                        <td
                          colspan="2"
                          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                        >
                          Larry the Bird
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default dashboard;
