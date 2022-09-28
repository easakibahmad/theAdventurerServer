import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePersonConfined } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header = () => {
    return (
        <div className="top-section">
        <div>
          <FontAwesomeIcon className='icon-top' icon={faSquarePersonConfined}></FontAwesomeIcon>
        </div>
        <div>
          <h3>Modern Active Club</h3>
        </div>
      </div>
    );
};

export default Header;