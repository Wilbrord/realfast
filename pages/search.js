import Head from "next/head";
import JobCard from "@/components/JobCard";

export default function Search () {
    return (
        <>      
            <Head>
                <title>Search Results | Real Fast</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/realfast_logo.png" />
            </Head>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.searchResults}>
                        <JobCard/>
                    </div>
                    <div className={styles.filterPanel}>
                       
                    </div>
                </div>
            </main>
        </>
    )
}

const styles = {
    main:'py-8 px-16',
    container:'h-screen grid grid-cols-12 gap-3',
    searchResults:' col-span-9',
    filterPanel:' col-span-3',
}