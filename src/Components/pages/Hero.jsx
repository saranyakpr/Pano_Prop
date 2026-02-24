import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import locationIcon from '../../assets/img/location.png'
import property from '../../assets/img/property.png'
import budget from '../../assets/img/budget.png'

function Hero() {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [propertyTypeOpen, setPropertyTypeOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState(['Flat']);
  const [selectedBhk, setSelectedBhk] = useState(['1 BHK']);
  const [selectedMin, setSelectedMin] = useState('₹50Lakh');
  const [selectedMax, setSelectedMax] = useState('₹1Crore');

  const residentialTypes = ['Flat', 'House/Villa', 'Plot'];
  const bhkOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '5+ BHK'];
  const minOptions = ['Min', '₹5Lakh', '₹20Lakh', '₹50Lakh', '₹1Crore', '₹1.5Crore', '₹3Crore', '₹6Crore'];
  const maxOptions = ['Max', '₹20Lakh', '₹50Lakh', '₹1Crore', '₹2Crore', '₹3Crore', '₹5Crore', '₹10Crore'];

  const toggleChip = (value, selected, setSelected) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const allSelections = [...selectedTypes, ...selectedBhk];
  const propertyTypeLabel =
    allSelections.length === 0
      ? 'Select'
      : allSelections.length === 1
        ? allSelections[0]
        : `${allSelections[0]}+${allSelections.length - 1}`;

  return (
    <section className="bg-[#f5f7fb] px-4 sm:px-6 lg:px-8 pt-14 pb-10 sm:pt-20 sm:pb-15">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="mb-4 sm:mb-3">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-green-50 text-blue-600 text-xs sm:text-sm font-medium rounded-full border border-blue-100">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            RERA Approved Real Estate Marketplace
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.1] mb-5 sm:mb-5">
          <span className="text-gray-900">Discover your Next</span>
          <br />
          <span className="text-blue-600">Perfect Address.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mb-6 sm:mb-8 leading-relaxed">
          Search across thousands of verified properties and newly launched projects
          with complete transparency and trust.
        </p>

        {/* Search Bar */}
        <div className="relative z-20 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-5 max-w-4xl">
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-0">
            {/* Location */}
            <div className="flex items-center gap-3 flex-1 px-3 lg:border-r border-gray-200">
              {/* <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg> */}
              <img src={locationIcon} alt="Location Icon" className="w-6 h-6 text-blue-600 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                  Location
                </p>
                <input
                  type="text"
                  placeholder="Enter city or locality"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full text-sm text-gray-500 placeholder-gray-400 outline-none bg-transparent mt-1"
                />
              </div>
            </div>

            {/* Property Type */}
            <div className="relative flex-1 px-3 lg:border-r border-gray-200">
              <button
                className="flex items-center gap-3 w-full text-left"
                onClick={() => {
                  setPropertyTypeOpen(!propertyTypeOpen);
                  setBudgetOpen(false);
                }}
              >
                {/* <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg> */}
                <img src={property} alt="Property Type Icon" className="w-6 h-6 text-blue-600 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                    Property Type
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mt-1">{propertyTypeLabel}</p>
                </div>
                <svg className="w-4 h-4 text-gray-400 shrink-0 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Property Type Dropdown */}
              {propertyTypeOpen && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-20">
                  {/* Residentials */}
                  <p className="text-xs text-gray-500 font-medium mb-2.5">Residentials</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {residentialTypes.map((type) => (
                      <button
                        key={type}
                        className={`px-3.5 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                          selectedTypes.includes(type)
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleChip(type, selectedTypes, setSelectedTypes);
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  {/* BHK Options */}
                  <div className="flex flex-wrap gap-2">
                    {bhkOptions.map((bhk) => (
                      <button
                        key={bhk}
                        className={`px-3.5 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                          selectedBhk.includes(bhk)
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleChip(bhk, selectedBhk, setSelectedBhk);
                        }}
                      >
                        {bhk}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Budget */}
            <div className="relative flex-1 px-3">
              <button
                className="flex items-center gap-3 w-full text-left"
                onClick={() => {
                  setBudgetOpen(!budgetOpen);
                  setPropertyTypeOpen(false);
                }}
              >
                {/* <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> */}
                <img src={budget} alt="Budget Icon" className="w-6 h-6 text-blue-600 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                    Budget
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mt-1">{selectedMin}-{selectedMax}</p>
                </div>
                <svg className="w-4 h-4 text-gray-400 shrink-0 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Budget Dropdown */}
              {budgetOpen && (
                <div className="absolute top-full right-0 lg:left-0 mt-3 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-20">
                  {/* Min / Max Inputs */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className={`px-3 py-2 rounded-lg border text-sm text-center ${selectedMin !== 'Min' ? 'border-blue-600 text-blue-600 font-medium' : 'border-gray-200 text-gray-400'}`}>
                      {selectedMin === 'Min' ? 'Minimum' : selectedMin}
                    </div>
                    <div className={`px-3 py-2 rounded-lg border text-sm text-center ${selectedMax !== 'Max' ? 'border-blue-600 text-blue-600 font-medium' : 'border-gray-200 text-gray-400'}`}>
                      {selectedMax === 'Max' ? 'Maximum' : selectedMax}
                    </div>
                  </div>

                  {/* Min / Max Columns */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Min Column */}
                    <div>
                      <p className="text-xs font-semibold text-blue-600 mb-2">Min</p>
                      <div className="space-y-1">
                        {minOptions.map((option) => (
                          <button
                            key={option}
                            className={`block w-full text-left px-2 py-1.5 text-sm rounded transition-colors ${
                              selectedMin === option ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedMin(option);
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Max Column */}
                    <div>
                      <p className="text-xs font-semibold text-blue-600 mb-2">Max</p>
                      <div className="space-y-1">
                        {maxOptions.map((option) => (
                          <button
                            key={option}
                            className={`block w-full text-left px-2 py-1.5 text-sm rounded transition-colors ${
                              selectedMax === option ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedMax(option);
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <div className="lg:pl-3 shrink-0">
              <button
                className="w-full lg:w-auto flex items-center justify-center gap-2 px-10 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
                onClick={() => {
                  const params = new URLSearchParams();
                  if (location) params.set('location', location);
                  navigate(`/search?${params.toString()}`);
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dark overlay when dropdown is open */}
      {(propertyTypeOpen || budgetOpen) && (
        <div
          className="fixed inset-0 bg-black/40 z-10"
          onClick={() => {
            setPropertyTypeOpen(false);
            setBudgetOpen(false);
          }}
        />
      )}
    </section>
  );
}

export default Hero;
