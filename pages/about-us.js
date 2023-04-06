import JobCard from "@/components/JobCard";
import { jobsData } from "@/data/Job-data";
import { useEffect } from "react";

export default function About_us (){
    useEffect (() => {
        const rNums = [];

        for(let count = 0;count < 100;count ++){
            rNums.push(Math.round(Math.random() * 100000))
        }

        console.log(rNums);
    },[]);
    return (
        <div> 
            {jobsData.map((job) => {
               return <JobCard key={job.id} title={job.title} description={job.description}>
                    <h1>Info block</h1>
                    <p>some information</p>
                </JobCard>
            })}





            {/* <JobCard title='remote react next js developer'  description='jobs'/>
            <JobCard title='Front end developer'  description='web developer'/> */}
        </div>
    )
}

