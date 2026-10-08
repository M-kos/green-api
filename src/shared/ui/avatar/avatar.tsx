import { getInitials } from '../../utils/get-initials.ts';
import classes from './avatar.module.css';

interface Props {
  fullName: string;
}

export const Avatar = ({ fullName }: Props) => {
  return (
    <span className={classes.avatar}>
      <span>{getInitials(fullName)}</span>
    </span>
  );
};
