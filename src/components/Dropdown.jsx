import { HiOutlineStar } from "react-icons/hi2";

const Dropdown = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFavorites,
  title = "",
}) => {
  return (
    <div>
      <label
        className=" block text-sm font-semibold text-gray-400"
        htmlFor={title}
      >
        {title}
      </label>
      <div className="mt-1 relative">
        <select className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          {/* render fav */}

          {currencies.map((curr) => {
            return (
              <option value={curr} key={curr}>
                {curr}
              </option>
            );
          })}
        </select>

        <button
          onClick={() => handleFavorites(currency)}
          className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"
        >
          <HiOutlineStar />
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
