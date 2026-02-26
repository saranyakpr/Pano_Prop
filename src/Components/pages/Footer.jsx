import logo from '../../assets/img/logo.png';

function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 sm:pt-16 sm:pb-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 mb-10 sm:mb-14">
          {/* Brand */}
          <div>
            {/* <img src={logo} alt="PANO PROP Logo" className="h-10 w-auto mb-4" /> */}
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              The most trusted real estate marketplace for finding your perfect home with verified listings and seamless simplicity.
            </p>
          </div>

          {/* Popular Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular areas</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Properties in Hyderabad
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Properties in Chennai
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Properties in Mumbai
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Properties in Bengaluru
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Properties in Kerala
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact support
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2.5 mb-5">
              <li className="text-sm text-gray-400">Support - 1800 PANOPROP</li>
              <li className="text-sm text-gray-400">Email: info@panoprop.com</li>
            </ul>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* Globe / Website */}
              <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.5 18.946A8.967 8.967 0 013 12c0-.29.016-.576.042-.858L7.5 15.6V16.5a1.5 1.5 0 001.5 1.5v1.946zm6.543-2.503A1.494 1.494 0 0016.5 17h-.5v-2.5a.5.5 0 00-.5-.5H10v-2h2a.5.5 0 00.5-.5V9.5H14a1.5 1.5 0 001.5-1.5V7.34A8.963 8.963 0 0121 12a8.96 8.96 0 01-2.957 6.443z" />
                </svg>
              </a>
              {/* Email */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
              {/* Phone */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-6" />

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500">
          &copy; 2026 Panoprop Real Estate Marketplace. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
