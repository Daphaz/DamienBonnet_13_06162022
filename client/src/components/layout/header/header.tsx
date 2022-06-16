import { Link } from 'react-router-dom';

import s from './styles.module.scss';

export const Header = () => {
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
          <li>
            <Link to='sign-in' className={s.header__controls}>
              <span className='i user-circle' />
              <span>Sign In</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
