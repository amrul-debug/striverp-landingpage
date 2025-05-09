import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold text-neutral-900 dark:text-neutral-100">404</h1>
      <h2 className="text-2xl md:text-3xl font-medium mt-4 mb-6 text-neutral-700 dark:text-neutral-300">
        Page Not Found
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-lg mb-8">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button leftIcon={<Home className="h-4 w-4" />}>
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;