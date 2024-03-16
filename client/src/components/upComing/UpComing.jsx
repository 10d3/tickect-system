import { useState } from "react";
import Card from "./Card";

function UpComing({ data }) {
  const [evn, setEvn] = useState([]);

  const events = [
    {
      id: 1,
      title: "Father's Day",
      time: "10:00 AM",
      date: "2024-03-20",
      location: "CSEM",
      price: 10.0,
    },
    {
      id: 2,
      title: "Bool Crochet",
      time: "8:00 PM",
      date: "2024-03-25",
      location: "Place Fort-Dauphinois",
      price: 35.0,
    },
    {
      id: 3,
      title: "Concert Blabla",
      time: "10:00 AM",
      date: "2024-03-20",
      location: "Le Palace",
      price: 10.0,
    },
    {
      id: 4,
      title: "Tropicana D'Ayiti",
      time: "8:00 PM",
      date: "2024-03-25",
      location: "Romarin Night Club",
      price: 15.0,
    },
    {
      id: 5,
      title: "DJ Flash",
      time: "10:00 AM",
      date: "2024-03-20",
      location: "Delux Bar & Resto",
      price: 10.0,
    },
    {
      id: 6,
      title: "Sumfest ",
      time: "8:00 PM",
      date: "2024-03-25",
      location: "Parc Saint-Joseph",
      price: 15.0,
    },
  ];

  const places = ["FL", "CP", "OUA", "P-AU-P", "JACMEL"];

  const [pent, setPent] = useState("");

  const filt = events.filter((event) => event.location.includes(pent));

  return (
    <div className=" w-fullh-fit flex flex-col items-center mb-16 overscroll-x-none">
      <div className="md:max-w-[70%] flex flex-col items-center w-full">
        <div className="w-full h-fit my-16 items-center flex flex-col md:flex-row flex-nowrap md:justify-between">
          <h1 className="text-2xl font-bold">{data}</h1>
          <div className="flex flex-col md:flex-row flex-nowrap w-full md:w-fit h-fit gap-4">
            <div className="flex flex-col w-full md:w-fit">
              {/* <label htmlFor="">Place</label> */}
              <select
                id="place"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={(e) => {
                  setPent(e.target.value);
                }}
              >
                <option selected value="">
                  Choose a place
                </option>
                {events.map((place, i) => (
                  <option key={i} value={place.location}>
                    {place.location}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full md:w-fit">
              {/* <label htmlFor="">Place</label> */}
              <select
                id="time"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={(e) => {
                  setPent(e.target.value);
                }}
              >
                <option selected>Choose time</option>
                {events.map((place, i) => (
                  <option key={i} value={place.time}>
                    {place.time}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full md:w-fit">
              {/* <label htmlFor="">Place</label> */}
              <select
                id="price"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={(e) => {
                  setPent(e.target.value);
                }}
              >
                <option selected>Choose a price</option>
                {places.map((place, i) => (
                  <option key={i} value={place.price}>
                    {place.price}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className=" w-full h-fit flex flex-col justify-center items-center gap-2 md:flex-row md:flex-wrap mb-4">
          {filt.map((ct, i) => (
            <Card key={i} data={ct} />
          ))}
        </div>
        <button className=" text-[#3D37F1] border border-[#3D37F1] p-2 w-fit rounded-md">
          Load More
        </button>
      </div>
    </div>
  );
}

export default UpComing;
