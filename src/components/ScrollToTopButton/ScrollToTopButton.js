import React, { useState, useEffect } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const onClickHandler = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const ScrollToTopButton = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const showScrollBtnHandler = () => {
      window.pageYOffset > 250
        ? setShowScrollBtn(true)
        : setShowScrollBtn(false);
    };
    window.addEventListener('scroll', showScrollBtnHandler);
    return () => {};
  }, []);

  return (
    showScrollBtn && (
      <IoIosArrowDropupCircle
        color="darkgray"
        size="3.5em"
        style={{
          position: 'fixed',
          bottom: '5%',
          right: '3%',
          zIndex: 100,
          cursor: 'pointer',
          opacity: '0.7',
        }}
        onClick={onClickHandler}
      />
    )
  );
};

export default ScrollToTopButton;
