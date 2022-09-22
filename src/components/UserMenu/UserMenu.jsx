import { useDispatch, useSelector } from 'react-redux';
import { getEmail } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { useToken } from 'shared/hooks/useToken';

import { BasicButton } from 'components/BasicButton/BasicButton';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getEmail);
  const token = useToken();

  return (
    <div className="d-flex align-items-center">
      <div className="d-flex align-items-center">
        <span className="py-2 px-3 bg-primary square rounded-circle text-white">
          {email[0]}
        </span>
        <p>{email}</p>
      </div>
      <div>
        <BasicButton type="button" onClick={() => dispatch(logOut(token))}>
          Log out
        </BasicButton>
      </div>
    </div>
  );
};
