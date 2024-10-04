import React from 'react';

interface SettingButtonProps {
  onClick: () => void;
}

const SettingButton: React.FC<SettingButtonProps> = ({ onClick }) => {
  return (
    <button
      className="setting-btn flex flex-col items-center justify-center"
      onClick={onClick}
      aria-label="Toggle Menu"
    >
      <span className="bar bg-white h-1 w-6 my-1"></span>
      <span className="bar bg-white h-1 w-6 my-1"></span>
      <span className="bar bg-white h-1 w-6 my-1"></span>
    </button>
  );
};

export default SettingButton;
