import React from 'react';
import Link from "next/link";

const SocialIcon = ({ Icons }) => {
  return (
    <div className="container">
      {Icons.map((social) => (
        <a
          key={social.name}
          href={social.link} // Use the link property for the href
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security best practice
          className="p-2 cursor-pointer inline-flex items-center rounded-full bg-primary mx-1.5 hover:text-primary  text-xl duration-300"
        >
          {social.icon}
        </a> // Ensure to close the <a> tag here
      ))}
    </div>
  );
};

export default SocialIcon;
