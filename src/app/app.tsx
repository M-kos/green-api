import { useState } from 'react';
import type { Credentials } from '../shared/api/types.ts';
import { LoginPage } from '../pages/login';
import { ChatPage } from '../pages/chat';
import { ApiProvider } from '../shared/providers/api-provider/api-provider.tsx';

function App() {
  const [credentials, setCredentials] = useState<Credentials | null>(null);

  if (!credentials) {
    return <LoginPage onSubmit={(creds) => setCredentials(creds)} />;
  }

  return (
    <ApiProvider credentials={credentials}>
      <ChatPage />
    </ApiProvider>
  );
}

export default App;
