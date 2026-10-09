import classes from './chat-sidebar.module.css';
import { Input } from '../../../../shared/ui/input/input.tsx';
import { ChatPreview } from '../chat-preview/chat-preview.tsx';
import type { ContactInfo } from '../../../../entities/contact-info';
import { useChatSidebar } from '../../hooks/use-chat-sidebar.ts';

interface Props {
  title?: string;
  contactInfo?: ContactInfo;
  setContactInfo: (contact: ContactInfo) => void;
}

export const ChatSidebar = ({ title = 'Чаты', setContactInfo, contactInfo }: Props) => {
  const { handleSubmit, error, isLoading } = useChatSidebar(setContactInfo);

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarHeader}>
        <h1 className={classes.sidebarTitle}>{title}</h1>
      </div>

      <div className={classes.sidebarSearch}>
        <form onSubmit={handleSubmit}>
          <Input
            name="search"
            placeholder="Введите номер телефона и нажмите Enter"
            disabled={isLoading}
          />
        </form>
      </div>
      <div className={classes.errorContainer}>{error?.message}</div>
      <div className={classes.previewContainer}>
        {contactInfo && <ChatPreview contact={contactInfo} />}
      </div>
    </div>
  );
};
