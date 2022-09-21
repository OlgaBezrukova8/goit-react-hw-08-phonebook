import { useDispatch, useSelector } from 'react-redux';
import { getEmail } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { useToken } from 'shared/hooks/useToken';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getEmail);
  const token = useToken();

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
