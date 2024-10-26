import React from "react";
import Image from "next/image";

import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import Finance from '../assets/images/finance.png';
import Sales from '../assets/images/sales.png';
import Technology from '../assets/images/technology.png';
import Engineering from '../assets/images/engineering.png';
import Marketing from '../assets/images/marketing.png';
import Business from '../assets/images/business.png';

import One from '../assets/images/1.png';
import Two from '../assets/images/2.png';
import Four from '../assets/images/4.png';
import Five from '../assets/images/5.png';
import Six from '../assets/images/6.png';
import Eight from '../assets/images/8.png';



import Eleven from '../assets/images/11.png';
import Twelve from '../assets/images/12.png';
import Thirteen from '../assets/images/13.png';
import Fourteen from '../assets/images/14.png';
import Fifteen from '../assets/images/15.png';
import Sixteen from '../assets/images/16.png';
import Seventeen from '../assets/images/17.png';
import Eighteen from '../assets/images/18.png';




export const ABOUT = [
    { name: "Companies", link: "/about" },
    { name: "Pricing", link: "/about" },
    { name: "Advice", link: "/contact" },
    { name: "Privacy Policy", link: "/terms" },
];

export const RESOURCE = [
    { name: "Help Docs", link: "/terms" },
    { name: "Guide", link: "/" },
    { name: "Updates", link: "/" },
    { name: "Contact Us", link: "/contact" },
];

export const Icons = [
    { name: 'Facebook', icon: <FaFacebook />, link: "https://www.facebook.com/girma.w.darbeto" },
    { name: 'Twitter', icon: <FaTwitter />, link: "https://x.com/Girma880731631" },
    { name: 'LinkedIn', icon: <FaLinkedin />, link: "https://www.linkedin.com/in/girma-w-a16429263" },
    { name: 'GitHub', icon: <FaGithub />, link: "https://github.com/Girma35" },
];

export const jobIcon = [
    { name: "Finance", icon: <Image src={Finance} alt="Finance" width={48} height={48} />, jobs: "235 jobs available" },
    { name: "Sales", icon: <Image src={Sales} alt="Sales" width={48} height={48} />, jobs: "120 jobs available" },
    { name: "Technology", icon: <Image src={Technology} alt="Technology" width={48} height={48} />, jobs: "300 jobs available" },
    { name: "Engineering", icon: <Image src={Engineering} alt="Engineering" width={48} height={48} />, jobs: "150 jobs available" },
    { name: "Marketing", icon: <Image src={Marketing} alt="Marketing" width={48} height={48} />, jobs: "90 jobs available" },
    { name: "Business", icon: <Image src={Business} alt="Business" width={48} height={48} />, jobs: "100 jobs available" }, // Added Business
];


export const featuredIcon = [
    {
        title: "Email Marketing",
        icon: <Image src={One} alt="Email Marketing" width={48} height={48} />,
        description: "", // Set the description to an empty string
        tags: ["Full-Time", "Marketing", "Design"] // Added tags
    },
    {
        title: "Brand Designer",
        icon: <Image src={Two} alt="Brand Designer" width={48} height={48} />,
        description: "Pitch is looking for a Customer Manager to join the marketing team.",
        tags: ["Full-Time", "Marketing", "Design"] // Added tags
    },
    {
        title: "Visual Designer",
        icon: <Image src={Four} alt="Visual Designer" width={48} height={48} />,
        description: "Blinkist is looking for a Visual Designer to help the team design.",
        tags: ["Full-Time", "Marketing", "Design"] // Added tags
    },
    {
        title: "Product Designer",
        icon: <Image src={Five} alt="Product Designer" width={48} height={48} />,
        description: "ClassPass is looking for a Product Designer to help us.",
        tags: ["Full-Time", "Marketing", "Design"] // Added tags
    },
    {
        title: "Lead Engineer",
        icon: <Image src={Six} alt="Lead Engineer" width={48} height={48} />,
        description: "Canva is looking for a Lead Engineer to help develop new projects.",
        tags: ["Full-Time", "Marketing", "Design"] // Added tags
    },
    {
        title: "Data Analyst",
        icon: <Image src={Eight} alt="Data Analyst" width={48} height={48} />,
        description: "Twitter is looking for a Data Analyst to help the team design data solutions.",
        tags: ["Full-Time", "Marketing", "Design"] // Added tags
    },
];


export const latestIcon = [
    {
        title: "Social Media Assistant",
        icon: <Image src={Eleven} alt="Social Media Assistant" width={48} height={48} />,
        description: "",
        tags: ["Full-Time", "Marketing", "Design"] // Same tags
    },
    {
        title: "Social Media Assistant",
        icon: <Image src={Twelve} alt="Social Media Assistant" width={48} height={48} />,
        description: "",
        tags: ["Full-Time", "Marketing", "Design"] // Same tags
    },
    {
        title: "Brand Designer",
        icon: <Image src={Thirteen} alt="Brand Designer" width={48} height={48} />,
        description: "",
        tags: ["Full-Time", "Marketing", "Design"] // Same tags
    },
    {
        title: "Brand Designer",
        icon: <Image src={Fourteen} alt="Brand Designer" width={48} height={48} />,
        description: "",
        tags: ["Full-Time", "Marketing", "Design"] // Same tags
    },
    {
        title: "Interactive Developer",
        icon: <Image src={Fifteen} alt="Interactive Developer" width={48} height={48} />,
        description: "",
        tags: ["Full-Time", "Marketing", "Design"] // Same tags
    },
    {
        title: "Interactive Developer",
        icon: <Image src={Sixteen} alt="Interactive Developer" width={48} height={48} />,
        description: "",
        tags: ["Full-Time", "Marketing", "Design"] // Same tags
    },
    {
        title: "HR Manager",
        icon: <Image src={Seventeen} alt="HR Manager" width={48} height={48} />,
        description: "",
        tags: ["Full-Time", "Marketing", "Design"] // Same tags
    },
    {
        title: "HR Manager",
        icon: <Image src={Eighteen} alt="HR Manager" width={48} height={48} />,
        description: "",
        tags: ["Full-Time", "Marketing", "Design"] // Same tags
    },
];
