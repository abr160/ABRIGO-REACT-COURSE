import { useState } from 'react';
import { Chatbot } from 'supersimpledev';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  // store what user types
  function saveInputText(event) {
    setInputText(event.target.value);
  }

  // runs when send btn is click
  function sendMessage() {

    // don't send empty msg
    if (!inputText.trim()) {
      return;
    }

    // add the user's msg
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];

    setChatMessages(newChatMessages);

    let response;

    const message = inputText.toLowerCase().trim();

    // custom response
    if (
      message === 'is there a class tomorrow?' ||
      message === 'is there a class tomorrow' ||
      message.includes('class tomorrow')
    ) {
      response = 'No. I already suspended it.';
    }

    // this will get today's actual date based on the browser's timezone
    else if (
      message === 'what is today?' ||
      message === 'what is todays date?' ||
      message === "what is today's date?" ||
      message === 'date today' ||
      (message.includes('today') && message.includes('date'))
    ) {
      const today = new Date();

      response = `Today is ${today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}.`;
    }

    // the default chatbot response
    else {
      response = Chatbot.getResponse(inputText);
    }

    // add chatbot reply
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    // clear textbox
    setInputText('');
  }

  return (
    <div className="flex mb-16">

      <input
        className="grow border border-gray-300 rounded-lg px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Send a message to Chatbot"
        value={inputText}
        onChange={saveInputText}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            sendMessage();
          }
        }}
      />

      <button
        onClick={sendMessage}
        className="ml-3 bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 rounded-lg transition"
      >
        Send
      </button>

    </div>
  );
}

