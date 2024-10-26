export async function getServerSideProps() {
    const prisma = new PrismaClient();
    const jobs = await prisma.job.findMany();
    return {
      props: { jobs },
    };
  }
  
  export default function JobsPage({ jobs }) {
    return (
      <div>
        <h1>Available Jobs</h1>
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>{job.title}</li>
          ))}
        </ul>
      </div>
    );
  }  