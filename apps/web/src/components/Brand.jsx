import Image from 'next/image';

const Brand = () => {
  return (
    // <!-- component -->
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
        <div className="m-auto text-center lg:w-7/12">
          <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">
            Join These Brands.
          </h2>
          <h4>
            Weve had the pleasure of working with industry-defining brands.
            These are just some of them.
          </h4>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <div className="p-4">
            <Image src="/logo.png" alt="hero" width={1550} height={400} />
          </div>
          <div className="p-4">
            <Image src="/logo.png" alt="hero" width={1550} height={400} />
          </div>
          <div className="p-4">
            <Image src="/logo.png" alt="hero" width={1550} height={400} />
          </div>
          <div className="p-4">
            <Image src="/logo.png" alt="hero" width={1550} height={400} />
          </div>
          <div className="p-4">
            <Image src="/logo.png" alt="hero" width={1550} height={400} />
          </div>
          <div className="p-4">
            <Image src="/logo.png" alt="hero" width={1550} height={400} />
          </div>
          <div className="p-4">
            <Image src="/logo.png" alt="hero" width={1550} height={400} />
          </div>
          <div className="p-4">
            <Image src="/logo.png" alt="hero" width={1550} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Brand;
