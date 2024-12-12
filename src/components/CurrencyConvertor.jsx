import React from "react";

const CurrencyConvertor = () => {
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
        Converted Amount: 100 INR
      </div>
    </div>
  );
};

export default CurrencyConvertor;
