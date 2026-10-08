import classes from './chat-preview.module.css';
import { Avatar } from '../../../../shared/ui/avatar/avatar.tsx';
import type { ContactInfo } from '../../../../entities/contact-info';
import { getLastSeenTime } from '../../../../shared/utils/get-last-seen-time.ts';

interface Props {
  contact: ContactInfo;
}

export const ChatPreview = ({ contact }: Props) => {
  const time = contact.lastSeen ? getLastSeenTime(contact.lastSeen * 1000) : '';

  return (
    <div className={classes.chatPreview}>
      <Avatar fullName={contact.name} />
      <div className={classes.chatPreviewContent}>
        <span className={classes.chatPreviewTitle}>{contact.name}</span>
        <span className={classes.chatPreviewTime}>{time}</span>
      </div>
    </div>
  );
};
