import React from 'react';
import Title from './Title';
import Card from './JobCard'; // Use consistent casing for component names
import { jobIcon } from './menu';

const JobCategory: React.FC = () => {
  return (
    <main className="container flex flex-col bg-white grow-0 flex-none order-2 gap-4">
      <div>
        <Title mainHeading="Explore by Category" subHeading="Show All Jobs" />
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-3 gap-8 pb-4  mt-[3rem] items-center">
        {jobIcon.map((job) => (
          <Card
            key={job.name}
            title={job.name}
            icon={job.icon}
            jobs={job.jobs}
            className="w-[calc(33.333%-16px)]" 
          />
        ))}
      </div>
    </main>
  );
};

export default JobCategory;
