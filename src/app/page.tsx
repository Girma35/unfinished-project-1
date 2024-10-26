import Image from "next/image";
import "./globals.css";
import Hero from "./components/Hero";
import JobCategory from "./components/JobCategory";
import FeaturedJob from "./components/FeaturedJob";
import LatestJob from "./components/LatestJob";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <JobCategory /> 
        <FeaturedJob />
        <LatestJob />
      </main>
    </>
  );
}
