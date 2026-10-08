import { MainWindowHeader } from '../main-window-header/main-window-header.tsx';
import { type MessageGroup, MessageList } from '../message-list/message-list.tsx';
import { MessageSender } from '../message-sender/message-sender.tsx';
import classes from './main-window.module.css';

interface Props {
  name: string;
  subtitle?: string;
  online?: boolean;
  messages: MessageGroup[];
  composerValue: string;
  onComposerChange?: (value: string) => void;
  onSend?: () => void;
}

export const MainWindow = ({
  name,
  subtitle,
  online,
  messages,
  composerValue,
  onComposerChange,
  onSend,
}: Props) => {
  return (
    <div className={classes.mainWindow}>
      <MainWindowHeader name={name} subtitle={subtitle} online={online} />
      <MessageList groups={messages} />
      <MessageSender value={composerValue} onChange={onComposerChange} onSend={onSend} />
    </div>
  );
};
