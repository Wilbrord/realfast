import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineMenu } from 'react-icons/hi';
import { navbarStyles } from '@/utilities/navbar.styles';
import MobileNav from './Mobilenav';



export default function MainNav (){
    const [showNavBar,setShowNavbar] = useState (false);
   return  (
        <div>    
            <nav className={navbarStyles.navBar} >
                <ul className={navbarStyles.navSection}>

                    <li className={navbarStyles.responsiveItemMenu}>
                    <span className={navbarStyles.brandName}>Real Fast</span>
                    </li>
                    <li><Image width={38} height={38} src='/realfast_logo.PNG' alt=''/></li>
                    <li className={navbarStyles.responsiveItemMenu}>
                    <Link href='#' className={navbarStyles.navText}>Find Jobs</Link>
                    </li>
                </ul>

                <ul className={navbarStyles.navSection}>
                    <li className={navbarStyles.responsiveItemMenu} style={{borderRight:'2px solid grey',paddingRight:8}}>
                    <Link href='#' className={navbarStyles.navText}>Sign in</Link>
                    </li>
                    <li  className={navbarStyles.responsiveItemMenu}>
                    <Link href='#' className={navbarStyles.navText}>Post a Job</Link>
                    </li>
                    <li>
                        <HiOutlineMenu
                        className={navbarStyles.menu}
                        onClick={() => setShowNavbar(true)}/>
                    </li>
                </ul>
            </nav>

                { showNavbar ? <MobileNav/> : null}
        </div>
    )
}