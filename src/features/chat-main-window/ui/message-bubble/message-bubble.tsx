import classes from './message-bubble.module.css';
import type { MessageData } from '../../../../entities/message';

interface Props {
  message: MessageData;
}

export const MessageBubble = ({ message }: Props) => {
  return (
    <div className={`${classes.messageRow} ${message.outgoing ? classes.messageRowOutgoing : ''}`}>
      <div
        className={`${classes.messageBubble} ${message.outgoing ? classes.messageBubbleOutgoing : ''}`}
      >
        <p className={classes.messageText}>{message.text}</p>
        <div className={classes.messageTimeContainer}>
          <span className={classes.messageTime}>{message.time}</span>
        </div>
      </div>
    </div>
  );
};
