import React, { useState, useRef, useEffect } from 'react';
import HotelViewCard from 'components/hotel-view-card/HotelViewCard';
import VerticalFilters from 'components/vertical-filters/VerticalFilters';
import HotelViewCardSkeleton from 'components/hotel-view-card-skeleton/HotelViewCardSkeleton';
import VerticalFiltersSkeleton from 'components/vertical-filters-skeleton/VerticalFiltersSkeleton';
import EmptyHotelsState from 'components/empty-hotels-state/EmptyHotelsState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import useOutsideClickHandler from '../../hooks/useOutsideClickHandler';

const ResultsContainer = (props) => {
  const {
    hotelsResults,
    enableFilters,
    filtersData,
    selectedFiltersState,
    onFiltersUpdate,
    onClearFiltersAction,
    sortingFilterOptions,
    sortByFilterValue,
    onSortingFilterChange,
  } = props;

  const isSortingFilterVisible =
    sortingFilterOptions && sortingFilterOptions.length > 0;

  const [isVerticalFiltersOpen, setIsVerticalFiltersOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');

  const wrapperRef = useRef();
  const buttonRef = useRef();

  useOutsideClickHandler(wrapperRef, (event) => {
    if (!buttonRef.current.contains(event.target)) {
      setIsVerticalFiltersOpen(false);
    }
  });

  const toggleVerticalFiltersAction = () => {
    setIsVerticalFiltersOpen((prevState) => !prevState);
  };

  const ACCESS_KEY = '_BQAlmG3Vc8ddycWGV1CAqPwlxx1VWXB_6AtXhfSJWQ'; // Unsplash API key

  // Function to fetch a random background image from Unsplash
  const getRandomBackgroundImage = async () => {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=1`);
      const data = await response.json();

      if (data && data.length > 0) {
        const imageUrl = data[0].urls.full;
        console.log('Fetched Background Image URL:', imageUrl);  // Debugging API response
        setBackgroundImage(imageUrl); // Set the full-size image URL
      } else {
        console.log('No image found, setting fallback image.');
        setBackgroundImage('https://source.unsplash.com/1600x900/?nature');  // Fallback image
      }
    } catch (error) {
      console.error('Error fetching image:', error);
      setBackgroundImage('https://source.unsplash.com/1600x900/?nature');  // Fallback image
    }
  };

  useEffect(() => {
    getRandomBackgroundImage(); // Fetch background image on component mount
  }, []);

  return (
    <div
      className="relative min-h-screen py-10 bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      <div className="relative z-10 flex gap-x-0 md:gap-x-4 items-start mx-2 px-4 md:px-10">
        {enableFilters && selectedFiltersState.length > 0 && (
          <div ref={wrapperRef} className="z-10">
            <VerticalFilters
              filtersData={selectedFiltersState}
              onFiltersUpdate={onFiltersUpdate}
              onClearFiltersAction={onClearFiltersAction}
              isVerticalFiltersOpen={isVerticalFiltersOpen}
            />
          </div>
        )}
        {enableFilters && filtersData.isLoading && <VerticalFiltersSkeleton />}
        <div className="flex flex-col w-full items-start text-white">
          <div className="flex w-full justify-between px-2 md:px-0">
            {enableFilters && (
              <div className="vertical-filters__toggle-menu block md:hidden">
                <button
                  ref={buttonRef}
                  onClick={toggleVerticalFiltersAction}
                  className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 font-medium rounded text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faFilter} size="sm" className="mr-1" />{' '}
                  Filters
                </button>
              </div>
            )}
            {isSortingFilterVisible && (
              <Select
                value={sortByFilterValue}
                onChange={onSortingFilterChange}
                options={sortingFilterOptions}
                className="mb-2 w-[180px] text-sm border rounded-md border-gray-300"
              />
            )}
          </div>
          <div className="hotels-results__container mx-2 md:mx-0 flex flex-col gap-y-6 w-full">
            {hotelsResults.isLoading ? (
              Array.from({ length: 5 }, (_, index) => (
                <HotelViewCardSkeleton key={index} />
              ))
            ) : hotelsResults.data.length > 0 ? (
              hotelsResults.data.map((hotel) => (
                <HotelViewCard
                  key={hotel.hotelCode}
                  id={hotel.hotelCode}
                  title={hotel.title}
                  image={hotel.images[0]}
                  subtitle={hotel.subtitle}
                  benefits={hotel.benefits}
                  ratings={hotel.ratings}
                  price={hotel.price}
                  className="hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                />
              ))
            ) : (
              <EmptyHotelsState />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsContainer;
