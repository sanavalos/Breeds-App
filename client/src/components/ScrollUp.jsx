import React from "react";
import { useEffect, useState } from "react";
import { ScrollStyle } from "./Styles";

function ScrollUp() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollStyle>
      <div className="container">
        {showButton && (
          <button onClick={scrollToTop} className="goUp">
            TOP
          </button>
        )}
      </div>
    </ScrollStyle>
  );
}

export default ScrollUp;
