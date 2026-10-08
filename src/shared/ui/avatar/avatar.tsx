import { getInitials } from '../../utils/get-initials.ts';
import classes from './avatar.module.css';

interface Props {
  fullName: string;
  online?: boolean;
}

export const Avatar = ({ fullName, online = false }: Props) => {
  return (
    <span className={classes.avatar}>
      <span>{getInitials(fullName)}</span>
      {online && <span className={classes.avatar_status} />}
    </span>
  );
};
