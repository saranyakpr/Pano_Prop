import hiTechCity from '../../assets/img/hiTechCity.png';

function TrendingLocalities() {
  const localities = [
    {
      name: 'HiTech City',
      city: 'Hyderabad',
      properties: '1,240+',
      growth: '12%',
    },
    {
      name: 'HiTech City',
      city: 'Hyderabad',
      properties: '1,240+',
      growth: '12%',
    },
    {
      name: 'HiTech City',
      city: 'Hyderabad',
      properties: '1,240+',
      growth: '12%',
    },
    {
      name: 'HiTech City',
      city: 'Hyderabad',
      properties: '1,240+',
      growth: '12%',
    },
  ];

  return (
    <section className="bg-[#f5f7fb] px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-14 sm:pb-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Row */}
        <div className="flex items-start sm:items-center justify-between mb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Trending Localities
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
          Highest growth regions based on buyer interest this month.
        </p>

        {/* Locality Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {localities.map((locality, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image */}
              <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden mb-3">
                <img
                  src={hiTechCity}
                  alt={locality.name}
                  className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Text on Image */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-base">
                    {locality.name}
                  </h3>
                  <p className="text-white/80 text-sm">{locality.city}</p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex items-center justify-between px-1">
                <span className="text-sm text-gray-500">
                  {locality.properties} Properties
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  {locality.growth} growth
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingLocalities;
