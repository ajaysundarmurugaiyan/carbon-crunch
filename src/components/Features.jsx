import React from 'react';
import { BiData } from 'react-icons/bi';
import { MdMonitorHeart } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb';
import { IoMdCube } from 'react-icons/io';
import { ImTarget } from 'react-icons/im';
import { RiInformationFill } from 'react-icons/ri';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50 h-full flex flex-col group">
    <div className="w-12 h-12 bg-[#EDFCF2] rounded-[10px] flex items-center justify-center mb-4 transition-all duration-300 ease-in-out group-hover:scale-110">
      <div className="transition-transform duration-300 ease-in-out group-hover:rotate-12">
        {icon}
      </div>
    </div>
    <h3 className="text-lg font-semibold mb-2 transition-all duration-300 ease-in-out group-hover:text-green-600 group-hover:translate-x-1 font-dm-sans">{title}</h3>
    <p className="text-gray-600 text-sm transition-all duration-300 ease-in-out opacity-90 group-hover:opacity-100 group-hover:translate-x-1 font-dm-sans flex-grow">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <BiData className="w-7 h-7 text-[#22C55E]" />,
      title: "Automated Data Collection",
      description: "Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting."
    },
    {
      icon: <MdMonitorHeart className="w-7 h-7 text-[#22C55E]" />,
      title: "Monitoring & Reporting",
      description: "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting."
    },
    {
      icon: <TbReportAnalytics className="w-7 h-7 text-[#22C55E]" />,
      title: "Real-time Analytics",
      description: "Get instant insights into your carbon footprint with real-time analytics and comprehensive reporting tools."
    },
    {
      icon: <IoMdCube className="w-7 h-7 text-[#22C55E]" />,
      title: "Simplified Certification Process",
      description: "Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance."
    },
    {
      icon: <RiInformationFill className="w-7 h-7 text-[#22C55E]" />,
      title: "AI-Driven Insights",
      description: "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making."
    },
    {
      icon: <ImTarget className="w-7 h-7 text-[#22C55E]" />,
      title: "Performance Tracking",
      description: "Track and visualize your sustainability performance over time with intuitive graphs and detailed analytics."
    },
  ];

  return (
    <div className="bg-gray-100 pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 transform transition-all duration-500 ease-in-out">
          <div className="flex justify-center mb-2">
            <div className="bg-white text-green-500 text-sm font-medium uppercase px-10 py-2 rounded-full animate-fade-in font-dm-sans">
              FEATURES
            </div>
          </div>
          <h2 className="text-3xl font-bold animate-slide-up font-aeonik">Why Carbon Crunch?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in h-full hover:z-10"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInScale 0.6s ease-out forwards',
              }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add keyframes for the fadeInScale animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInScale {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
document.head.appendChild(style);

export default Features; 