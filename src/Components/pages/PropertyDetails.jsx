import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import bed from '../../assets/img/bed.png';
import bath from '../../assets/img/bath.png';
import square from '../../assets/img/square.png';
import calendar from '../../assets/img/calendar.png';
import east from '../../assets/img/east.png';
import charging from '../../assets/img/charging.png';
import garden from '../../assets/img/garden.png';
import gym from '../../assets/img/gym.png';
import parking from '../../assets/img/parking.png';
import swim from '../../assets/img/swim.png';
import security from '../../assets/img/security.png';
import trustIcon from '../../assets/img/trust.png';

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [selectedBhk, setSelectedBhk] = useState('4 BHK');
  const [currentPage, setCurrentPage] = useState(1);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpTimer, setOtpTimer] = useState(29);
  const otpRefs = useRef([]);
  const totalPages = 8;

  useEffect(() => {
    if (showEnquiry || showOtp || showSuccess) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showEnquiry, showOtp, showSuccess]);

  useEffect(() => {
    if (showOtp && otpTimer > 0) {
      const interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showOtp, otpTimer]);

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleSendOtp = () => {
    setShowEnquiry(false);
    setShowOtp(true);
    setOtpTimer(29);
    setOtp(['', '', '', '', '', '']);
  };

  const handleVerifySubmit = () => {
    setShowOtp(false);
    setShowSuccess(true);
  };

  const property = {
    name: 'Skyline Residency - 3BHK',
    totalPrice: '$1,250,000',
    pricePerSqft: '$ 390 / sq.ft',
    location: 'Baskara West, Hyderabad',
    beds: 3,
    baths: 2,
    sqft: '1,850',
    configuration: '4BHK',
    builtUpArea: '3,200 sq.ft',
    status: 'Ready',
    facing: 'East',
    description:
      'Experience unrivaled luxury in this expansive 4BHK villa located in the heart of Whitefield\'s most sought-after gated community. This home features double-height ceilings, a private infinity pool, and a temperature-controlled wine cellar. Each bedroom comes with an en-suite marble bathroom and private balcony access.',
  };

  const images = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
  ];

  const amenities = [
    { icon: swim, name: 'Swimming Pool' },
    { icon: gym, name: 'Modern Gym' },
    { icon: parking, name: '3 Car Parking' },
    { icon: security, name: '24/7 Security' },
    { icon: garden, name: 'Private Garden' },
    { icon: charging, name: 'EV Charging' },
  ];

  const documents = [
    { name: 'RERA Certificate' },
    { name: 'Approved Floor Plan' },
    { name: 'OC & CC Documents' },
    { name: 'Property Tax Receipt' },
  ];

  const nearbyPlaces = [
    { label: 'METRO', distance: '2.4 KM' },
    { label: 'HOSPITAL', distance: '1.0 KM' },
    { label: 'SCHOOL', distance: '0.5 KM' },
    { label: 'MALL', distance: '4.0 KM' },
  ];

  const similarProperties = [
    { price: '$1.2L', name: 'Skyline Residency -3BHK', location: 'Baskara West, Hyderabad', beds: 3, baths: 2, sqft: '1,850', isVerified: true, isNewLaunch: true },
    { price: '$1.2L', name: 'Skyline Residency -3BHK', location: 'Baskara West, Hyderabad', beds: 3, baths: 2, sqft: '1,850', isVerified: true, isNewLaunch: true },
    { price: '$1.2L', name: 'Skyline Residency -3BHK', location: 'Baskara West, Hyderabad', beds: 3, baths: 2, sqft: '1,850', isVerified: true, isNewLaunch: true },
    { price: '$1.2L', name: 'Skyline Residency -3BHK', location: 'Baskara West, Hyderabad', beds: 3, baths: 2, sqft: '1,850', isVerified: true, isNewLaunch: true },
  ];

  const prevImage = () => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-2">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span className="mx-1.5">&gt;</span>
          <span className="hover:text-blue-600 cursor-pointer">Properties in Hyderabad</span>
          <span className="mx-1.5">&gt;</span>
          <span className="hover:text-blue-600 cursor-pointer">Apartment for Sale</span>
          <span className="mx-1.5">&gt;</span>
          <span className="text-gray-700">Skyline Residency</span>
        </nav>

        {/* Title Bar */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{property.name}</h1>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                RERA Verified
              </span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>{property.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors">
              Save
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
            <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors">
              Share
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Two-Column Layout: Content Left + Sticky Price Right */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT COLUMN - All content */}
          <div className="flex-1 min-w-0">

            {/* Image Gallery with overlaid thumbnails */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <div className="h-72 sm:h-96 md:h-[28rem]">
                <img
                  src={images[selectedImage]}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnails overlaid at bottom-left */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden cursor-pointer border-2 ${selectedImage === index ? 'border-blue-500' : 'border-white/60'}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={img} alt={`Thumb ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              {/* Prev/Next arrows */}
              <button
                onClick={prevImage}
                className="absolute bottom-4 left-1/2 -translate-x-6 sm:left-auto sm:translate-x-0 sm:right-14 sm:bottom-4 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute bottom-4 left-1/2 translate-x-1 sm:left-auto sm:translate-x-0 sm:right-4 sm:bottom-4 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { icon: (
                  <img src={bed} alt="Bed Icon" className="w-6 h-6 text-gray-600" />
                ), value: property.configuration, label: 'CONFIGURATION' },
                { icon: (
                  <img src={square} alt="Square Icon" className="w-6 h-6 text-gray-600" />
                ), value: property.builtUpArea, label: 'BUILT UP AREA' },
                { icon: (
                  <img src={calendar} alt="Calendar Icon" className="w-6 h-6 text-gray-600" />
                ), value: property.status, label: 'STATUS' },
                { icon: (
                  <img src={east} alt="east Icon" className="w-6 h-6 text-gray-600" />
                ), value: property.facing, label: 'FACING' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center border border-gray-100 rounded-xl py-5 px-3">
                  {item.icon}
                  <span className="text-sm font-bold text-gray-900 mt-2">{item.value}</span>
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider mt-0.5">{item.label}</span>
                </div>
              ))}
            </div>

            {/* About this property */}
            <div className="mb-10">
              <h2 className="text-lg font-bold text-gray-900 mb-3">About this property</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {showFullDesc ? property.description : property.description.slice(0, 250) + '...'}
              </p>
              <button
                onClick={() => setShowFullDesc(!showFullDesc)}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 mt-2 flex items-center gap-1"
              >
                {showFullDesc ? 'Show less' : 'Read more'}
                <svg className={`w-3.5 h-3.5 transition-transform ${showFullDesc ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Amenities */}
            <div className="mb-10">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <img src={amenity.icon} alt={amenity.name} className="w-5 h-5" />
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust & Documents */}
            <div className="mb-10">
              <div className="bg-blue-100 border border-blue-100 rounded-2xl p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <img src={trustIcon} alt="Trust Icon" className="w-5 h-5" />
                  <h2 className="text-base font-semibold text-gray-900">Trust & Documents</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-100">
                      <div className="flex items-center gap-2.5">
                        <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-700">{doc.name}</span>
                      </div>
                      <button className="text-xs font-medium text-blue-600 hover:text-blue-500 cursor-pointer">View</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location & Neighborhood */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Location & Neighborhood</h2>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">Open in Maps</a>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-100 h-64 sm:h-80 mb-5 bg-gray-100">
                <iframe
                  title="Property Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31601584882!2d78.26740744921873!3d17.406498945498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {nearbyPlaces.map((place, index) => (
                  <div key={index} className="flex flex-col items-center text-center border border-gray-100 rounded-xl py-4 px-3">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{place.label}</span>
                    <span className="text-base font-bold text-gray-900 mt-1">{place.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plan */}
            <div className="mb-10">
              <h2 className="text-lg font-bold text-gray-900 mb-1">Floor Plan</h2>
              <p className="text-sm text-gray-500 mb-4">Layout and room dimensions</p>

              <div className="flex gap-0 mb-4">
                {['3 BHK', '4 BHK'].map((bhk) => (
                  <button
                    key={bhk}
                    onClick={() => setSelectedBhk(bhk)}
                    className={`px-6 py-2 text-sm font-medium transition-colors ${
                      selectedBhk === bhk
                        ? 'bg-blue-600 text-white rounded-lg'
                        : 'bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200'
                    }`}
                  >
                    {bhk}
                  </button>
                ))}
              </div>

              <div className="border-b border-gray-200 mb-4" />

              <p className="text-sm text-gray-600 mb-4">Full Area : <span className="font-semibold">1960 sq.ft</span></p>

              <div className="relative rounded-2xl overflow-hidden bg-gray-900 h-72 sm:h-96">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop"
                  alt="Floor Plan"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-4 right-4 flex flex-col gap-1">
                  <button className="w-9 h-9 bg-gray-800/80 text-white rounded-md flex items-center justify-center hover:bg-gray-700 text-lg font-light">+</button>
                  <button className="w-9 h-9 bg-gray-800/80 text-white rounded-md flex items-center justify-center hover:bg-gray-700 text-lg font-light">−</button>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN - Sticky Price Card */}
          <div className="w-full lg:w-80 shrink-0 lg:sticky lg:top-6 lg:self-start">
            <div className="border border-gray-100 rounded-2xl p-5">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Total Price</span>
              <div className="text-2xl font-bold text-gray-900 mt-1">{property.totalPrice}</div>
              <div className="text-sm text-gray-500 mb-4">{property.pricePerSqft}</div>

              <div className="flex items-center gap-4 text-xs text-gray-500 mb-5">
                <div className="flex items-center gap-1">
                  <img src={bed} alt="Bed" className="w-4 h-4" />
                  <span>{property.beds} Beds</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={bath} alt="Bath" className="w-3.5 h-3.5" />
                  <span>{property.baths} Baths</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={square} alt="Sqft" className="w-3.5 h-3.5" />
                  <span>{property.sqft} sqft</span>
                </div>
              </div>

              <button
                onClick={() => setShowEnquiry(true)}
                className="w-full py-3 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 mb-6 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Get Callback
              </button>

              <h4 className="text-sm font-semibold text-gray-900 mb-3">Request More details</h4>
              <div className="space-y-2.5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-400 placeholder-gray-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-400 placeholder-gray-400"
                />
                <textarea
                  placeholder="I'm interested in this villa..."
                  rows={3}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-400 placeholder-gray-400 resize-none"
                />
                <button className="w-full py-2.5 bg-blue-800 text-white text-sm cursor-pointer font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Enquire for Details
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Similar Properties Nearby - Full Width */}
        <div className="mt-10 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Similar Properties Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {similarProperties.map((prop, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop"
                    alt={prop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {prop.isVerified && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-xs font-semibold text-blue-500 shadow-sm">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </span>
                    </div>
                  )}
                  {prop.isNewLaunch && (
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 bg-blue-400 text-white text-[10px] font-bold uppercase tracking-wider rounded">
                        New Launch
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-lg font-semibold text-gray-700">{prop.price}</span>
                    <button className="text-gray-300 hover:text-red-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </button>
                  </div>

                  <h3 className="text-sm font-semibold text-gray-800 mb-1">{prop.name}</h3>

                  <div className="flex items-center gap-1 mb-3">
                    <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="text-xs text-gray-400">{prop.location}</span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <img src={bed} alt="Bed" className="w-4 h-4" />
                      <span>{prop.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={bath} alt="Bath" className="w-3.5 h-3.5" />
                      <span>{prop.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={square} alt="Square" className="w-3.5 h-3.5" />
                      <span>{prop.sqft} sqft</span>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate(`/property/${index + 10}`)}
                    className="w-full py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1.5 mb-4">
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

      {/* Enquiry Modal */}
      {showEnquiry && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowEnquiry(false)}>
            <div className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header Image */}
              <h3 className="text-lg font-bold text-gray-900 px-6 pt-6 pb-3">
                Enquire about {property.name}?
              </h3>
              <div className="px-6">
                <div className="relative rounded-xl overflow-hidden h-44 mb-4">
                  <img
                    src={images[0]}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Thumbnails on image */}
                  <div className="absolute bottom-3 left-3 flex gap-1.5">
                    {images.slice(0, 4).map((img, index) => (
                      <div key={index} className="w-14 h-10 rounded-md overflow-hidden border-2 border-white/70">
                        <img src={img} alt={`Thumb ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Form */}
              <div className="px-6 pb-6 space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-400 placeholder-gray-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-400 placeholder-gray-400"
                />
                <textarea
                  placeholder="I'm interested in this villa..."
                  rows={2}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-400 placeholder-gray-400 resize-none"
                />
                <button onClick={handleSendOtp} className="w-full py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors cursor-pointer">
                  Send OTP
                </button>
                <p className="text-xs text-gray-500 text-center">
                  By enquiring you accept our <span className="text-gray-700 font-medium">Terms of use</span> & <span className="text-gray-700 font-medium">Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* OTP Verification Modal */}
      {showOtp && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowOtp(false)}>
            <div className="bg-white rounded-2xl w-full max-w-md shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Verify your phone number</h3>
                <button onClick={() => setShowOtp(false)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none cursor-pointer">&times;</button>
              </div>
              <hr className="border-gray-200 mb-5" />
              <p className="text-sm text-gray-600 text-center mb-5">
                We've sent a 6 - digit OTP to <span className="font-semibold text-gray-900">+91 XXXXXXX1721</span>
              </p>
              <div className="flex justify-center gap-3 mb-5">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="w-11 h-12 text-center text-lg font-semibold text-gray-700 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                  />
                ))}
              </div>
              <p className="text-sm text-center mb-5">
                <span className="text-blue-600 font-semibold cursor-pointer">Resend OTP</span>{' '}
                <span className="text-gray-500">in {otpTimer}s</span>
              </p>
              <button onClick={handleVerifySubmit} className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors cursor-pointer">
                Verify & Submit enquiry
              </button>
            </div>
          </div>
        </>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowSuccess(false)}>
            <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl p-8 text-center" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-end mb-2">
                <button onClick={() => setShowSuccess(false)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none cursor-pointer">&times;</button>
              </div>
              <div className="flex justify-center mb-5">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enquiry Submitted successfully</h3>
              <p className="text-sm text-gray-500 mb-4">Our team or the seller will contact you shortly.</p>
              <p className="text-sm text-gray-500 mb-6">
                Reference ID: <span className="text-blue-600 font-semibold">PNP-23941</span>
              </p>
              <button onClick={() => setShowSuccess(false)} className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                Continue Browsing
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PropertyDetails;
