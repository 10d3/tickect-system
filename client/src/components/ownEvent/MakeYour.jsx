import { Link } from "react-router-dom";

function MakeYour() {
  return (
    <div className="w-full h-[14rem] flex items-center justify-center flex-row bg-[#EEE1FF] ">
      {/* <div className="w-1/3 h-full flex justify-center items-center">
        <img className="w-auto h-full" src="../../../public/heroimg.jpg" alt="" />
      </div> */}
      <div className=" w-4/5 md:w-1/2 h-full flex flex-col justify-center items-center">
        <h1 className="text-2xl text-justify font-bold">Make your own Event </h1>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link
          to='/createEvent'
          type="button"
          className="mt-2 font-bold text-lg text-white bg-[#F5167E] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Create Event
        </Link>
      </div>
    </div>
  );
}

export default MakeYour;
