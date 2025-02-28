import { useState } from 'react';
import PageIllustration from './PageIllustration';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
        <PageIllustration />
      </div>
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-row justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img src="text_logo.png" className="h-9" alt="Cornell Alpha Fund" />
          </a>
          <div className="flex items-center block lg:hidden">
            <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded={isMenuOpen}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              )}
            </button>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:ml-auto">
              <li>
                <a href="/" className="block py-2.5 pr-4 pl-3 text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm focus:outline-none">Home</a>
              </li>
              <li>
                <a href="/team" className="block py-2.5 pr-4 pl-3 text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm focus:outline-none">Team</a>
              </li>
              <li>
                <a href="/alumni" className="block py-2.5 pr-4 pl-3 text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm focus:outline-none">Alumni</a>
              </li>
              <li>
                <a href="/recruitment" className="block py-2.5 pr-4 pl-3 text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm focus:outline-none">Recruitment</a>
              </li>
              <li>
                <a href="https://www.google.com/" className="block py-2.5 pr-4 pl-3 text-white bg-red-700 font-medium rounded-lg text-sm px-5 focus:outline-none">Apply</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}