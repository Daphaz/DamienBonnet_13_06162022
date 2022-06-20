import s from './styles.module.scss';

interface SpinnerProps {
  width?: number;
  height?: number;
  color?: 'white' | 'black';
}

export const Spinner = ({
  width = 50,
  height = 50,
  color = 'white',
}: SpinnerProps) => {
  return (
    <svg
      className={s.spin}
      viewBox='0 0 50 50'
      style={{ width, height }}
      fill='none'
    >
      <circle
        className={s.spinPath}
        cx='25'
        cy='25'
        r='20'
        stroke={color}
        strokeWidth='5'
      ></circle>
    </svg>
  );
};
