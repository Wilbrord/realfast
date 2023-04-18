import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState,useEffect } from "react";


export default function PageNotFound () {
    const [screenHeight,setScreenHeight] = useState (0);


    useEffect(() => {
      setScreenHeight(window.innerHeight - 60);
    },[])
    return (
        <>
          <Head>
            <title>Get Your Dream Job | Real Fast</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/realfast_logo.png" />
        </Head>
        <main className={styles.container} style={{height:`${screenHeight}px`}}>
            <Image width={400} height={400} src='/images/broken_plug.jpg'/>
            <h3 className={styles.message}>Sorry, the page you requested for does not exist</h3>
            <p className={styles.action}>Return to <Link className={styles.link} href='/about-us?keyword=react&jobtype=fulltime'>About_us</Link></p>
        </main>
        </>
    )
}

const styles = {
    container:'w-full h-screen flex flex-col justify-center items-center px-16',
    message:'text-lg my-3',
    action:'text-md',
    link:'text-indigo-600',
}