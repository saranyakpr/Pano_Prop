import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <img src={logo} alt="PANO PROP Logo" className="h-10 w-auto" />

          {/* Center: Nav links on home, Search bar on other routes */}
          {isHome ? (
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
          ) : (
            <div className="hidden md:flex flex-1 max-w-xl mx-4">
              <div className="flex items-center w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search locality, project or builder"
                  className="flex-1 ml-2.5 text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
                />
              </div>
            </div>
          )}

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
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
          <div className="flex flex-col px-4 py-3 space-y-3">
            {isHome ? (
              <>
                <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Buy</a>
                <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Rent</a>
                <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
                <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">News</a>
              </>
            ) : (
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search locality, project or builder"
                  className="flex-1 ml-2.5 text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
                />
              </div>
            )}
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
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
