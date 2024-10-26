import React from 'react';
import Title from "./Title"; 
import Lcard from "./latestJobsCard";
import { latestIcon } from "./menu";
import Tag from "./Tags";

function LatestJob() {

    return (
        <div className="container">
            <Title mainHeading="Latest jobs open"  subHeading="Show all jobs" />
            <div className="grid grid-cols-2 gap-10 pt-2 pb-2 container">
            {
            latestIcon.map((card, index) => (
                <Lcard 
                key={card.title} // Add a key for each element in the list
                title={card.title} 
                image={card.icon} // Corrected property name
                description={card.description} 
                tagTitle='Full-Time'
              />

          ))
        }
            </div>
            
        </div>
    );
}

export default LatestJob;
