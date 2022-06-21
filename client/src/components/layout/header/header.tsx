import { Link, useNavigate } from 'react-router-dom';

import s from './styles.module.scss';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logout, userSelector } from '@/store/reducers';

export const Header = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className={s.header}>
      <nav>
        <ul className={s.header__nav}>
          <li>
            <Link to='/' className={s.header__logo}>
              <img src='/img/argentBankLogo.png' alt='Argent Bank Logo' />
              <h1>Argent Bank</h1>
            </Link>
          </li>
          <li className={s.align}>
            <Link
              to={user ? '/profile' : '/login'}
              className={s.header__controls}
            >
              <span className='i user-circle' />
              <span>{user ? user.firstName : 'Sign In'}</span>
            </Link>

            {user && (
              <button className={s.header__controls} onClick={onLogout}>
                <span className='i sign-out' />
                <span>Sign Out</span>
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
