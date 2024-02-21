import React from 'react';
import { Button } from '../ui/button';

interface ButtonProps {
  label: string;
}

const DetailsButton: React.FC<ButtonProps> = ({ label}) => {
  return (
    <Button
      className="px-4 py-2 text-white rounded-full bg-gradient-to-r from-blue-700 to-blue-900 hover:bg-blue-700"
    >
      <span className='text-xs font-medium md:text-sm lg:text-base xl:text-lg'>{label}</span>
    </Button>
  );
};

export default DetailsButton;
