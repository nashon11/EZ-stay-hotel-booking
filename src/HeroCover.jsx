import React from 'react';

const HeroCover = ({
  locationInputValue,
  numGuestsInputValue,
  locationTypeheadResults,
  isDatePickerVisible,
  setisDatePickerVisible,
  onLocationChangeInput,
  onNumGuestsInputChange,
  dateRange,
  onDateChangeHandler,
  onDatePickerIconClick,
  onSearchButtonAction,
}) => {
  return (
    <div className="hero-background relative flex items-center justify-center">
      <div className="hero-background-overlay"></div>
      <div className="hero-text">
        <h1 className="text-5xl font-extrabold mb-4 text-shadow">
          Discover Your Perfect Stay
        </h1>
        <p className="text-lg mb-8">Anywhere in the world, we’ve got you covered.</p>
        <button
          className="bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-600"
          onClick={onSearchButtonAction}
        >
          Start Exploring
        </button>
      </div>
    </div>
  );
};

export default HeroCover;
