import s from './styles.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <p>Copyright&nbsp;{new Date().getFullYear()}&nbsp;Argent Bank</p>
    </footer>
  );
};
