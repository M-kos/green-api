import type { Credentials } from '../../../../shared/api/types.ts';

import classes from './login-form.module.css';
import { Input } from '../../../../shared/ui/input/input.tsx';

interface Props {
  onSubmit: (credentials: Credentials) => void;
  disabled?: boolean;
  error?: Error | null;
}

export const LoginForm = ({ error, onSubmit, disabled = false }: Props) => {
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const idInstance = formData.get('idInstance')?.toString().trim() || '';
    const apiTokenInstance = formData.get('apiTokenInstance')?.toString().trim() || '';

    onSubmit({ idInstance, apiTokenInstance });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p className={classes.title}>Подключение</p>

      <div className={classes.fields}>
        <Input name="idInstance" placeholder="Введите idInstance" required disabled={disabled} />

        <Input
          name="apiTokenInstance"
          placeholder="Введите apiTokenInstance"
          required
          disabled={disabled}
        />
      </div>

      {error && error.message}

      <button className={classes.submit} type="submit" disabled={disabled}>
        Подключиться
      </button>
    </form>
  );
};
