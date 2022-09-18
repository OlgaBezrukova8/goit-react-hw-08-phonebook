import styles from '../components/Navigation/navigation.module.css';

export const getNavigationClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};
