import classes from './chat-preview-button.module.css';
import { Avatar } from '../../../../shared/ui/avatar/avatar.tsx';
import type { ChatPreview } from '../../../../entities/chat-preview';

interface Props {
  chat: ChatPreview;
  active: boolean;
  onSelectChat: (chat: ChatPreview) => void;
}

export const ChatPreviewButton = ({ onSelectChat, active, chat }: Props) => {
  return (
    <button
      type="button"
      className={`${classes.chatPreview} ${active ? classes.chatPreviewActive : ''}`}
      onClick={() => onSelectChat?.(chat)}
    >
      <Avatar fullName={chat.name} online={chat.online} />
      <span className={classes.chatPreviewContent}>
        <span className={classes.chatPreviewTopline}>
          <strong>{chat.name}</strong>
          <span>{chat.time}</span>
        </span>
        <span className={classes.chatPreviewBottomline}>
          <span>{chat.preview}</span>
          {chat.unreadCount ? <b>{chat.unreadCount}</b> : null}
        </span>
      </span>
    </button>
  );
};
