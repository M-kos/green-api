import { MessageGroupDateSeparator } from '../message-group-date-separator/message-group-date-separator.tsx';
import { MessageBubble } from '../message-bubble/message-bubble.tsx';
import classes from './message-list.module.css';
import { useEffect, useRef } from 'react';
import { useMessageList } from '../../hooks/use-message-list.ts';

interface Props {
  chatId?: string;
}

export const MessageList = ({ chatId }: Props) => {
  const { messages, error } = useMessageList(chatId);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, []);

  return (
    <div ref={listRef} className={classes.messageList}>
      <div className={classes.messageGroup}>
        <MessageGroupDateSeparator>Сегодня</MessageGroupDateSeparator>
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {error}
      </div>
    </div>
  );
};
