import Vector from "../assets/images/Vector.png";
import Person from "../assets/images/pic.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';
//import { useRouter } from "next/navigation";


export default function Hero() {
//     const SearchForm = () => {
//         const router = useRouter();
    
//         const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//             e.preventDefault();
//             // You can add logic here to fetch the search term from the input if needed
//             router.push("/jobs"); // Programmatically navigate to the '/jobs' page
//         };
//     }

    return (
        <>
            <section className="py-5 container">
                <div className=" mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Text and Search Section */}
                    <div className="md:w-1/2">
                        <h1 className="text-5xl py-10">
                            Discover <br /> more than <br />
                            <span className="text-accessBlue">5000+ jobs</span>
                        </h1>
                        <Image
                            className="p-0 max-w-full"
                            src={Vector}
                            alt="vector"
                            height={50}
                            width={300}
                        />
                        <p className="text-gray-500 py-6">
                            A great platform for job seekers who are searching for<br />
                            new career heights and are passionate about startups.
                        </p>

                        <form className="relative flex items-center">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="search"
                                className="border border-gray-300 w-[75%] py-3 pl-12 pr-4 rounded-md shadow-sm focus:outline-none focus:border-accessBlue"
                                placeholder="Job title or keywords"
                            />
                            <button
                                type="submit"
                                className="bg-primary text-white py-2 px-2 rounded shadow-md ml-4 hover:bg-blue-600 transition-all"
                            >
                                Search my job
                            </button>
                        </form>
                    </div>

                    {/* Image Section (Hidden on Mobile) */}
                    <div className="hidden md:block md:ml-4">
                        <Image
                            src={Person}
                            alt="Confident person"
                            width={400}
                            height={500}
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
