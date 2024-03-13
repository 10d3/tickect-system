import { formatDateFrench } from "../../hook/formatDateFrench";
function Card({ data }) {

  const date = formatDateFrench(data.date)

  return (
    <div className="w-[21.5rem] h-[20rem] max-w-sm bg-white border border-gray-200 rounded-lg ">
      <a href="#">
        <img
          className=" rounded-t-lg h-2/3 w-full"
          src="../../../public/heroimg.jpg"
          alt=""
        />
      </a>
      <div className="px-5 pb-5 h-1/3 flex flex-col items-center justify-between">
        <div className="w-full">
          <a href="#">
            <h1 className=" font-bold text-xl ">{data.title}</h1>
          </a>
        </div>
        <div className="w-full">
          <h4>
            <i className="fa-regular fa-calendar"></i> {date} @ {data.time}
          </h4>
        </div>
        <div className=" w-full flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            {data.price}$
          </span>
          {/* <a
          href="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Details
        </a> */}
          <div>
            <i className="fa-solid fa-location-dot"></i>{" "}
            <span>{data.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
