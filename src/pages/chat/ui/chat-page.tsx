import { Page } from '../../../shared/ui/page/page.tsx';
import { useState } from 'react';
import { ChatSidebar } from '../../../features/chat-sidebar/ui/chat-sidebar/chat-sidebar.tsx';
import { MainWindow } from '../../../features/chat-main-window';
import type { ContactInfo } from '../../../entities/contact-info';

export const ChatPage = () => {
  const [contact, setContact] = useState<ContactInfo>();

  return (
    <Page>
      <ChatSidebar setContactInfo={setContact} contactInfo={contact} />
      <MainWindow contact={contact} />
    </Page>
  );
};
