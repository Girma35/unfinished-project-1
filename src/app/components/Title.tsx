import React from 'react';
import Icon from '../assets/images/icon.png'; 
import Image from 'next/image';


interface Props {
    mainHeading: string;
    subHeading: string; 
}

const Title = ({ mainHeading, subHeading }: Props) => {
    return (
        <section >
            <div className="mx-auto flex px-3">
                <h2 className="font-clash-display font-semibold text-[48px] leadig-[110%] text-[#25324B]">{mainHeading}</h2>
            </div>
            <div className="flex flex-row justify-end ">
            <button className="bg-white text-black hover:bg-blue-600 duration-300   font-epilogue font-semibold text-[16px] text-center flex-none order-0 flex-grow-0 rounded mx-2 px-2 cursor-pointer hover:scale-110 hover:shadow-sm">
                {subHeading}
            </button>
            <Image
            src={Icon}
            alt=" icon"
            className="transition-transform duration-300 transform hover:scale-105"
            />
            </div>
       
        </section>
        
    );
};

export default Title;
