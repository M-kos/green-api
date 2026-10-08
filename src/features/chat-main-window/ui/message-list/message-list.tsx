import { MessageGroupDateSeparator } from '../message-group-date-separator/message-group-date-separator.tsx';
import { MessageBubble, type MessageBubbleData } from '../message-bubble/message-bubble.tsx';
import classes from './message-list.module.css';
import { useEffect, useRef } from 'react';

export interface MessageGroup {
  date: string;
  messages: MessageBubbleData[];
}

interface MessageListProps {
  groups: MessageGroup[];
}

export const MessageList = ({ groups }: MessageListProps) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, []);

  return (
    <div ref={listRef} className={classes.messageList}>
      {groups.map((group) => (
        <div className={classes.messageGroup} key={group.date}>
          <MessageGroupDateSeparator>{group.date}</MessageGroupDateSeparator>
          {group.messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </div>
      ))}
    </div>
  );
};
