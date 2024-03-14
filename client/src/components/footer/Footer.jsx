function Footer() {
  const links = [
    { name: "home", href: "#" },
    { name: "Events", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const socials = [
    { name: "fa-brands fa-github", lien: "https://github.com/10d3" },
    {
      name: "fa-brands fa-linkedin",
      lien: "https://www.linkedin.com/in/aherleym/",
    },
    { name: "fa-brands fa-twitter", lien: "" },
    { name: "fa-brands fa-instagram", lien: "" },
  ];

  return (
    <div className="w-full h-fit md:h-[26.9rem] pt-4 overscroll-x-none relative bottom-0 flex flex-col items-center justify-center bg-[#0A075F] text-white">
      <div className=" w-full md:w-[72rem] h-5/6 flex flex-col-reverse md:flex-row flex-nowrap items-center justify-center gap-4 md:gap-6">
        <div className=" w-3/4 md:w-1/3 h-full flex justify-center items-center md:items-start flex-col md:gap-8">
          <h1 className="text-2xl font-bold">Logo</h1>
          <div className="flex flex-col gap-4">
            <p className="text-justify">
              Eventick is a global self-service ticketing platform for live
              experiences that allows anyone to create, share, find and attend
              events that fuel their passions and enrich their lives.
            </p>
            <div className="flex flex-row items-center justify-center gap-2 md:justify-normal">
              {socials.map((social, i) => {
                return(
                  <a href={social.lien} className="text-2xl" key={i}>
                    <i className={social.name}></i>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <div className=" w-full md:w-1/3 h-full flex flex-row md:flex-row items-center justify-center">
          <div className=" w-3/4 md:w-1/2 h-full flex items-center justify-center flex-col md:gap-8">
            <h1 className="text-xl font-bold">Plan events</h1>
            <div>
              {links.map((link, i) => (
                <h1 key={i}>
                  <a href={link.href}>{link.name.toUpperCase()}</a>
                </h1>
              ))}
            </div>
          </div>
          <div className=" w-3/4 md:w-1/2 h-full flex items-center justify-center flex-col md:gap-8">
            <h1 className="text-xl font-bold">Logo logo</h1>
            <div>
              {links.map((link, i) => (
                <h1 key={i}>
                  <a href={link.href}>{link.name.toUpperCase()}</a>
                </h1>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-3/4 md:w-1/3 h-full flex justify-center items-center md:items-start flex-col">
          <h1 className="text-2xl font-bold">Stay in the loop</h1>
          <p>
            Join our mailing list to stay in the loop with our newest for Event
            and concert
          </p>
          <input
            className="block md:w-full w-2/3 py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            type="email"
            name=""
            id=""
            placeholder="your email"
          />
          <button className="bg-blue-400 p-2 rounded-md w-1/3 my-4">
            Join
          </button>
        </div>
      </div>
      <div className=" w-3/4 md:w-[72rem] h-1/6 mt-2 md:mt-0 p-2 border-t-[0.3px] border-[#fefefe] flex items-center justify-center">
        <h1>copyright bla</h1>
      </div>
    </div>
  );
}

export default Footer;
