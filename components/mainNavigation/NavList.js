import styles from '../../styles/MainNavigation.module.scss'
import Link from 'next/link.js';
import NavItem from './NavItem';

function NavList(props) {

    console.log('NavList', props.navigationArray )
    
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

                {/* <NavItem 
                title={element.title} 
                src={element.src}
                alt={element.alt}
                pageLink={element.pageLink}
                /> */}
                    {/* <NavItem 
                        title="Headphones" 
                        src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
                        alt="Headphones"
                        pageLink="/headphones"
                        />
                    <NavItem 
                        title="Speakers" 
                        src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
                        alt="Speakers"
                        pageLink="/speakers"
                        />
                    <NavItem 
                        title="Earphones" 
                        src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
                        alt="Earphones"
                        pageLink="/earphones"
                        />     */}
                </ul>
    )
}

export default NavList;