import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "home", href: "/" },
    { name: "event", href: "/events" },
    {name:'create event', href:'/createEvent'},
    { name: "faq", href: "#" },
  ];

  const [isActive, setIsActive] = useState(false);

  return (
    <nav className=" h-fit p-4 top-0 w-full flex items-center justify-center bg-black text-white z-50 backdrop-blur-xl">
      {/* navbar for desktop */}
      <div className=" w-full md:max-w-[70%] h-full flex-row justify-between hidden text-white items-center md:flex">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <div>
          <ul className=" flex flex-row justify-center gap-4 ">
            {links.map((link, i) => {
              return (
                <li key={i}>
                  <Link to={link.href}>{link.name.toUpperCase()}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" flex flex-row gap-4">
          <Link to="/account" className="rounded-full w-fit px-3 ">
            Login
          </Link>
          {/* <button className="rounded-full w-fit px-3 border-2 border-white">
            Sing Up
          </button> */}
        </div>
      </div>
      {/* navbar mobile */}
      <div className=" w-full h-full flex-col justify-center text-white items-center flex md:hidden">
        <div className=" px-4 w-full flex flex-row justify-between items-center">
          <Link to="/">Logo</Link>
          <h1>
            <button
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              {isActive ? (
                <i className=" text-lg fa-solid fa-xmark"></i>
              ) : (
                <i className=" text-lg fa-solid fa-bars-staggered"></i>
              )}
            </button>
          </h1>
        </div>
        <div className="flex items-center justify-center gap-3">
          {isActive && (
            <div className="h-[95vh] flex flex-col items-center justify-center bg-transparent gap-6">
              <div className="">
                <ul className=" flex flex-col items-center justify-center gap-4 ">
                  {links.map((link, i) => {
                    return (
                      <li
                        className="text-2xl"
                        onClick={() => {
                          setIsActive(false);
                        }}
                        key={i}
                      >
                        <a href={link.href}>{link.name.toUpperCase()}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <Link
                  onClick={() => {
                    setIsActive(false);
                  }}
                  to="/account"
                  className="rounded-full w-fit px-4 py-2 bg-blue-600 text-white "
                >
                  Login
                </Link>
                {/* <button className="rounded-full w-fit px-3 text-xl md:border-2 border-white">
                  Sing Up
                </button> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
