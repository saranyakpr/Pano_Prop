import smartSearch from '../../assets/img/smartSearch.png';
import verifiedList from '../../assets/img/verifiedList.png';
import secureTransactions from '../../assets/img/secureTransactions.png';
import humanSupport from '../../assets/img/humanSupport.png';

function VerifiedHomes() {
  const features = [
    {
      title: 'Smart Property Search',
      description: 'Fast, accurate apartment discovery',
      icon: smartSearch,
    },
    {
      title: 'Verified Listings Only',
      description: 'Quality-checked before publishing',
      icon: verifiedList,
    },
    {
      title: 'Secure Transactions',
      description: 'Safe process & document checks',
      icon: secureTransactions,
    },
    {
      title: 'Human Support',
      description: 'Real experts, not bots',
      icon: humanSupport,
    },
  ];

  return (
    <section className="bg-[#f5f7fb] px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-14 sm:pb-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 sm:mb-10">
          A Smarter Way to Find Verified Homes
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="mb-5 flex justify-center">
                <img src={feature.icon} alt={feature.title} className="w-15 h-15" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 flex justify-center">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-400 flex justify-center text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VerifiedHomes;
