import React, { useEffect, useRef } from 'react';

const StatCard = ({ number, text, className, bgColor = 'bg-gray-800', numberColor, direction = 'right' }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current.classList.remove('animate-slideIn');
          void cardRef.current.offsetWidth;
          cardRef.current.classList.add('animate-slideIn');
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${className} ${bgColor} p-3 sm:p-4 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-500 ease-in-out transform group hover:-translate-y-2 hover:shadow-xl z-10 animate-slideIn`}
      style={{ '--slide-direction': direction }}
    >
      <div className={`text-[1.8rem] sm:text-[2.2rem] md:text-[2.5rem] font-bold font-aeonik leading-tight ${numberColor} transition-all duration-300 ease-in-out group-hover:scale-110`}>
        {number}
      </div>
      <div className="text-base sm:text-lg max-w-full sm:max-w-[280px] font-dm-sans leading-tight sm:leading-snug transition-all duration-300 ease-in-out group-hover:translate-x-1">
        {text}
      </div>
    </div>
  );
};

const Statistics = () => {
  const earthRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          earthRef.current.classList.remove('animate-earthSlideIn');
          void earthRef.current.offsetWidth;
          earthRef.current.classList.add('animate-earthSlideIn');
        }
      },
      { threshold: 0.1 }
    );

    if (earthRef.current) {
      observer.observe(earthRef.current);
    }

    return () => {
      if (earthRef.current) {
        observer.unobserve(earthRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gray-100 pb-10 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Mobile View */}
        <div className="lg:hidden space-y-6 sm:space-y-8">
          {/* Earth Image Section */}
          <div ref={earthRef} className="relative w-full max-w-[250px] sm:max-w-[300px] mx-auto transition-transform duration-700 ease-in-out hover:scale-105 animate-earthSlideIn">
            <img 
              src="/earth.png" 
              alt="Earth"
              className="w-full h-full object-contain transition-all duration-500"
            />
          </div>

          {/* Statistics Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <StatCard
              number="3X"
              text="ESG High Performers Deliver A Higher Total Shareholder Return"
              className="w-full min-h-[120px] sm:min-h-[140px]"
              bgColor="bg-[#28B30E]"
              direction="left"
            />
            <StatCard
              number="98%"
              text="Of CEOs Agree Sustainability is Their Responsibility"
              className="w-full min-h-[120px] sm:min-h-[140px] text-white"
              bgColor="bg-[#3A3A3A]"
              direction="right"
            />
            <StatCard
              number="18%"
              text="Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050"
              className="w-full min-h-[120px] sm:min-h-[140px] text-white"
              bgColor="bg-[#2D2D2D]"
              direction="left"
            />
            <StatCard
              number="37%"
              text="Of The World's Largest Companies Have A Public Net Zero Target, Nearly All Are Off Track"
              className="w-full min-h-[120px] sm:min-h-[140px] text-green-500"
              bgColor="bg-[#FFFFFF]"
              direction="right"
            />
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Left Column - Earth Image */}
          <div ref={earthRef} className="relative w-3/6 transition-transform duration-700 ease-in-out hover:scale-105 animate-earthSlideIn">
            <img 
              src="/earth.png" 
              alt="Earth"
              className="w-full h-auto object-contain transition-all duration-500"
            />
          </div>

          {/* Statistics Cards - Positioned Absolutely */}
          <div className="absolute top-0 right-16 w-full h-full">
            <StatCard
              number="3X"
              text="ESG High Performers Deliver A Higher Total Shareholder Return"
              className="absolute top-[23%] right-[5%] w-[300px] h-[150px] z-50 text-black"
              bgColor="bg-[#28B30E]"
              direction="right"
            />
            
            <StatCard
              number="98%"
              text="Of CEOs Agree Sustainability is Their Responsibility"
              className="absolute top-[37%] right-[25%] w-[300px] z-40 text-white"
              bgColor="bg-[#3A3A3A]"
              direction="left"
            />
            
            <StatCard
              number="18%"
              text="Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050"
              className="absolute top-[49%] right-[10%] w-[300px] text-end text-white z-30"
              bgColor="bg-[#2D2D2D]"
              direction="right"
            />
            
            <StatCard
              number="37%"
              text="Of The World's Largest Companies Have A Public Net Zero Target, Nearly All Are Off Track"
              className="absolute bottom-[15%] xl:bottom-[20%] left-[40%] xl:left-[45%] w-[300px] text-green-500"
              bgColor="bg-[#FFFFFF]"
              direction="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Add keyframes for the animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes earthSlideIn {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-slideIn {
    animation: var(--slide-animation) 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  .animate-earthSlideIn {
    animation: earthSlideIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  [style*="--slide-direction: left"] {
    --slide-animation: slideInLeft;
  }

  [style*="--slide-direction: right"] {
    --slide-animation: slideInRight;
  }
`;
document.head.appendChild(style);

export default Statistics; 