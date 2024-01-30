import Image from 'next/image';

const Checkout = () => {
  return (
    <div class="px-6 py-12 text-center bg-teal-600 bg-#319a94 md:px-12 lg:text-left  ">
      <div class=" px-6 py-12 text-center bg-white border-t border-b border-gray-200  text-gray-800">
        <div class="">
          <div class="-mx-3 md:flex items-start">
            <div class="px-3 md:w-7/12 lg:pr-10">
              <div class=" mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                <div class=" flex items-center">
                  <div class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                    <Image
                      src="/b1.jpg"
                      alt="Logo"
                      width={200}
                      height={200}
                      className="w-200 h-200"
                    />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-semibold uppercase text-gray-600">
                      Ray Ban Sunglasses.
                    </h6>
                    <p class="text-gray-400">x 1</p>
                  </div>
                  <div class="custom-number-input h-10 w-32">
                    <label
                      for="custom-input-number"
                      class="w-full text-gray-700 text-sm font-semibold"
                    >
                      Counter Input
                    </label>
                    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <button
                        data-action="decrement"
                        class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                      >
                        <span class="m-auto text-2xl font-thin">−</span>
                      </button>
                      <input
                        type="number"
                        class="outlinenone focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                        name="custom-input-number"
                        value="0"
                      ></input>
                      <button
                        data-action="increment"
                        class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                      >
                        <span class="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                    <div>
                      <span class="font-semibold text-gray-600 text-xl">
                        $210
                      </span>
                      <span class="font-semibold text-gray-600 text-sm">
                        .00
                      </span>
                    </div>
                  </div>
                </div>
                <div class="mb-6 pb-6 border-b border-gray-200">
                  <div class="-mx-2 flex items-end justify-end">
                    <div class="flex-grow px-2 lg:max-w-xs">
                      <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                        Discount code
                      </label>
                      <div>
                        <input
                          class="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="XXXXXX"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="px-2">
                      <button class="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">
                        APPLY
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                  <div class="w-full flex mb-3 items-center">
                    <div class="flex-grow">
                      <span class="text-gray-600">Subtotal</span>
                    </div>
                    <div class="pl-3">
                      <span class="font-semibold">$190.91</span>
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
                <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                  <div class="w-full flex items-center">
                    <div class="flex-grow">
                      <span class="text-gray-600">Total</span>
                    </div>
                    <div class="pl-3">
                      <span class="font-semibold text-gray-400 text-sm">
                        AUD
                      </span>{' '}
                      <span class="font-semibold">$210.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-3 md:w-5/12">
                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-3 items-center">
                    <div class="w-32">
                      <span class="text-gray-600 font-semibold">Contact</span>
                    </div>
                    <div class="flex-grow pl-3">
                      <span>Scott Windon</span>
                    </div>
                  </div>
                  <div class="w-full flex items-center">
                    <div class="w-32">
                      <span class="text-gray-600 font-semibold">
                        Billing Address
                      </span>
                    </div>
                    <div class="flex-grow pl-3">
                      <span>123 George Street, Sydney, NSW 2000 Australia</span>
                    </div>
                  </div>
                </div>
                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div class="w-full p-3 border-b border-gray-200">
                    <div class="mb-5">
                      <label
                        for="type1"
                        class="flex items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          class="form-radio h-5 w-5 text-indigo-500"
                          name="type"
                          id="type1"
                          checked
                        />
                        <Image
                          src="/logo.png"
                          alt="Logo"
                          width={200}
                          height={100}
                          className="w-200 h-100"
                        />
                      </label>
                    </div>
                    <div>
                      <div class="mb-3">
                        <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Name on card
                        </label>
                        <div>
                          <input
                            class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="John Smith"
                            type="text"
                          />
                        </div>
                      </div>
                      <div class="mb-3">
                        <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Card number
                        </label>
                        <div>
                          <input
                            class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="0000 0000 0000 0000"
                            type="text"
                          />
                        </div>
                      </div>
                      <div class="mb-3 -mx-2 flex items-end">
                        <div class="px-2 w-1/4">
                          <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                            Expiration date
                          </label>
                          <div>
                            <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                              <option value="01">01 - January</option>
                              <option value="02">02 - February</option>
                              <option value="03">03 - March</option>
                              <option value="04">04 - April</option>
                              <option value="05">05 - May</option>
                              <option value="06">06 - June</option>
                              <option value="07">07 - July</option>
                              <option value="08">08 - August</option>
                              <option value="09">09 - September</option>
                              <option value="10">10 - October</option>
                              <option value="11">11 - November</option>
                              <option value="12">12 - December</option>
                            </select>
                          </div>
                        </div>
                        <div class="px-2 w-1/4">
                          <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                          </select>
                        </div>
                        <div class="px-2 w-1/4">
                          <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                            Security code
                          </label>
                          <div>
                            <input
                              class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                              placeholder="000"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full p-3">
                    <label for="type2" class="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        class="form-radio h-5 w-5 text-indigo-500"
                        name="type"
                        id="type2"
                      />
                      <Image src="/pay.jpg" alt="Logo" width={80} height={21} />
                    </label>
                  </div>
                </div>
                <div>
                  <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
                    PAY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
