import Image from "next/image"; 
import ClientJob from "./components/clientJobs";



const JobListing = () => { 


  return (
    <div className="container"> 
      <h1 className="text-[3rem] py-4">Job Listing</h1>
      <div>
        <ClientJob /> 
      </div>
    </div>
  );
}

export default JobListing; 



