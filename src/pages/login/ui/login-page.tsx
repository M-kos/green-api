import { LoginForm } from '../../../features/login-form';
import type { Credentials } from '../../../shared/api/types.ts';
import { Page } from '../../../shared/ui/page/page.tsx';
import classes from './login-page.module.css';

interface Props {
  onSubmit: (credentials: Credentials) => void;
}

export const LoginPage = ({ onSubmit }: Props) => {
  return (
    <Page>
      <div className={classes.loginContainer}>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </Page>
  );
};
