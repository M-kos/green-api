import classes from './message-list.module.css';

interface DateSeparatorProps {
  children: string;
}

export const MessageGroupDateSeparator = ({ children }: DateSeparatorProps) => {
  return (
    <div className={classes.dateSeparatorContainer}>
      <span className={classes.dateSeparator}>{children}</span>
    </div>
  );
};
