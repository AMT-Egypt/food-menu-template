import React, { useEffect, useState, ReactNode } from "react";

interface SliderProps {
  children: ReactNode;
  autoplay?: boolean;
  autoplayInterval?: number;
  direction?: "ltr" | "rtl"; // Add direction prop
}

export function Slider({
  children,
  autoplay = false,
  autoplayInterval = 3000,
  direction = "ltr", // Default to 'ltr'
}: SliderProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
        );
      }, autoplayInterval);
      return () => clearInterval(intervalId);
    }
  }, [autoplay, autoplayInterval, children]);

  const handlePrev = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
    );
  };

  const handleNext = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <style>{`
      .slider-container {
        position: relative;
        width: 100%;
        overflow: hidden;
      }

      .slider-wrapper {
        width: 100%;
        overflow: hidden;
      }

      .slider-content {
        display: flex;
        transition: transform 0.5s ease-in-out;
        ${direction === "rtl" ? "flex-direction: row-reverse;" : ""}
      }

      .slider-slide {
        flex: 0 0 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .slider-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        z-index: 1;
      }

      .slider-button.prev {
        ${direction === "rtl" ? "right: 10px;" : "left: 10px;"}
      }

      .slider-button.next {
        ${direction === "rtl" ? "left: 10px;" : "right: 10px;"}
      }

      .slider-pagination {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
      }
      `}</style>
      <div className="slider-container">
        <button className="slider-button prev" onClick={handlePrev}>
          &lt;
        </button>
        <div className="slider-wrapper">
          <div
            className="slider-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {React.Children.map(children, (child, index) => (
              <div className="slider-slide" key={index}>
                {child}
              </div>
            ))}
          </div>
        </div>
        <button className="slider-button next" onClick={handleNext}>
          &gt;
        </button>
        <div className="slider-pagination">
          {React.Children.map(children, (_, index) => (
            <span
              key={index}
              className={`pagination-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
