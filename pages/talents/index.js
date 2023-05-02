import Head from "next/head";
import { useEffect,useState,useContext } from "react";
import { useSession } from "next-auth/react";


export default function Dashboard () {
    const [screenHeight,setScreenHeight] = useState (0);
    const { deta:session } = useSession()
    
    useEffect(() => {
      setScreenHeight(window.innerHeight - 60);
    },[]);


    return (
        <>
         <Head>
            <title>Dashboard | Talents</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/realfast_logo.png" />
        </Head>
        <main className={styles.container } styles={{minheight:`${screenHeight}px`}}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>You are Signed in as {session?.user.email} </h2>

           
        </div>
        </main>
        </>
    )
}

const styles = {
    container:'w-full h-screen flex flex-col justify-center items-center px-16',
    wrapper:'w-full md:w-[720px] py-8',
    title:'text-lg text-center mb-4',
    inputeBlockRow:'w-full flex flex-col md:flex-row md:gap-3 md:mb-4',
    inputeBlock:'w-full mb-4',
    inputeBlockMain:'w-full mb-4',
    label:'text-gray-500 mb-2',
    inputeField:'w-full block border border-gray-200 py-5 px-4 rounded-full text-gray-500',
    submitBtn:'w-full bg-indigo-800 py-5 px-4 rounded-full text-lg text-white',

}