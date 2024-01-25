import Brand from '@/components/Brand';
import Card from '@/components/Card';
import Image from 'next/image';

const Home = async () => {
  return (
    <>
      <div>
        <div class="px-6 py-12 text-center bg-teal-600 bg-#319a94 md:px-12 lg:text-left">
          <div class="mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div class="grid items-center gap-12 lg:grid-cols-2">
              <div class="mt-12 lg:mt-0">
                <h1 class="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                  Elevate Your <br />
                  <span class="text-[hsl(218,81%,75%)]">Event Experience</span>
                </h1>
              </div>
              <div class="mb-12 lg:mb-0">
                <Image src="/hero.png" alt="hero" width={1550} height={400} />
              </div>
            </div>
          </div>
        </div>

        <Card />
        <div className="flex">
          <Image src="/hero.png" alt="hero" width={800} height={450} />
          <div class="lg:2/6 xl:w-2/4 mt-10 lg:mt-[90px] lg:ml-16 text-left">
            <div class="text-6xl font-semibold text-gray-900 leading-none">
              Make Your Own Event
            </div>
            <div class="mt-6 text-xl font-light text-true-gray-500 antialiased">
              Amplify your events success by registering on our platform,
              unlocking exclusive benefits, and seamlessly connecting with a
              broader audience, sponsors, and collaborators.
            </div>
            <button className="mt-6 group relative h-12 w-48 overflow-hidden mx-auto my-auto rounded-2xl bg-green-500 text-lg font-bold text-white">
              Create Event
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </div>
        </div>
        <Brand />
      </div>
    </>
  );
};

export default Home;
