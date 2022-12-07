import styles from '../../styles/MainNavigation.module.scss'
import Link from 'next/link';   
import Image from 'next/image';
import arrowRight from './../../public/assets/shared/desktop/icon-arrow-right.svg'


function NavItem(props) {

    console.log( props.pageLink )

    
    return (
            
            <li className={ styles.main_nav_list }>
                <div className={ styles.product_image_container } >
                    <Image 
                        src={props.src}
                        alt={props.alt}
                        width={ 110 } 
                        height={ 110 }
                        />
                </div>
                <h6 className={ styles.main_nav_list_title }>{ props.title }</h6>

                <Link href={ props.pageLink }>

                    <button className={ `${styles.btn_type_3} btn-type-3` }>
                            Shop&nbsp;&nbsp; 
                        <Image
                            src={ arrowRight }
                            className="btn-type-3-arrow"
                            alt="arrow-right"
                            />
                            
                    </button> 
                </Link>
            
            </li>           
    )
}

export default NavItem;