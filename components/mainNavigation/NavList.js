import styles from '../../styles/MainNavigation.module.scss'
import Link from 'next/link.js';
import NavItem from './NavItem';

function NavList(props) {
    
    return (
                <ul className={ styles.menu_container }>
                   { props.navigationArray.map((element) => (
                        <NavItem 
                            title={element.title} 
                            src={element.src}
                            alt={element.alt}
                            pageLink={element.pageLink}
                            key={ element.id }
                        />
                    ))}
                </ul>
    )
}

export default NavList;