import React, { useEffect, useState } from "react";

const CurrencyConvertor = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);

  const fetchCurrency = async () => {
    try {
      const res = await fetch("https://api.frankfurter.dev/v1/currencies");
      const data = res.json();
      setCurrencies(data);
    } catch (error) {
      console.error("Error fetching currencies");
    }
  };

  useEffect(() => {
    fetchCurrency();
  }, []);
  //https://api.frankfurter.dev/v1/currencies
  //https://api.frankfurter.dev/v1/latest?amount=1&from=USDto=INR
  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-3xl font-semibold text-gray-800">
        Currency Convertor
      </h2>

      <div>DropDowns</div>

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
        <button className="px-5 py-2 bg-indigo-500 text-white font-bold text-md uppercase rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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
