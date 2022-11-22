// import CustomForwardImage from './CustomForwardImage.js';
import Image from 'next/image'
import cart from '../../public/assets/shared/desktop/icon-cart.svg'
import logo from '../../public/assets/shared/desktop/logo.svg'
import hamburger from '../../public/assets/shared/tablet/icon-hamburger.svg'
import styles from '../../styles/MainNavigation.module.scss'
import Link from 'next/link.js';
import NavList from './NavList'

import { useState, useEffect } from 'react'

function MainNavigation() {


    const [open, setOpen] = useState(false);
    
    return <nav className={ styles.main_navigation }>
            <div 
                className={ `${styles.hamburger_container} btn1` }
                onClick={ () => setOpen(!open) }>
                    <Image 
                        src={hamburger}
                        alt="hamburger-menu"
                    />

                {open && <NavList />}

            </div>
        <div className='logo_container'>
            <Image 
            src={ logo }
            //layout='responsive'
            height={'58px'}
            width={'58px'}
            alt="logo"
            className='logo'
            />
        </div>
        <div className='cart_container'>
        <Image 
            src={ cart }
            //layout='responsive'
            height={'58px'}
            width={'58px'}
            alt="cart"
            className='cart'
            />
        </div>


    </nav>
}

export default MainNavigation;