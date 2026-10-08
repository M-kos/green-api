import classes from './message-bubble.module.css';

export interface MessageBubbleData {
  id: string;
  text: string;
  time: string;
  outgoing?: boolean;
  read?: boolean;
}

interface Props {
  message: MessageBubbleData;
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
