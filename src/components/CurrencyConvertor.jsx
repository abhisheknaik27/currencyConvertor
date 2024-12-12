import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

const CurrencyConvertor = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const fetchCurrency = async () => {
    try {
      const res = await fetch("https://api.frankfurter.dev/v1/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error("Error fetching currencies");
    }
  };

  const handleFavorites = (currency) => {};
  useEffect(() => {
    fetchCurrency();
  }, []);

  const currencyConvert = () => {};
  //https://api.frankfurter.dev/v1/currencies
  //https://api.frankfurter.dev/v1/latest?amount=1&from=USDto=INR
  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-3xl font-semibold text-gray-800">
        Currency Convertor
      </h2>

      <div>
        <Dropdown currencies={currencies} title="From:" />
        swap currency button
        <Dropdown currencies={currencies} title="To:" />
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
          className="px-5 py-2 bg-indigo-500 text-white font-bold text-md uppercase rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={currencyConvert}
        >
          Convert
        </button>
      </div>
      <div className=" mt-4 text-xl font-medium text-center text-green-500">
        Converted Amount:{" "}
        <span className="text-green-600 font-semibold">100 INR</span>
      </div>
    </div>
  );
};

export default CurrencyConvertor;
