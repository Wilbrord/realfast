 import Link from "next/link"
 import Image from "next/image"
export default function JobCard () {
   
    return(
        <div className={styles.card}>
            <div className={styles.head}>
                <div className={styles.titleBlock}>
                    <h3 className={styles.jobTitle}>Javascript/React Developer</h3>
                    <p className={styles.locations}>Abuja</p>
                </div>

                <div className={styles.companyBlock}>
                    <Image src="/realfast_logo.png" width={36} height={36} alt='company logo'/>
                    <p className={styles.companyName}>Meta Soft Corporation</p>
                </div>
            </div>

                <div className={styles.body}>
                <p className={styles.discription}>We Boost Your Skills and Profile and Provide You With Personalised Career Guidance. Search or Get Recommendations For Jobs That Match What You Are Looking For. Upload Your CV Today. Jump-Start Your Career. Latest Jobs in Nigeria. Hire Qualified Candidates.</p>

                <div className={styles.metaBlock}>
                    <div className={styles.wageBlock}>
                    <p className={styles.metaText}>NGN450,000/monthly</p>
                    <p className={styles.metaText}>Full time</p>
                </div>

                <Link href='#' className={styles.apply}>View and Apply</Link>
                    
                </div>
            </div>
        </div>
    )
}

const styles = {
    card:'border border-gray-200 rounded-md p-3',
    head:'flex flex-row justify-between',
    titleBlock:'',
    body:'border-t border-gray-300',
    metaBlock:'flex flex-row justify-between mt-4',
    wageBlock:'flex flex-row gap-3',
    metaBlock:'flex flex-row justify-between',
    metaText:'text-lg font-bold',
    companyName:'text-lg',
    companyBlock:'h-[40px] flex flex-row gap-2 items-center',
    jobTitle:'text-3xl font-reading',
    location:'text-lg text-gray-600',
    discription:'text-gray-800',
    apply:'h-[52px] flex justify-center items-center bg-indigo-800 text-white font-bold px-3 rounded-md pointer-cursor',
}