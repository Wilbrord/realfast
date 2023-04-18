import JobCard from "@/components/JobCard";
import { jobsData } from "@/data/Job-data";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function About_us (){

    // const router = useRouter();

    // setTimeout(() => {
    //     return router.push('/search')
    // },3000)

    // console.log(router.query);

    useEffect (() => {
        const rNums = [];

        for(let count = 0;count < 100;count ++){
            rNums.push(Math.round(Math.random() * 100000))
        }

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

