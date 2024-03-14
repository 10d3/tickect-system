import Card from "../upComing/Card";

function TopEvent() {
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
  ];

  return (
    <div className=" w-full h-fit flex flex-col items-center mb-16 mt-16 overscroll-x-none">
      <div className="md:w-[66rem] flex flex-col items-center w-full ">
        <div className="w-full h-fit mt-14 mb-4 md:mt-auto md:mb-auto md:my-20 items-center flex flex-col md:flex-row flex-nowrap md:justify-between">
          <h1 className="text-2xl font-bold">Top Events</h1>
        </div>
        <div className=" w-full h-fit flex flex-col justify-center items-center gap-2 md:flex-row md:flex-wrap py-4">
          {events.map((ct, i) => (
            <Card key={i} data={ct} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopEvent;
