import { HiOutlineStar, HiStar } from "react-icons/hi2";

const Dropdown = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFavorites,
  title = "",
}) => {
  const isFav = (curr) => favorites.includes(curr);
  return (
    <div>
      <label
        className=" block text-sm font-semibold text-gray-400"
        htmlFor={title}
      >
        {title}
      </label>
      <div className="mt-1 relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {favorites.map((fav) => {
            return (
              <option value={fav} key={fav}>
                {fav}
              </option>
            );
          })}
          <hr />

          {currencies
            .filter((c) => !favorites.includes(c))
            .map((curr) => {
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
          {isFav(currency) ? <HiStar /> : <HiOutlineStar />}
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
