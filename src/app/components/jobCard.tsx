import React from "react";
import Icon from '../assets/images/icon.png'; 
import Image from 'next/image';

interface JobProps {
  title: string;
  icon: JSX.Element;
  jobs: JSX.Element | JSX.Element[];
}

const Jobs: React.FC<JobProps> = ({ title, icon, jobs }) => {
  return (
    <div className="border-2 border-solid flex flex-col items-start p-4 md:p-6 lg:p-8 gap-4 bg-white order-0 flex-none grow-0 cursor-pointer hover:scale-105 hover:shadow-md transition-transform duration-200">
      {icon} {/* Icon is rendered above the title */}
      <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">{title}</h3>
      <div className="w-full">
        {Array.isArray(jobs) ? (
          jobs.map((job, index) => (
            <p key={index} className="text-sm md:text-base lg:text-lg">
              {job}
            </p>
          )) // Render jobs if it's an array
        ) : (
          <p className="text-sm md:text-base lg:text-lg">
            {jobs} 
            <Image
              src={Icon}
              alt="arrow icon"
              width={40}
              height={40}
              className="inline p-2"
            />
          </p> // Render single job if it's not an array
        )}
      </div>
    </div>
  );
};

export default Jobs;
