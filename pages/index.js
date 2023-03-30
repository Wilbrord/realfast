import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Get Your Dream Job</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/realfast_logo.PNG" />
      </Head>
      <main>
        <nav className={styles.navBar} >
          <ul className={styles.navSection}>
            <li className={styles.brandSection}>
              <span className={styles.brandName}>Real Fast</span>
              <Image width={38} height={38} src='/realfast_logo.PNG'/>
            </li>
            <li>
                <Link href='#' className={styles.navText}>Find Jobs</Link>
              </li>
          </ul>

          <ul className={styles.navSection}>
            <li className={styles.seperator}>
              <Link href='#' className={styles.navText}>Sing in</Link>
            </li>
            <li>
            <Link href='#' className={styles.navText}>Post a Job</Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  )
}

const styles = {
  navBar:'h-[60px] flex flex-row justify-between items-center px-3 border border-gray-200 shadow-md',
  navSection:'flex flex-row space-x-3 ',
  brandSection:'flex flex-row gap-2',
  brandName:'font-brand text-2xl text-purple-500',
  navText:'text-gray-700 hover:text-purple-600',
  seperator:'pr-3 border-r-2 border-gray-400'
}