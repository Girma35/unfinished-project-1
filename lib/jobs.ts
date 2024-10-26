import prisma from "./prisma";

interface JobDataProps {
    jobData: {
        title: string;
        location: string;
        salary: number;  // Use number instead of int
        employmentType: string;
    };
}

export async function createJob({ jobData }: JobDataProps) {
    try {
        const job = await prisma.jobListing.create({
            data: jobData,
        });
        return job;
    } catch (error) {
        console.error("Error creating job:", error);
        throw new Error("Failed to create job"); 
    }
}
