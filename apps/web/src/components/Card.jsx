import Image from 'next/image';

const Card = () => {
  return (
    <div className="px-6 py-12 text-center bg-white bg-#319a94 md:px-12 lg:text-left">
      <h1 className="text-center font-bold text-2xl text-indigo-500">
        Trending Event
      </h1>
      <div className="flex flex-col">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7  max-sm:grid-cols-1 w-full my-10">
          {/* <!-- Card 1 --> */}
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none w-full overflow-hidden">
            <Image
              className="h-56 lg:h-60 w-full object-cover"
              src="/m1.jpg"
              width={400}
              height={300}
              alt="marathon1"
            />
            <div className="p-3">
              <div className="text-sm text-primary">19 November 2022</div>
              <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Womens Day 2022: Tanggal, sejarah, makna, tema
                tahun ini
              </h3>
              <p className="paragraph-normal text-gray-600">
                Hari Wanita Internasional 2022: Baca untuk mengetahui sejarah
                dan maknanya...
              </p>
              <a className="mt-3 block" href="/details">
                Read More
              </a>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <Image
              className="h-56 lg:h-60 w-full object-cover"
              src="/m2.jpg"
              width={400}
              height={300}
              alt="marathon2"
            />
            <div class="p-3">
              <span class="text-sm text-primary">November 19, 2022</span>
              <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Womens Day 2022: Date, history, significance,
                theme this year
              </h3>
              <p class="paragraph-normal text-gray-600">
                Happy Womens Day 2022: Read on to know all about the history and
                significance...
              </p>
              <a class="mt-3 block" href="#">
                Read More
              </a>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <Image
              className="h-56 lg:h-60 w-full object-cover"
              src="/s1.jpg"
              width={400}
              height={300}
              alt="marathon2"
            />
            <div class="p-3">
              <span class="text-sm text-primary">November 19, 2022</span>
              <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Womens Day 2022: Date, history, significance,
                theme this year
              </h3>
              <p class="paragraph-normal text-gray-600">
                Happy Womens Day 2022: Read on to know all about the history and
                significance...
              </p>
              <a class="mt-3 block" href="#">
                Read More
              </a>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <Image
              className="h-56 lg:h-60 w-full object-cover"
              src="/s2.jpg"
              width={400}
              height={300}
              alt="marathon2"
            />
            <div class="p-3">
              <span class="text-sm text-primary">November 19, 2022</span>
              <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Womens Day 2022: Date, history, significance,
                theme this year
              </h3>
              <p class="paragraph-normal text-gray-600">
                Happy Womens Day 2022: Read on to know all about the history and
                significance...
              </p>
              <a class="mt-3 block" href="#">
                Read More{' '}
              </a>
            </div>
          </div>

          {/* <!-- Card 5 --> */}
          <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <Image
              className="h-56 lg:h-60 w-full object-cover"
              src="/f1.jpg"
              width={400}
              height={300}
              alt="marathon2"
            />
            <div class="p-3">
              <span class="text-sm text-primary">November 19, 2022</span>
              <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Womens Day 2022: Date, history, significance,
                theme this year
              </h3>
              <p class="paragraph-normal text-gray-600">
                Happy Womens Day 2022: Read on to know all about the history and
                significance...
              </p>
              <a class="mt-3 block" href="#">
                Read More{' '}
              </a>
            </div>
          </div>

          {/* <!-- Card 6 --> */}
          <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden flex flex-col items-center text-center">
            <Image
              className="h-56 lg:h-60 w-full object-cover"
              src="/f2.jpg"
              width={400}
              height={300}
              alt="marathon2"
            />
            <div class="p-3">
              <span class="text-sm text-primary">November 19, 2022</span>
              <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Womens Day 2022: Date, history, significance,
                theme this year
              </h3>
              <p class="paragraph-normal text-gray-600">
                Happy Womens Day 2022: Read on to know all about the history and
                significance...
              </p>
              <a class="mt-3 block" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
        <button className="group relative h-12 w-48 overflow-hidden mx-auto my-auto rounded-2xl bg-green-500 text-lg font-bold text-white">
          Load More
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </div>
    </div>
  );
};
export default Card;
