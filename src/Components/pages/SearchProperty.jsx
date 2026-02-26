import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import bed from '../../assets/img/bed.png';
import bath from '../../assets/img/bath.png';
import square from '../../assets/img/square.png';
import verify from '../../assets/img/verify.png';

function SearchProperty() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Relevance');
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [selectedBhk, setSelectedBhk] = useState(['2 BHK']);
  const [selectedStatus, setSelectedStatus] = useState(['Ready to Move', 'Under Construction']);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState(['Apartment', 'Villa', 'Penthouse']);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const locationParam = searchParams.get('location') || 'Hyderabad';

  const bhkOptions = ['1 BHK', '2 BHK', '3 BHK', '4+ BHK'];
  const statusOptions = ['Ready to Move', 'Under Construction'];
  const propertyTypeOptions = ['Apartment', 'Villa', 'Penthouse', 'Plot', 'Commercial'];
  const sortOptions = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Newest First'];

  const toggleFilter = (value, selected, setSelected) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const resetAll = () => {
    setPriceRange([50, 500]);
    setSelectedBhk(['2 BHK']);
    setSelectedStatus(['Ready to Move', 'Under Construction']);
    setSelectedPropertyTypes(['Apartment', 'Villa', 'Penthouse']);
  };

  const properties = Array(6).fill({
    price: '$1.2L',
    name: 'Skyline Residency -3BHK',
    location: 'Baskara West, Hyderabad',
    beds: 3,
    baths: 2,
    sqft: '1,850',
    isNewLaunch: true,
    isVerified: true,
  });

  const otherCityProperties = [
    { price: '$1.2L', name: 'Skyline Residency -3BHK', location: 'Banjara Hills, Bangalore', beds: 3, baths: 2, sqft: '1,850', isNewLaunch: true, isVerified: true },
    { price: '$1.5L', name: 'Green Valley Homes -2BHK', location: 'Whitefield, Mumbai', beds: 2, baths: 2, sqft: '1,200', isNewLaunch: false, isVerified: true },
    { price: '$2.0L', name: 'Royal Heights -4BHK', location: 'Koramangala, Chennai', beds: 4, baths: 3, sqft: '2,400', isNewLaunch: true, isVerified: true },
    { price: '$1.8L', name: 'Pearl Residency -3BHK', location: 'Jubilee Hills, Pune', beds: 3, baths: 2, sqft: '1,950', isNewLaunch: false, isVerified: true },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div className='flex justify-between'>
          <div>
            <nav className="text-sm text-gray-500">
              <span className="hover:text-blue-600 cursor-pointer">Home</span>
              <span className="mx-1.5">&gt;</span>
              <span className="hover:text-blue-600 cursor-pointer">Properties in {locationParam}</span>
              <span className="mx-1.5">&gt;</span>
              <span className="text-gray-700">Apartment for Sale</span>
            </nav>

            {/* Title + Results */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                Properties for Sale in {locationParam}
              </h1>
              <p className="text-sm text-gray-500">
                Showing 1,240 results based on your search
              </p>
            </div>
          </div>

          {/* Sort Bar */}
          <div className="flex justify-end items-center mb-6">
            <div className="relative flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Sort by</span>
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-gray-300"
                onClick={() => setSortOpen(!sortOpen)}
              >
                {sortBy}
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {sortOpen && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${sortBy === option ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                      onClick={() => { setSortBy(option); setSortOpen(false); }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-6 lg:self-start">
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              {/* Filters Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                <button onClick={resetAll} className="text-sm text-blue-600 font-medium hover:text-blue-700">
                  Reset all
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">Price Range</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>MIN<br /><span className="font-semibold text-gray-700">${priceRange[0]}L</span></span>
                  <span className="text-right">MAX<br /><span className="font-semibold text-gray-700">${priceRange[1] >= 100 ? (priceRange[1] / 100) + 'CR' : priceRange[1] + 'L'}</span></span>
                </div>
              </div>

              {/* BHK Type */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">BHK Type</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {bhkOptions.map((bhk) => (
                    <button
                      key={bhk}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                        selectedBhk.includes(bhk)
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleFilter(bhk, selectedBhk, setSelectedBhk)}
                    >
                      {bhk}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">Status</span>
                </div>
                <div className="space-y-2">
                  {statusOptions.map((status) => (
                    <label key={status} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedStatus.includes(status)}
                        onChange={() => toggleFilter(status, selectedStatus, setSelectedStatus)}
                        className="w-4 h-4 text-blue-600 rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-600">{status}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Property Type */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">Property Type</span>
                </div>
                <div className="space-y-2">
                  {propertyTypeOptions.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedPropertyTypes.includes(type)}
                        onChange={() => toggleFilter(type, selectedPropertyTypes, setSelectedPropertyTypes)}
                        className="w-4 h-4 text-blue-600 rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-600">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* RERA Approved Info Box */}
            <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-2">
              <img src={verify} alt="Verified" className="w-4.5 h-4.5 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-blue-500 mb-0.5">RERA Approved Real Estate Marketplace</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Every listing is physically verified by our field agents to ensure 100% authenticity.
                </p>
              </div>
            </div>

          </aside>

          {/* Property Cards Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
              {properties.map((property, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop"
                      alt={property.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {property.isVerified && (
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-xs font-semibold text-blue-500 shadow-sm">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Verified
                        </span>
                      </div>
                    )}
                    {property.isNewLaunch && (index === 0 || index === 2) && (
                      <div className="absolute bottom-3 left-3">
                        <span className="px-3 py-1 bg-blue-400 text-white text-[10px] font-bold uppercase tracking-wider rounded">
                          New Launch
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-lg font-semibold text-gray-700">{property.price}</span>
                      <button className="text-gray-300 hover:text-red-400 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      </button>
                    </div>

                    <h3 className="text-sm font-semibold text-gray-800 mb-1">{property.name}</h3>

                    <div className="flex items-center gap-1 mb-3">
                      <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <span className="text-xs text-gray-400">{property.location}</span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <img src={bed} alt="Bed" className="w-4 h-4" />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={bath} alt="Bath" className="w-3.5 h-3.5" />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={square} alt="Square" className="w-3.5 h-3.5" />
                        <span>{property.sqft} sqft</span>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate(`/property/${index + 1}`)}
                      className="w-full py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Properties in Other Cities */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Properties in other cities</h2>
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
              View all
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {otherCityProperties.map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop"
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {property.isVerified && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-xs font-semibold text-blue-500 shadow-sm">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </span>
                    </div>
                  )}
                  {property.isNewLaunch && (
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 bg-blue-400 text-white text-[10px] font-bold uppercase tracking-wider rounded">
                        New Launch
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-lg font-semibold text-gray-700">{property.price}</span>
                    <button className="text-gray-300 hover:text-red-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </button>
                  </div>

                  <h3 className="text-sm font-semibold text-gray-800 mb-1">{property.name}</h3>

                  <div className="flex items-center gap-1 mb-3">
                    <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="text-xs text-gray-400">{property.location}</span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <img src={bed} alt="Bed" className="w-4 h-4" />
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={bath} alt="Bath" className="w-3.5 h-3.5" />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={square} alt="Square" className="w-3.5 h-3.5" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-1.5 mt-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}

            <span className="w-9 h-9 flex items-center justify-center text-gray-400 text-sm">...</span>

            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                currentPage === totalPages
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {totalPages}
            </button>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Close sort dropdown */}
      {sortOpen && (
        <div className="fixed inset-0 z-0" onClick={() => setSortOpen(false)} />
      )}
    </div>
  );
}

export default SearchProperty;
