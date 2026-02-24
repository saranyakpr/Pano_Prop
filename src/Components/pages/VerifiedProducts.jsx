import bed from '../../assets/img/bed.png'
import bath from '../../assets/img/bath.png'
import square from '../../assets/img/square.png'

function VerifiedProducts() {
  const products = [
    {
      price: '$1.2L',
      name: 'Skyline Residency -3BHK',
      location: 'Baskara West, Hyderabad',
      beds: 3,
      baths: 2,
      sqft: '1,850',
      isNewLaunch: true,
    },
    {
      price: '$1.2L',
      name: 'Skyline Residency -3BHK',
      location: 'Baskara West, Hyderabad',
      beds: 3,
      baths: 2,
      sqft: '1,850',
      isNewLaunch: false,
    },
    {
      price: '$1.2L',
      name: 'Skyline Residency -3BHK',
      location: 'Baskara West, Hyderabad',
      beds: 3,
      baths: 2,
      sqft: '1,850',
      isNewLaunch: false,
    },
    {
      price: '$1.2L',
      name: 'Skyline Residency -3BHK',
      location: 'Baskara West, Hyderabad',
      beds: 3,
      baths: 2,
      sqft: '1,850',
      isNewLaunch: true,
    },
  ];

  return (
    <section className="bg-[#f5f7fb] px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-14 sm:pb-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Row */}
        <div className="flex items-start sm:items-center justify-between mb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Featured Verified Products
          </h2>
          <a
            href="#"
            className="text-md font-semibold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
          >
            View all
          </a>
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-10">
          Handpicked homes with 100% verified documentation.
        </p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Verified Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-xs font-semibold text-blue-500 shadow-sm">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verified
                  </span>
                </div>

                {/* New Launch Tag */}
                {product.isNewLaunch && (
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 bg-blue-400 text-white text-[10px] font-bold uppercase tracking-wider rounded">
                      New Launch
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Price + Wishlist */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-lg font-semibold text-gray-700">
                    {product.price}
                  </span>
                  <button className="text-gray-300 hover:text-red-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                </div>

                {/* Name */}
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1 mb-3">
                  <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-xs text-gray-400">{product.location}</span>
                </div>

                {/* Divider */}
                <hr className="border-gray-100 mb-3" />

                {/* Amenities Row */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  {/* Beds */}
                  <div className="flex items-center gap-1">
                    {/* <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 17V7h20v10M2 17h20M6 7V4h12v3M6 11h12" />
                    </svg> */}
                    <img src={bed} alt="Bed" className="w-4 h-4" />
                    <span>{product.beds} Beds</span>
                  </div>

                  {/* Baths */}
                  <div className="flex items-center gap-1">
                    {/* <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m0 4h12a1 1 0 011 1v4a5 5 0 01-5 5H8a5 5 0 01-5-5V8a1 1 0 011-1h4zm0 0V3a2 2 0 012-2h0a2 2 0 012 2v4" />
                    </svg> */}
                    <img src={bath} alt="Bath" className="w-3.5 h-3.5" />
                    <span>{product.baths} Baths</span>
                  </div>

                  {/* Sqft */}
                  <div className="flex items-center gap-1">
                    {/* <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg> */}
                    <img src={square} alt="Square" className="w-3.5 h-3.5" />
                    <span>{product.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VerifiedProducts;
