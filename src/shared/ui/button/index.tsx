import styles from './styles.module.scss';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  children?: React.ReactNode;
  classType?: 'primary' | 'danger';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  children = '',
  classType = 'primary',
  onClick,
}) => {
  const btnClassName =
    classType === 'danger'
      ? `${styles.button} ${styles.buttonDanger}`
      : `${styles.button} ${styles.buttonPrimary}`;
  return (
    <button className={btnClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
