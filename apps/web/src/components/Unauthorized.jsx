export default function Unauthorized({ showModal }) {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center  bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg transform ${
        showModal ? 'scale-100' : 'hidden'
      } transition-transform duration-300 `}
    >
      <div className="bg-white w-1/2 h-1/4 p-12 rounded-2xl text-center">
        <h1 className="mb-4 text-3xl font-extrabold">Unauthorized</h1>
        <p className="text-gray-600">
          Sorry, We`ll have to directing you back....
        </p>
      </div>
    </div>
  );
}
