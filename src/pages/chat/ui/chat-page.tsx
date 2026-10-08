import { Page } from '../../../shared/ui/page/page.tsx';
import { useState } from 'react';
import { ChatSidebar } from '../../../features/chat-sidebar/ui/chat-sidebar/chat-sidebar.tsx';
import { MainWindow } from '../../../features/chat-main-window';
import type { ChatPreview } from '../../../entities/chat-preview';

const chats: ChatPreview[] = [
  {
    id: '1',
    name: 'Светлана Олеговна Лучкина',
    preview: 'Хорошо, договорились',
    time: '12:41',
    online: true,
  },
  { id: '2', name: 'Викторий Молин', preview: 'Завтра созвонимся?', time: '12:14', unreadCount: 2 },
  { id: '3', name: 'Петя', preview: 'Ок, спасибо!', time: '11:52' },
  { id: '4', name: 'itfilmxx', preview: 'Новое сообщение', time: '11:21' },
  { id: '5', name: 'Светлана Сергеевна', preview: 'До встречи', time: '10:47' },
  { id: '6', name: 'Белокопытов', preview: 'Принял', time: '10:12', unreadCount: 1 },
  { id: '7', name: 'FaraExplorer', preview: 'Посмотрим позже', time: '09:45' },
  { id: '8', name: 'MAX на iPhone', preview: 'Фото', time: '09:12' },
  { id: '9', name: 'Макс', preview: 'Привет!', time: 'Вчера' },
  { id: '10', name: 'Сергей Карпов', preview: 'Спасибо', time: 'Вчера' },
  { id: '11', name: 'Маша', preview: 'Как дела?', time: 'Вчера' },
  { id: '12', name: 'BrandCat', preview: 'Стикер', time: 'Вт' },
];

const messages = [
  {
    date: 'Вчера',
    messages: [
      { id: '1', text: 'Добрый день!', time: '12:03' },
      { id: '2', text: 'Добрый день! Как дела?', time: '12:04', outgoing: true, read: true },
      { id: '3', text: 'Хорошо, спасибо 😊', time: '12:05' },
      { id: '4', text: 'Как ваши дела?', time: '12:06' },
      {
        id: '5',
        text: 'Тоже хорошо. Сегодня встречаемся?',
        time: '12:07',
        outgoing: true,
        read: true,
      },
      { id: '6', text: 'Да, конечно. Давайте в семь.', time: '12:08' },
      { id: '7', text: 'Отлично, договорились!', time: '12:09', outgoing: true, read: true },
      { id: '8', text: 'До встречи 👋', time: '12:10' },
    ],
  },
  {
    date: 'Вчера',
    messages: [
      { id: '1', text: 'Добрый день!', time: '12:03' },
      { id: '2', text: 'Добрый день! Как дела?', time: '12:04', outgoing: true, read: true },
      { id: '3', text: 'Хорошо, спасибо 😊', time: '12:05' },
      { id: '4', text: 'Как ваши дела?', time: '12:06' },
      {
        id: '5',
        text: 'Тоже хорошо. Сегодня встречаемся?',
        time: '12:07',
        outgoing: true,
        read: true,
      },
      { id: '6', text: 'Да, конечно. Давайте в семь.', time: '12:08' },
      { id: '7', text: 'Отлично, договорились!', time: '12:09', outgoing: true, read: true },
      { id: '8', text: 'До встречи 👋', time: '12:10' },
    ],
  },
  {
    date: 'Вчера',
    messages: [
      { id: '1', text: 'Добрый день!', time: '12:03' },
      { id: '2', text: 'Добрый день! Как дела?', time: '12:04', outgoing: true, read: true },
      { id: '3', text: 'Хорошо, спасибо 😊', time: '12:05' },
      { id: '4', text: 'Как ваши дела?', time: '12:06' },
      {
        id: '5',
        text: 'Тоже хорошо. Сегодня встречаемся?',
        time: '12:07',
        outgoing: true,
        read: true,
      },
      { id: '6', text: 'Да, конечно. Давайте в семь.', time: '12:08' },
      { id: '7', text: 'Отлично, договорились!', time: '12:09', outgoing: true, read: true },
      { id: '8', text: 'До встречи 👋', time: '12:10' },
    ],
  },
  {
    date: 'Вчера',
    messages: [
      { id: '1', text: 'Добрый день!', time: '12:03' },
      { id: '2', text: 'Добрый день! Как дела?', time: '12:04', outgoing: true, read: true },
      { id: '3', text: 'Хорошо, спасибо 😊', time: '12:05' },
      { id: '4', text: 'Как ваши дела?', time: '12:06' },
      {
        id: '5',
        text: 'Тоже хорошо. Сегодня встречаемся?',
        time: '12:07',
        outgoing: true,
        read: true,
      },
      { id: '6', text: 'Да, конечно. Давайте в семь.', time: '12:08' },
      { id: '7', text: 'Отлично, договорились!', time: '12:09', outgoing: true, read: true },
      { id: '8', text: 'До встречи 👋', time: '12:10' },
    ],
  },
  {
    date: 'Вчера',
    messages: [
      { id: '1', text: 'Добрый день!', time: '12:03' },
      { id: '2', text: 'Добрый день! Как дела?', time: '12:04', outgoing: true, read: true },
      { id: '3', text: 'Хорошо, спасибо 😊', time: '12:05' },
      { id: '4', text: 'Как ваши дела?', time: '12:06' },
      {
        id: '5',
        text: 'Тоже хорошо. Сегодня встречаемся?',
        time: '12:07',
        outgoing: true,
        read: true,
      },
      { id: '6', text: 'Да, конечно. Давайте в семь.', time: '12:08' },
      { id: '7', text: 'Отлично, договорились!', time: '12:09', outgoing: true, read: true },
      { id: '8', text: 'До встречи 👋', time: '12:10' },
    ],
  },
  {
    date: 'Вчера',
    messages: [
      { id: '1', text: 'Добрый день!', time: '12:03' },
      { id: '2', text: 'Добрый день! Как дела?', time: '12:04', outgoing: true, read: true },
      { id: '3', text: 'Хорошо, спасибо 😊', time: '12:05' },
      { id: '4', text: 'Как ваши дела?', time: '12:06' },
      {
        id: '5',
        text: 'Тоже хорошо. Сегодня встречаемся?',
        time: '12:07',
        outgoing: true,
        read: true,
      },
      { id: '6', text: 'Да, конечно. Давайте в семь.', time: '12:08' },
      { id: '7', text: 'Отлично, договорились!', time: '12:09', outgoing: true, read: true },
      { id: '8', text: 'До встречи 👋', time: '12:10' },
    ],
  },
  {
    date: 'Сегодня',
    messages: [
      { id: '1', text: 'Добрый день!', time: '12:03' },
      { id: '2', text: 'Добрый день! Как дела?', time: '12:04', outgoing: true, read: true },
      { id: '3', text: 'Хорошо, спасибо 😊', time: '12:05' },
      { id: '4', text: 'Как ваши дела?', time: '12:06' },
      {
        id: '5',
        text: 'Тоже хорошо. Сегодня встречаемся?',
        time: '12:07',
        outgoing: true,
        read: true,
      },
      { id: '6', text: 'Да, конечно. Давайте в семь.', time: '12:08' },
      { id: '7', text: 'Отлично, договорились!', time: '12:09', outgoing: true, read: true },
      { id: '8', text: 'До встречи 👋', time: '12:10' },
    ],
  },
];

export const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const [value, setValue] = useState('');

  return (
    <Page>
      <ChatSidebar chats={chats} onSelectChat={setSelectedChat} activeChat={selectedChat} />
      <MainWindow
        name={selectedChat.name}
        subtitle="был(а) недавно"
        online={selectedChat.online}
        messages={messages}
        composerValue={value}
        onComposerChange={setValue}
        onSend={() => setValue('')}
      />
    </Page>
  );
};
