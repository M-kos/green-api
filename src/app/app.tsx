import { useState } from 'react';
import type { Credentials } from '../shared/api/types.ts';
import { LoginPage } from '../pages/login';
import { ChatPage } from '../pages/chat';

function App() {
  const [credentials, setCredential] = useState<Credentials | null>(null);

  if (!credentials) {
    return <LoginPage onSubmit={(creds) => setCredential(creds)} />;
  }

  return <ChatPage />;
}

export default App;
