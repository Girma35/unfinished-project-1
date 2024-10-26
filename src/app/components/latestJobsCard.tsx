import Image from 'next/image';
import One from "../assets/images/pic.png";
import Tag from "./Tags";

const FeaturedJobCard = ({ title, description, image }) => { 
  return (
    <div className=" relative border-2 cursor-pointer hover:scale-110 hover:shadow-sm border-opacity-10 p-6 rounded-lg border-gray-500 mx-auto">
      <div className="flex items-center space-x-4">
        {/* Image */}
        <div className="w-[48px] h-[48px]">
          {image}
        </div>
        
        {/* Job Title and Tag */}
        <div className="flex flex-col gap-6">
       
          <h2 className="font-bold text-lg">{title}</h2>
          <h3>Nomad .Paris, France</h3>
          <div className="flex flex-row ">
          <Tag tagTitle='FullTime' />
          <Tag tagTitle='Marketing' />
          <Tag tagTitle='Design' />
          </div>
          
          {/* The Tag is now right below the title */}
        </div>
      </div>
      
      {/* Description */}
      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
};

export default FeaturedJobCard;
