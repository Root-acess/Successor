import React from 'react';
import './CustomButton.css'; // Ensure you have this CSS file

const CustomButton: React.FC = () => {
  return (
    <button className="button">
      <div className="text">
        Learn More
      </div>
    </button>
  );
};

export default CustomButton;
