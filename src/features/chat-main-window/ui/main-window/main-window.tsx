import { MainWindowHeader } from '../main-window-header/main-window-header.tsx';
import { MessageList } from '../message-list/message-list.tsx';
import { MessageSender } from '../message-sender/message-sender.tsx';
import classes from './main-window.module.css';
import type { ContactInfo } from '../../../../entities/contact-info';

interface Props {
  contact?: ContactInfo;
}

export const MainWindow = ({ contact }: Props) => {
  return (
    <div className={classes.mainWindow}>
      <MainWindowHeader name={contact?.name || ''} />
      <MessageList chatId={contact?.chatId} key={contact?.chatId} />
      <MessageSender chatId={contact?.chatId} />
    </div>
  );
};
