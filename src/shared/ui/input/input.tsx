import classes from './input.module.css';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = ({ className, ...props }: Props) => {
  return <input className={`${classes.input} ${className}`} {...props} />;
};
