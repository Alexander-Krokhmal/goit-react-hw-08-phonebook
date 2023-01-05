import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/auth/authOperations";
import { authSelectors } from "redux/auth/authSelectors";
import css from './UserMenu.module.css';

export const UserMenu = () => {

    const dispatch = useDispatch();
    const user = useSelector(authSelectors.selectUser);

    return (
        <div className={css.wrapper}>
          <p className={css.username}>Welcome, {user.name}</p>
          <button type="button" onClick={() => dispatch(logOut())}>
            Logout
          </button>
        </div>
      );
}