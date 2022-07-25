import React from "react";

const SearchForm = () => {
    const handleSearch = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const location = data.get('location');
        console.log(location);
    }
    return (
      <form onSubmit={handleSearch}>
        <div className="hidden md:flex flex-col">
          <div className="bg-white bg-opacity-50 p-6 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="location"
                  className="font-medium text-sm text-zinc-800"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Where are you going"
                  className="mt-2 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="date"
                  className="font-medium text-sm text-zinc-800"
                >
                  Check In
                </label>
                <input
                  type="date"
                  id="date"
                  name="check-in"
                  className="mt-2 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="date"
                  className="font-medium text-sm text-zinc-800"
                >
                  Check Out
                </label>
                <input
                  type="date"
                  id="date"
                  name="check-out"
                  className="mt-2 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="guests"
                  className="font-medium text-sm text-zinc-800"
                >
                  Guests
                </label>
                <input
                  type="text"
                  id="guests"
                  name="guests"
                  placeholder="How many people"
                  className="mt-2 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex flex-col">
                <div className="py-5 h-full flex-row justify-center">
                  <button
                    type="submit"
                    className="flex flex-row justify-center mt-2 p-5 w-full text-md font-poppins font-bold text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <span className="">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
}

export default SearchForm;