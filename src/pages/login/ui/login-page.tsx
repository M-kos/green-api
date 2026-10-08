import { LoginForm } from '../../../features/login-form';
import type { Credentials } from '../../../shared/api/types.ts';
import { Page } from '../../../shared/ui/page/page.tsx';
import classes from './login-page.module.css';
import { useLogin } from '../hooks/use-login.ts';

interface Props {
  onSubmit: (credentials: Credentials) => void;
}

export const LoginPage = ({ onSubmit }: Props) => {
  const { error, isLoading, checkStatus } = useLogin(onSubmit);

  return (
    <Page>
      <div className={classes.loginContainer}>
        <LoginForm onSubmit={checkStatus} disabled={isLoading} error={error} />
      </div>
    </Page>
  );
};
