'use client';
import { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const price_type_enum = { FREE: 'FREE', PAID: 'PAID' };
  const catagory_enum = {
    Sport: 'Sport',
    Concert: 'Concert',
    Seminar: 'Seminar',
    Competition: 'Competition',
  };

  const [tittle, settittle] = useState('');
  const [description, setdescription] = useState('');
  const [img, setimg] = useState('');
  const [date_event, setdate_event] = useState('');
  const [price_type, setprice_type] = useState(price_type_enum.FREE);
  const [category, setcategory] = useState(price_type_enum.concert);
  const [price, setprice] = useState('');
  const [place, setplace] = useState('');
  const [seats, setseats] = useState('');
  const [terms, setterms] = useState('');
  const [time, settime] = useState('');

  const handleSubmit = async () => {
    // console.log(place)

    try {
      const response = await axios.post(
        'http://localhost:8000/event/create-event',
        {
          tittle: tittle,
          description: description,
          img: img,
          date_event: date_event,
          price_type: price_type,
          price: price,
          place: place,
          seats: seats,
          terms: terms,
          time: time,
          category: category,
        },
      );

      if (response.status === 201) {
        console.log(succses);
      } else {
        console.log(gagal);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log;
  return (
    // <!-- component -->
    <>
      <section class="max-w-4xl p-6 mx-auto bg-teal-600 rounded-md shadow-md dark:bg-gray-800 mt-20 mb-20">
        <h1 class="text-xl font-bold text-white capitalize dark:text-white">
          tittle
        </h1>
        <form action={handleSubmit}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-white dark:text-gray-200" htmlFor="username">
                title
              </label>
              <input
                id="username"
                type="text"
                value={tittle}
                onChange={(e) => settittle(e.target.value)}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-white dark:text-gray-200"
                hm="passwordConfirmation"
              >
                description
              </label>
              <textarea
                id="textarea"
                type="textarea"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-white">Image</label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span class="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                        value={img}
                        onChange={(e) => setimg(e.target.value)}
                      />
                    </label>
                    <p class="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p class="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <div>
              <label
                class="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Date event
              </label>
              <input
                id="date"
                type="date"
                value={date_event}
                onChange={(e) => setdate_event(e.target.value)}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Price type
              </label>

              <select
                value={price_type}
                onChange={(e) => setprice_type(e.target.value)}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                {Object.values(price_type_enum).map((enumValue) => (
                  <option key={enumValue} value={enumValue}>
                    {enumValue}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label class="text-white dark:text-gray-200" htmlFor="username">
                price
              </label>
              <input
                id="username"
                type="text"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-white dark:text-gray-200" htmlFor="username">
                place
              </label>
              <input
                id="username"
                type="text"
                value={place}
                onChange={(e) => setplace(e.target.value)}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-white dark:text-gray-200" htmlFor="username">
                seats
              </label>
              <input
                id="username"
                type="text"
                value={seats}
                onChange={(e) => setseats(e.target.value)}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-white dark:text-gray-200" htmlFor="username">
                terms
              </label>
              <input
                id="username"
                type="text"
                value={terms}
                onChange={(e) => setterms(e.target.value)}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-white dark:text-gray-200" htmlFor="username">
                time
              </label>
              <input
                id="username"
                type="text"
                value={time}
                onChange={(e) => settime(e.target.value)}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Category
              </label>

              <select
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                {Object.values(catagory_enum).map((enumValue) => (
                  <option key={enumValue} value={enumValue}>
                    {enumValue}
                  </option>
                ))}
              </select>
            </div>
            <div class="flex mt-6">
              <button
                type="submit"
                class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
export default Create;
