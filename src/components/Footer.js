import React, { useState } from 'react';

function Footer(props) {
  const [isVisible, setIsVisible] = useState(true);

  const currentDate = new Date().toLocaleDateString();

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  };

  let content = isVisible ? (
    <div className="footer" onClick={handleClick}>
      <div className="date">
        <p>Current Date: {currentDate}</p>
      </div>
    </div>
  ) : null;

  return content;
}

export default Footer;
