import React, { useState } from 'react';

/**
 * CurrencySelector component allows the user to select a currency for the site.
 */
const CurrencySelector = ({ selectedCurrency, onCurrencyChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currencies = ['USD', 'EUR', 'GBP', 'INR'];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCurrencySelect = (currency) => {
    onCurrencyChange(currency);
    setIsOpen(false);
  };

  return (
    <div className="currency-selector">
      <button onClick={toggleDropdown} className="bg-gray-800 text-white p-2 rounded">
        {selectedCurrency}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {currencies.map((currency) => (
            <li
              key={currency}
              onClick={() => handleCurrencySelect(currency)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {currency}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CurrencySelector;
