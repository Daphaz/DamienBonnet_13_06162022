import s from './styles.module.scss';

export const Hero = () => {
  return (
    <div
      className={s.hero}
      style={{ backgroundImage: "url('/img/bank-tree.jpeg')" }}
    >
      <section className={s.hero__content}>
        <h2>Promoted Content</h2>
        <p className={s.hero__subtitle}>No fees.</p>
        <p className={s.hero__subtitle}>No minimum deposit.</p>
        <p className={s.hero__subtitle}>High interest rates.</p>
        <p className={s.hero__text}>
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
};
