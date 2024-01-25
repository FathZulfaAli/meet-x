import Image from 'next/image';

const Details = () => {
  return (
    <div className="px-6 py-12 text-center bg-teal-600 bg-#319a94 flex md:px-12 lg:text-left">
      <div className="px-6 item-center justify-center ">
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
                  <span className="font-light text-gray-600">Jun 1, 2020</span>
                  <a
                    href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                  >
                    Konser Musik
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
              </div>
            </div>
          </div>
          <div className="hidden w-4/12  lg:block">
            <div className="mt-6">
              <div className="flex flex-col max-w-sm  mx-auto bg-white rounded-lg shadow-md">
                {/* <!-- Card 2 --> */}
                <a
                  href="#"
                  class="] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50"
                >
                  <div class="grid grid-cols-6 p-5 gap-y-2">
                    {/* <!-- Profile Picture --> */}
                    <div>
                      <img
                        src="https://picsum.photos/seed/2/200/200"
                        class="max-w-16 max-h-16 rounded-full"
                      />
                    </div>

                    {/* <!-- Description --> */}
                    <div class="col-span-5 md:col-span-4 ml-4">
                      <p class="text-sky-500 font-bold text-xs">
                        {' '}
                        7+ SPOTS LEFT{' '}
                      </p>

                      <p class="text-gray-600 font-bold">
                        {' '}
                        [Beginner] Light Discussion{' '}
                      </p>

                      <p class="text-gray-400">
                        {' '}
                        Fri, Mar 11 . 8:00 - 9:30 AM{' '}
                      </p>

                      <p class="text-gray-400"> Beginner speakers </p>
                    </div>

                    {/* <!-- Price --> */}
                  </div>
                </a>
              </div>
            </div>
            <div className="flex-col max-w-sm  mx-auto bg-white rounded-lg shadow-md mt-10 flex ">
              <div className="items-center justify-center flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg ">
                <p className="text-center py-3 ">Start From</p>
                <p className="text-center pb-3 font-bold">Rp. 1.400.000</p>
                <div class="flex  border-gray-100 items-center justify-center">
                  <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    {' '}
                    -{' '}
                  </span>
                  <input
                    class="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    value="2"
                    min="1"
                  />
                  <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50 items-center">
                    {' '}
                    +{' '}
                  </span>
                </div>
                <p className="text-center py-3 ">Start From</p>
                <p className="text-center pb-3 font-bold">Rp. 1.400.000</p>
                <div class="flex  border-gray-100 items-center justify-center">
                  <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    {' '}
                    -{' '}
                  </span>
                  <input
                    class="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    value="2"
                    min="1"
                  />
                  <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50 items-center">
                    {' '}
                    +{' '}
                  </span>
                </div>
                <p className="text-center py-3 ">Start From</p>
                <p className="text-center pb-3 font-bold">Rp. 1.400.000</p>
                <div class="flex  border-gray-100 items-center justify-center">
                  <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    {' '}
                    -{' '}
                  </span>
                  <input
                    class="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    value="2"
                    min="1"
                  />
                  <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50 items-center">
                    {' '}
                    +{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
