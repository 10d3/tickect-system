import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className=" px-4 bg-cover bg-[url('/public/heroimg.jpg')] w-full h-dvh flex flex-col justify-center items-center overscroll-x-none">
        <div className=" w-full md:max-w-[70%] text-white flex flex-col justify-center items-center text-justify gap-4">
          <h1 className="text-4xl md:text-5xl">See what&apos;s hapenning</h1>
          <h3 className=" w-[90%] text-2xl md:text-3xl">Le plate-forme #1 en Haiti pour acheter vos billets.</h3>
          <p className="md:text-lg w-[90%]">
            Le plate-forme #1 en Haiti pour acheter vos billets.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            <Link to="/events">View Event</Link>
          </button>
        </div>
        <div className="absolute bottom-4 flex items-end">
          <span className="scroll-icon border-white border-[.1em] border-solid">
            <span className="scroll-icon__dot bg-white"></span>
          </span>
        </div>
    </div>
  );
}

export default Hero;
