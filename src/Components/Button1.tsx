import React from 'react';
import './SettingButton.css'; // Make sure to create a CSS file for styles

interface SettingButtonProps {
  onClick: () => void;
}

const SettingButton: React.FC<SettingButtonProps> = ({ onClick }) => {
  return (
    <button className="setting-btn" onClick={onClick}>
      <span className="bar bar1"></span>
      <span className="bar bar2"></span>
      <span className="bar bar1"></span>
    </button>
  );
};

export default SettingButton;
