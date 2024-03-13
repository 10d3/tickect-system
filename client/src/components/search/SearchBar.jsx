function SearchBar() {
  const places = ["FL", "CP", "OUA", "P-AU-P", "JACMEL"];
  return (
    <div className="w-full mt-4 h-fit md:h-[8rem] relative md:top-[0] justify-center items-center flex text-white">
      <div className="flex w-5/6 py-6 md:px-0 md:w-[66rem] h-full rounded-lg bg-[#242565] flex-col md:flex-row items-center justify-center gap-4">
        <div className="flex flex-col w-3/4 md:w-1/4">
          <label htmlFor="search">Search Event</label>
          <input
            id="search"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            type="text"
            placeholder="search by keyword"
          />
        </div>
        <div className="flex flex-col w-3/4 md:w-1/4">
          <label htmlFor="placeUp">Place</label>
          <select
            id="placeUp"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Choose a place</option>
            {places.map((place, i) => (
              <option key={i} value={place}>
                {place}
              </option>
            ))}
            {/* <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option> */}
          </select>
        </div>
        <div className="flex flex-col w-3/4 md:w-1/4">
          <label htmlFor="timeUp">Time</label>
          <input
            id="timeUp"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            type="date"
          />
        </div>
        {/* <div className="flex flex-col">
          <label htmlFor="">Type</label>
          <input type="text" />
        </div> */}
        <button
          type="button"
          className=" w-3/4 md:w-1/6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
