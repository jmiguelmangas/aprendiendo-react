import React from 'react';
import PropTypes from 'prop-types';

import './NetflixCTA.css';

/**
 * Renders a Netflix-style call-to-action (CTA) section.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the movie or show.
 * @param {string} props.description - A brief description of the movie or show.
 * @param {string} props.imageUrl - The URL of the background image for the CTA section.
 * @returns {JSX.Element} - The rendered component.
 */
const NetflixCTA = ({ title, description, imageUrl }) => {
  return (
    <div className="netflix-cta" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <button className="watch-button">Watch Now</button>
      </div>
    </div>
  );
};

NetflixCTA.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default NetflixCTA;

export function NetflixCTAComponent() {
  return (
    <div className="App">
      <NetflixCTA
        title="Stranger Things"
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        imageUrl="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQTpFvxRas3SDxRes8ilrLNYrCirAQlx2N4zeK3l0K1W5i7lXNrSIROWXi-KiuO3HP6lAq4l4PK1cs5njktqWKQsDVzyJ31U2OwuNt3ntIcJjudt7fAdbgPxURS_Fe9OCTYOYbS9fr_f9ucWC2T7ox9pcrb8.jpg"
      />
    </div>
  );
}

