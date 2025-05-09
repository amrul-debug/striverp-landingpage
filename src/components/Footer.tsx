import React from 'react';
import { Link } from 'react-router-dom';
import { GamepadIcon, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <GamepadIcon className="h-6 w-6 text-primary-600" />
              <span className="font-bold text-lg">
                Strive <span className="text-primary-600">Roleplay</span>
              </span>
            </Link>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              The premier San Andreas Multiplayer community
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                Navigation
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/server-status" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-500">
                    Server Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                Resources
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a 
                    href="https://open.mp/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-500"
                  >
                    Open.MP
                  </a>
                </li>
                <li>
                  <a 
                    href="https://sa-mp.com/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-500"
                  >
                    SA-MP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 flex items-center justify-center">
            © {currentYear} Strive Roleplay. Made with 
            <Heart className="h-3 w-3 mx-1 text-primary-600 inline" /> 
            for the SA:MP community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;