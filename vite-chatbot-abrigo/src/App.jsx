import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';

function App() {

  // starting messages
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div className="max-w-150 mx-auto h-screen flex flex-col">

      <ChatMessages
        chatMessages={chatMessages}
      />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />

    </div>
  );
}

export default App;
