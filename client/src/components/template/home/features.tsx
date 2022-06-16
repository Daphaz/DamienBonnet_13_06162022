import { nanoid } from 'nanoid';

import s from './styles.module.scss';

interface IFeatureItemProps {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle: string;
}

interface ItemsDatas extends IFeatureItemProps {
  id: string;
}

const items: ItemsDatas[] = [
  {
    id: nanoid(),
    img: {
      src: '/img/icon-chat.png',
      alt: 'Chat Icon',
    },
    title: 'You are our #1 priority',
    subtitle:
      'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    id: nanoid(),
    img: {
      src: '/img/icon-money.png',
      alt: 'Saving Icon',
    },
    title: 'More savings means higher rates',
    subtitle:
      'The more you save with us, the higher your interest rate will be!',
  },
  {
    id: nanoid(),
    img: {
      src: '/img/icon-security.png',
      alt: 'Security Icon',
    },
    title: 'Security you can trust',
    subtitle:
      'We use top of the line encryption to make sure your data and money is always safe.',
  },
];

const FeatureItem = ({ img, subtitle, title }: IFeatureItemProps) => (
  <div className={s.feature__item}>
    <img src={img.src} alt={img.alt} className={s.feature__icon} />
    <h3 className={s.feature__title}>{title}</h3>
    <p className={s.feature__text}>{subtitle}</p>
  </div>
);

export const Features = () => {
  return (
    <section className={s.features}>
      <h2>Features</h2>
      {items.map(({ id, ...rest }) => (
        <FeatureItem key={id} {...rest} />
      ))}
    </section>
  );
};
