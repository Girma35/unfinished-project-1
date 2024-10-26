import Image from 'next/image';
import One from "../assets/images/pic.png"; // This image import may be redundant if not used
import Tag from "./Tags";

const FeaturedJobCard = ({ title, description, image, tagTitle }) => { 
  return (
    <div className="relative border-2 cursor-pointer hover:scale-105 hover:shadow-md border-opacity-10 p-4 sm:p-6 rounded-lg border-gray-500 transition-transform duration-200">
      <div className="flex items-center space-x-4">
        {/* Image */}
        <div className="w-[48px] h-[48px]">
          {image}
        </div>
        
        {/* Job Title and Tag */}
        <div className="flex flex-col gap-2"> {/* Adjusted gap for better spacing */}
          <Tag tagTitle={tagTitle} />
          <h2 className="font-bold text-lg md:text-xl">{title}</h2> {/* Responsive text size */}
        </div>
      </div>
      
      {/* Description */}
      <p className="mt-2 text-gray-600 text-sm md:text-base">{description}</p> {/* Responsive text size */}
    </div>
  );
};

export default FeaturedJobCard;
