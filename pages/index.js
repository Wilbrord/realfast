import { AppContext } from '@/settings/context/appContext';
import Head from 'next/head';
import { useState,useEffect,useContext } from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';
import Link from 'next/link';

export default function Home() {
  const [screenHeight,setScreenHeight] = useState(0);
  
  const {uid,setUid,email,setEmail} = useContext(AppContext);
  

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
      <main className={styles.container } styles={{height:`${screenHeight}px`}}>
        <div className={styles.wrapper}>   
              <div className={styles.searchBlock}>
                  <div className={styles.searchPanel}>
                    <input type='text' placeholder='eg. human resources manager'  className= {styles.search}/>
                    <button className={styles.searchBtn}>
                      Search
                      <GiMagnifyingGlass/>  
                    </button>
                  </div>
                  <p className={styles.message}>Your dream job is just a click away</p>
              </div>
              
          
            <div className={styles.otherActions}>
              <Link href='/jobs' className={styles.quickFinder}>Recent jobs</Link>
              <Link href='/jobs?by=salary' className={styles.quickFinder}>High paying jobs jobs</Link>
              <Link href='#' className={styles.quickFinder}>Closing soon</Link>
            </div>
           </div>
      </main>
    </>
  )
}

const styles = {
  container:'w-full h-screen flex flex-col justify-center items-center px-16',
  wrapper:'w-full md:w-[720px] flex flex-col gap-16',
  searchBlock:'w-full',
  searchPanel:'w-full flex flex-row gap-2',
  search:'w-full  border border-indigo-200 rounded-full py-5 px-3',
  searchBtn:'flex flex-row items-center bg-indigo-800 text-white px-3 py-5 rounded-full pointer-cursor',
  message:'text-center mt-2',
  otherActions:'flex flex-col md:flex-row gap-4 justify-center',
  quickFinder:'flex items-center justify-center md:w-[200px] h-[60px] md:h-[120px] bg-indigo-800  border shadow-xl rounded-xl text-lg text-indigo-200 ',
}