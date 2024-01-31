import Card from '@/components/Card';

const Discovery = () => {
  return (
    <>
      <div className="">
        <div className="flex bg-white">
          <div className="md:flex w-2/5 md:w-1/4 bg-white border-r hidden">
            <div className="mx-auto py-10">
              <h1 className="text-2xl font-bold mb-4 cursor-pointer text-[#555486] duration-150">
                FIlter
              </h1>
              <hr className=" pr-[16px] border-solid border-[#555486] pb-10 " />
              <p className="text-md mb-10 cursor-pointer text-[#555486] duration-150">
                Location
              </p>
              <ul className="pb-10">
                <li className="flex">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Jabodetabek
                  </label>
                </li>
                <li className="flex">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Jogya
                  </label>
                </li>
                <li className="flex">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Bali
                  </label>
                </li>

                <li className="flex">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Bandung
                  </label>
                </li>
                <li className="flex">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    All places
                  </label>
                </li>
              </ul>

              {/* catagory */}

              <hr className=" pr-[16px] border-solid border-[#555486] pb-10 " />
              <p className="text-md mb-10 cursor-pointer text-[#555486] duration-150">
                Catagory
              </p>
              <ul className="pb-10">
                <li className="flex">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Concert
                  </label>
                </li>
                <li className="flex">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Favorite
                  </label>
                </li>
                <li className="flex">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Attraction
                  </label>
                </li>

                <li className="flex">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Beauty
                  </label>
                </li>

                <li className="flex">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Hobby
                  </label>
                </li>
              </ul>

              <hr className=" pr-[16px] border-solid border-[#555486] pb-10" />
              <p className="text-md mb-10 cursor-pointer text-[#555486] duration-150">
                Price
              </p>
              <ul className="pb-10">
                <li className="flex">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Paid
                  </label>
                </li>
                <li className="flex">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Free
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <Card />
        </div>
      </div>
      <div className="item-center flex select-none space-x-1 text-gray-700">
        <a
          href="#"
          className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          {' '}
          Previous{' '}
        </a>
        <a
          href="#"
          className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          {' '}
          1{' '}
        </a>
        <a
          href="#"
          className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          {' '}
          2{' '}
        </a>
        <a
          href="#"
          className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          {' '}
          3{' '}
        </a>
        <span className="rounded-md px-4 py-2"> ... </span>
        <a
          href="#"
          className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          {' '}
          10{' '}
        </a>
        <a
          href="#"
          className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          {' '}
          Next{' '}
        </a>
      </div>
    </>
  );
};
export default Discovery;
