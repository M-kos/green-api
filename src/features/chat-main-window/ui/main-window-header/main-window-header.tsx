import { Avatar } from '../../../../shared/ui/avatar/avatar.tsx';
import classes from './main-window-header.module.css';

interface Props {
  name: string;
}

export const MainWindowHeader = ({ name }: Props) => {
  if (!name) {
    return null;
  }

  return (
    <div className={classes.mainWindowHeader}>
      <Avatar fullName={name} />
      <div className={classes.mainWindowHeaderNameContainer}>
        <span className={classes.mainWindowHeaderName}>{name}</span>
      </div>
    </div>
  );
};
