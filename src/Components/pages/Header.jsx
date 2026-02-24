import { useState } from 'react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
                fill="#3B82F6"
                opacity="0.2"
              />
              <path
                d="M16 6L24 11V21L16 26L8 21V11L16 6Z"
                fill="#3B82F6"
                opacity="0.4"
              />
              <path
                d="M16 10L20 13V19L16 22L12 19V13L16 10Z"
                fill="#3B82F6"
              />
            </svg>
            <span className="text-lg font-bold text-gray-900 tracking-wide">
              PANO PROP
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
              Buy
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
              Rent
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
              News
            </a>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Post Property
            </a>
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sign in
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <nav className="flex flex-col px-4 py-3 space-y-3">
            <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
              Buy
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
              Rent
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
              News
            </a>
            <hr className="border-gray-200" />
            <a
              href="#"
              className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Post Property
            </a>
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-blue-600 text-center transition-colors"
            >
              Sign in
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
