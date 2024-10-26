import React from 'react';
import Title from "./Title";
import Fcard from "./featuredJobCard";
import { featuredIcon } from "./menu"; // Corrected import statement

const FeaturedJob = () => {
  return (
    <div className="container pt-4 pb-12">
      <Title mainHeading="Featured Jobs" subHeading='Show All Jobs' />
      <div className="mx-auto w-[80%] grid grid-cols-1 lg:grid-cols-3 gap-12 pt-2">
        {
          featuredIcon.map((card, index) => (
            <Fcard 
              key={card.title} // Add a key for each element in the list
              title={card.title} 
              image={card.icon} // Corrected property name
              description={card.description} 
              tagTitle='Full-Time'
            />
          ))
        }

        {/* Example of an additional featured job card */}
      
      </div>
    </div>
  );
}

export default FeaturedJob;
