import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default SocialIcon;
