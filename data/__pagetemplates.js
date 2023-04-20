import Head from "next/head";
import { useRouter } from "next/router";


export default function ProfileUpdate () {
    const [screenHeight,setScreenHeight] = useState (0);

    useEffect(() => {
      setScreenHeight(window.innerHeight - 60);
    },[])

    return (
        <>
         <Head>
            <title>Page title | Real Fast</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/realfast_logo.png" />
        </Head>
        <main className={styles.container } styles={{height:`${screenHeight}px`}}>

        </main>
        </>
    )
}

const styles = {
    container:'w-full h-screen flex flex-col justify-center items-center px-16',

}