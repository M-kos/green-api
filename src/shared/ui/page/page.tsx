import classes from './page.module.css';

export const Page = ({ children }: React.PropsWithChildren) => {
  return <div className={classes.page}>{children}</div>;
};
