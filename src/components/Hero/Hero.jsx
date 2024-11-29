import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import v1 from '../../assets/v1.mp4'; // Ensure you have the correct path to your video file

// Styled-components for the Hero section
const HeroSection = styled.div`
  position: relative;
  height: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  overflow: hidden;
  background-color: transparent; // Ensures no background color
`;

const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1900px;
    object-fit: cover; 
    pointer-events: none; 
    margin-top:-390px;
    margin-bottom:-180px;
  
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 15px;
`;

const Headline = styled.h1`
  font-size: 4rem;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subheadline = styled.p`
  font-size: 1.5rem;
  font-family: 'Lora', serif;
  margin-bottom: 30px;
  max-width: 800px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonPrimary = styled.a`
  background-color: #ff6600;
  color: #fff;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e55b00;
    scale:1.08;
    transition:0.5s;
    text-decoration:none;
    background-color:white;
    color:#e55b00;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 25px;
  }
`;

const ButtonSecondary = styled.a`
  background-color: transparent;
  color: #fff;
  padding: 15px 30px;
  border: 2px solid #fff;
  border-radius: 5px;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
     scale:1.08;
    transition:0.5s;
    text-decoration:none;
     color:#e55b00;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 25px;
  }
`;

// Hero Section Component
const Hero = () => {
  return (
    <HeroSection>
      <BackgroundVideo>
        <video
          src={v1}
          autoPlay
          muted
          loop
          playsInline
          title="Background Video"
          className='vedio'
        ></video>
      </BackgroundVideo>
      <HeroContent>
        <Headline>Unleash Your Inner Hero. <br></br>Elevate Your Fitness.</Headline>
        <Subheadline>
          Transform your body, mind, and lifestyle with personalized workout plans, real-time progress tracking, and expert guidance. Whether you’re a beginner or a seasoned athlete, we’ve got the tools to help you succeed.
        </Subheadline>
        <ButtonContainer>
          <ButtonPrimary href="/signup" className='button'>Get Started Today</ButtonPrimary>
          <ButtonSecondary href="/workouts" className='button'>Explore Workouts</ButtonSecondary>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
