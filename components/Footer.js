import Link from "next/link";
import { ImFacebook2 } from 'react-icons/im';
import { AiFillInstagram,AiFillTwitterCircle,AiFillYoutube } from "react-icons/ai";


export default function Footer () {
    const year = new Date().getFullYear();

    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.copyrightsBlock}>
                <small className={footerStyles.copyrights}>&copy; {year} Real Fast Jobs LLC</small>
            </div>
            

            <ul className={footerStyles.socialBlock}>
                <li>
                    <Link href='#'><ImFacebook2 className={footerStyles.icon}/></Link>
                </li>
                <li>
                    <Link href='#'><AiFillInstagram className={footerStyles.icon}/></Link>
                </li>
                <li>
                    <Link href='#'><AiFillTwitterCircle className={footerStyles.icon}/></Link>
                </li>
                <li>
                    <Link href='#'><AiFillYoutube className={footerStyles.icon}/></Link>
                </li>
            </ul>

            <ul className={footerStyles.legalBlock}>
                <li>
                    <Link href='#' className={footerStyles.legalText}>Terms</Link>
                </li>
                <li>
                    <Link href='#' className={footerStyles.legalText}>Privacy Policy</Link>
                </li>
                <li>
                    <Link href='#' className={footerStyles.legalText}>Bug Bounty</Link>
                </li>
            </ul>
        </footer>
    )
}
const footerStyles = {
    footer: 'w-full flex flex-col md:flex-row justify-center item-center gap-2 md:justify-between py-3 px-4 bg-indigo-950 ',
    copyrightsBlock:' flex items-center ',
    copyrights:'text-indigo-300',
    socialBlock:'flex flex-row items-center md:gap-3 gap-1',
    icon:'w-6 h-6 md:w-10 md:h-10 text-indigo-200 ',
    legalBlock:'flex flex-row items-center gap-3',
    legalText:'text-indigo-300 text-xs md:text-sm',

}
