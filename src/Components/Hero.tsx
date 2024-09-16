import React from 'react';
import CustomButton from './Button2'; // Import your custom button component
import Bg from '../bg/Bg'; // Import the custom background component
import Bg2 from '../bg/bg2';

const HeroSection: React.FC = () => {
  return (
    <div
      className="position-relative overflow-hidden text-light py-5"
      style={{
        backgroundColor: '#121212', // Dark background for contrast
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {/* Custom Background */}
      <Bg />
      <Bg2 />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(18, 18, 18, 0.6)', // Semi-transparent overlay
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="position-relative z-index-2 text-light"
        style={{
          zIndex: 2,
          animation: 'fadeIn 2s ease-in-out',
        }}
      >
        <div className="container py-5">
          <h1
            className="display-4 font-bold" // Bold heading
            style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              animation: 'slideInFromTop 1.5s ease-out',
              color: '#e0e0e0', // Light color for the heading
              fontFamily: 'Poppins, sans-serif', // Bolder, modern font
              letterSpacing: '0.05em', // Slight letter spacing for emphasis
            }}
          >
            Transform Your Brand's Online Presence
          </h1>

          <p
            className="lead font-semibold" // Semi-bold text
            style={{
              fontSize: '1.25rem',
              marginBottom: '2rem',
              color: '#b0b0b0', // Slightly muted color for the text
              fontFamily: 'Roboto, sans-serif', // Complementary font for body text
              lineHeight: '1.75', // Improved readability with increased line height
            }}
          >
            At Successor, we drive your business growth with cutting-edge social media strategies and targeted marketing campaigns. Let us turn your online presence into your greatest asset.
          </p>

          <div
            style={{
              marginTop: '2rem',
              animation: 'fadeIn 2s ease-in-out',
            }}
          >
            <CustomButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
