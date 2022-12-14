// import CustomForwardImage from './CustomForwardImage.js';
import Image from 'next/image'
import cart from '../../public/assets/shared/desktop/icon-cart.svg'
import logo from '../../public/assets/shared/desktop/logo.svg'
import hamburger from '../../public/assets/shared/tablet/icon-hamburger.svg'
import styles from '../../styles/MainNavigation.module.scss'
import Link from 'next/link'
import NavList from './NavList'

import navListData from '../../navListData.json'

import { useState, useEffect } from 'react'

function MainNavigation(props) {


    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open === true) {
            //add open class to body
            document.body.classList.add( 'open' );
        } else {
            //remove open class from body
            document.body.classList.remove( 'open' );
        }
    }, [open])
    
    return <nav className={ styles.main_navigation }>
            <div 
                className={ `${styles.hamburger_container} btn1` }
                onClick={ () => setOpen(!open) }>
                    <Image 
                        src={hamburger}
                        alt="hamburger-menu"
                    />

                {open && <div className={ styles.fixed_nav_container } ><NavList navigationArray={ navListData }/></div> }

            </div>

            <div className={ styles.explicit_nav_list }>
                <li key="0"><h5><Link href="/">Home</Link></h5></li>
                
               { navListData.map((element) => (
                    <li key={element.id}><h5><Link href={ element.pageLink }>{element.title}</Link></h5></li>
                ))}
            </div>

            <div className={ styles.logo_container }>
                <Image 
                src={ logo }
                //layout='responsive'
                height={'58px'}
                width={'58px'}
                alt="logo"
                className='logo'
                />
            </div>
            <div className={ styles.cart_container }>
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