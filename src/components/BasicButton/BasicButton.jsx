import Button from 'react-bootstrap/Button';

export const BasicButton = ({ children, ...props }) => {
  return (
    <Button size="sm" {...props}>
      {children}
    </Button>
  );
};
