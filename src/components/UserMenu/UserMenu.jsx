import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useLogOutMutation } from '../../redux/auth/auth-slice';
import { resetUser } from '../../redux/user/user-actions';
import { getUser } from '../../redux/user/user-selectors';

export const UserMenu = () => {
  const [logOut] = useLogOutMutation();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const handleSubmit = async () => {
    try {
      await logOut();
      dispatch(resetUser());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user.token === '' && <Navigate to="/" replace={true} />}
      <div>
        <span>{user.name[0]}</span>
        <p>{user.email}</p>
        <button onClick={handleSubmit}>Log out</button>
      </div>
    </>
  );
};
