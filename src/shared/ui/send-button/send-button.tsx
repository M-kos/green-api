import classes from './send-button.module.css';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const SendButton = ({ className, ...props }: Props) => {
  return (
    <button className={`${classes.sendButton} ${className}`} {...props}>
      &#8593;
    </button>
  );
};
