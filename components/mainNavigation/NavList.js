import styles from '../../styles/MainNavigation.module.scss';
import NavItem from './NavItem';

// Navigation list component
function NavList(props) {
  return (
    <ul className={styles.menu_container}>
      {props.navigationArray.map((element) => (
        <NavItem
          title={element.title}
          src={element.src}
          alt={element.alt}
          pageLink={element.pageLink}
          key={element.id}
        />
      ))}
    </ul>
  );
}

export default NavList;
