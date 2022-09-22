import Button from 'react-bootstrap/Button';
import styles from './basicButton.module.css';

export const BasicButton = ({ children, ...props }) => {
  return (
    <Button size="sm" className={styles.button} {...props}>
      {children}
    </Button>
  );
};
