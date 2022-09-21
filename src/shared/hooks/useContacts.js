import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/contacts/contacts-selectors';

export const useContacts = () => {
  const isLoading = useSelector(getIsLoading);
  return isLoading;
};
