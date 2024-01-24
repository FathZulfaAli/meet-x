const Create = () => {
  return (
    // <!-- component -->
    <div class="from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br py-32 px-10 min-h-screen ">
      {/* <!--   tip; mx-auto -- jagab ilusti keskele  --> */}
      <div class="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <h2 class="text-2xl font-bold ">Submit your application</h2>
        <p class="my-4 opacity-70">
          Adipisicing elit. Quibusdam magnam sed ipsam deleniti debitis
          laboriosam praesentium dolorum doloremque beata.
        </p>
        <hr class="my-6" />
        <form action="">
          {/* <!--       flex - asjad korvuti, nb! flex-1 - element kogu ylejaanud laius --> */}
          <div class="flex items-center mb-5">
            {/* <!--         tip - here neede inline-block , but why? --> */}
            <label
              for="name"
              class="inline-block w-20 mr-6 text-right 
                                           font-bold text-gray-600"
            >
              Tittle
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tittle"
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                text-gray-600 placeholder-gray-400
                                outline-none"
            />
          </div>
          <div class="flex items-center mb-5">
            {/* <!--         tip - here neede inline-block , but why? --> */}
            <label
              for="name"
              class="inline-block w-20 mr-6 text-right 
                                           font-bold text-gray-600"
            >
              Category
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                text-gray-600 placeholder-gray-400
                                outline-none"
            />
          </div>

          <div class="flex items-center mb-5">
            {/* <!--         tip - here neede inline-block , but why? --> */}
            <label
              for="number"
              class="inline-block w-20 mr-6 text-right 
                                           font-bold text-gray-600"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="date"
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                text-gray-600 placeholder-gray-400
                                outline-none"
            />
          </div>
          <div class="flex items-center mb-5">
            {/* <!--         tip - here neede inline-block , but why? --> */}
            <label
              for="name"
              class="inline-block w-20 mr-6 text-right 
                                           font-bold text-gray-600"
            >
              Location
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                text-gray-600 placeholder-gray-400
                                outline-none"
            />
          </div>

          <div class="flex items-center mb-5">
            {/* <!--         tip - here neede inline-block , but why? --> */}
            <label
              for="name"
              class="inline-block w-20 mr-6 text-right 
                                           font-bold text-gray-600"
            >
              Description
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                text-gray-600 placeholder-gray-400
                                outline-none"
            />
          </div>

          <div class="flex items-center mb-5">
            {/* <!--         tip - here neede inline-block , but why? --> */}
            <label
              for="name"
              class="inline-block w-20 mr-6 text-right 
                                           font-bold text-gray-600"
            >
              Terms
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                text-gray-600 placeholder-gray-400
                                outline-none"
            />
          </div>

          <div class="flex items-center mb-5">
            {/* <!--         tip - here neede inline-block , but why? --> */}
            <label
              for="number"
              class="inline-block w-20 mr-6 text-right 
                                           font-bold text-gray-600"
            >
              Seats
            </label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="number"
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                text-gray-600 placeholder-gray-400
                                outline-none"
            />
          </div>

          <div class="flex items-center mb-5">
            {/* <!--         tip - here neede inline-block , but why? --> */}
            <label
              for="number"
              class="inline-block w-20 mr-6 text-right 
                                           font-bold text-gray-600"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              placeholder="time"
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                text-gray-600 placeholder-gray-400
                                outline-none"
            />
          </div>
          <div class="flex items-center mb-5">
            {/* <!--         tip - here neede inline-block , but why? --> */}
            <label
              for="number"
              class="inline-block w-20 mr-6 text-right 
                                   font-bold text-gray-600"
            >
              Ticket Category
            </label>
            <select
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                        text-gray-600 placeholder-gray-400
                        outline-none"
            >
              <option>Paid</option>
              <option>Free</option>
            </select>
          </div>
          <div class="flex items-center mb-5">
            {/* <!--         tip - here neede inline-block , but why? --> */}
            <label
              for="number"
              class="inline-block w-20 mr-6 text-right 
                                           font-bold text-gray-600"
            >
              Price
            </label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="number"
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                text-gray-600 placeholder-gray-400
                                outline-none"
            />
          </div>

          <div class="text-right">
            <button class="py-3 px-8 bg-green-400 text-white font-bold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Create;
