import classes from './message-sender.module.css';
import { Input } from '../../../../shared/ui/input/input.tsx';
import { SendButton } from '../../../../shared/ui/send-button/send-button.tsx';
import { useMessageSender } from '../../hooks/use-message-sender.ts';

interface Props {
  chatId?: string;
  placeholder?: string;
}

export const MessageSender = ({ placeholder = 'Сообщение', chatId }: Props) => {
  const { onSend, canSend, onChange, value } = useMessageSender(chatId);

  return (
    <div className={classes.messageSender}>
      <Input
        name="send-message"
        value={value}
        disabled={!chatId}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            onSend();
          }
        }}
        maxLength={4000}
      />
      <SendButton onClick={onSend} disabled={!canSend} />
    </div>
  );
};
