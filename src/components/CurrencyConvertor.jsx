import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { HiArrowsRightLeft } from "react-icons/hi2";

const CurrencyConvertor = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const [convertedAmount, setConvertedAmount] = useState(null);

  const [loading, setLoading] = useState(false);

  const [fav, setFav] = useState(
    JSON.parse(localStorage.getItem("favs")) || ["INR", "EUR"]
  );

  const fetchCurrency = async () => {
    try {
      const res = await fetch("https://api.frankfurter.dev/v1/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error("Error fetching currencies");
    }
  };

  const handleFavorites = (currency) => {
    let updatedFav = [...fav];
    if (fav.includes(currency)) {
      updatedFav = updatedFav.filter((f) => f !== currency);
    } else {
      updatedFav.push(currency);
    }
    setFav(updatedFav);
    localStorage.setItem("favs", JSON.stringify(updatedFav));
  };
  useEffect(() => {
    fetchCurrency();
  }, []);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  const currencyConvert = async () => {
    if (!amount) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.frankfurter.dev/v1/latest?base=${fromCurrency}&symbols=${toCurrency}`
      );
      const data = await res.json();

      const convertedAmount = amount * data.rates[toCurrency].toFixed(2);
      setConvertedAmount(convertedAmount);
    } catch (err) {
      console.error("Error converting");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-3xl font-semibold text-gray-800">
        Currency Convertor
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <Dropdown
          favorites={fav}
          currencies={currencies}
          title="From:"
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          handleFavorites={handleFavorites}
        />
        <div className="flex justify-center -mb-5 sm:mb-1">
          <button
            onClick={swapCurrencies}
            className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
          >
            <HiArrowsRightLeft />
          </button>
        </div>
        <Dropdown
          favorites={fav}
          currencies={currencies}
          title="To:"
          currency={toCurrency}
          setCurrency={setToCurrency}
          handleFavorites={handleFavorites}
        />
      </div>

      <div className="mt-4 ">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-800"
        >
          Amount:
        </label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-2"
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          className={`px-5 py-2 bg-indigo-500 text-white font-bold text-md uppercase rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        ${loading && "animate-pulse"}`}
          onClick={currencyConvert}
        >
          Convert
        </button>
      </div>
      {convertedAmount && (
        <div className=" mt-4 text-xl font-medium text-center text-green-500">
          Converted Amount:{" "}
          <span className="text-green-600 font-bold">
            {convertedAmount} {toCurrency}
          </span>{" "}
        </div>
      )}
    </div>
  );
};

export default CurrencyConvertor;
