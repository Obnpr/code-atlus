import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';
import './ScrollToTopMobile.css';

function scrollToTop() {
  const [isUserDeepScrolling, UserDeepReading] = useState(false); // Scroll-Up func
  useEffect(() => {
        window.addEventListener('scroll', userScrolling);
        return () => {
        window.removeEventListener('scroll', userScrolling);
        };
    }, []);

    const userScrolling = () => {
        if (window.pageYOffset > 1200) {
            UserDeepReading(true);
        } else {
            UserDeepReading(false);
        }
    };

  const scrollToTop = () => {
    window.scrollTo({
      top: 80,
      behavior: 'smooth'
    });
  };

  return (
    <main>

    </main>
  );
}

export default scrollToTop;