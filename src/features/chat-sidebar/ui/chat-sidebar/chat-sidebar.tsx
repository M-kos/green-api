import classes from './chat-sidebar.module.css';
import type { ChatPreview } from '../../../../entities/chat-preview';
import { ChatPreviewButton } from '../chat-preview-button/chat-preview-button.tsx';
import { Input } from '../../../../shared/ui/input/input.tsx';

interface Props {
  chats: ChatPreview[];
  activeChat: ChatPreview;
  title?: string;
  onSearch?: () => void;
  onSelectChat: (chat: ChatPreview) => void;
}

export const ChatSidebar = ({
  chats,
  activeChat,
  title = 'Чаты',
  onSearch,
  onSelectChat,
}: Props) => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarHeader}>
        <h1 className={classes.sidebarTitle}>{title}</h1>
      </div>

      <div className={classes.sidebarSearch}>
        <Input name="search" onChange={onSearch} placeholder="Введите номер телефона" />
      </div>

      <ol className={classes.chatList}>
        {chats.map((chat) => (
          <li key={chat.id}>
            <ChatPreviewButton
              chat={chat}
              active={chat.id === activeChat.id}
              onSelectChat={onSelectChat}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
