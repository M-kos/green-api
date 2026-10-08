import classes from './message-sender.module.css';
import { Input } from '../../../../shared/ui/input/input.tsx';
import { SendButton } from '../../../../shared/ui/send-button/send-button.tsx';

interface Props {
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onSend?: () => void;
}

export const MessageSender = ({
  value,
  placeholder = 'Сообщение',
  disabled,
  onChange,
  onSend,
}: Props) => {
  const canSend = value.trim().length > 0 && !disabled;

  return (
    <div className={classes.messageSender}>
      <Input
        name="send-message"
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(event) => onChange?.(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && !event.shiftKey && canSend) {
            event.preventDefault();
            onSend?.();
          }
        }}
      />
      <SendButton onClick={onSend} disabled={!canSend} />
    </div>
  );
};
