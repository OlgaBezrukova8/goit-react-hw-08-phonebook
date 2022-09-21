import { useDispatch, useSelector } from 'react-redux';
import { getEmail } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import { getToken } from '../../redux/auth/auth-selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getEmail);
  const token = useSelector(getToken);

  return (
    <>
      <div>
        <span>{email[0]}</span>
        <p>{email}</p>
        <button type="button" onClick={() => dispatch(logOut(token))}>
          Log out
        </button>
      </div>
    </>
  );
};
