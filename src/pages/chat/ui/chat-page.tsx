import { Page } from '../../../shared/ui/page/page.tsx';
import { useState } from 'react';
import { MainWindow } from '../../../features/chat-main-window';
import type { ContactInfo } from '../../../entities/contact-info';
import { ChatSidebar } from '../../../features/chat-sidebar';

export const ChatPage = () => {
  const [contact, setContact] = useState<ContactInfo>();

  return (
    <Page>
      <ChatSidebar setContactInfo={setContact} contactInfo={contact} />
      <MainWindow contact={contact} />
    </Page>
  );
};
