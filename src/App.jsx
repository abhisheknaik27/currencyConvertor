import React from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="container">
        <CurrencyConvertor />
      </div>
    </div>
  );
};

export default App;
