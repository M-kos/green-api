import { Avatar } from '../../../../shared/ui/avatar/avatar.tsx';
import classes from './main-window-header.module.css';

interface Props {
  name: string;
  subtitle?: string;
  online?: boolean;
}

export const MainWindowHeader = ({ name, subtitle, online }: Props) => {
  return (
    <div className={classes.mainWindowHeader}>
      <Avatar fullName={name} online={online} />
      <div className={classes.mainWindowHeaderNameContainer}>
        <span className={classes.mainWindowHeaderName}>{name}</span>
        {subtitle && <span className={classes.mainWindowHeaderSubtitle}>{subtitle}</span>}
      </div>
    </div>
  );
};
