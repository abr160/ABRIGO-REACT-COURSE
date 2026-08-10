import ChatbotProfileImage from '../assets/chatbot.png';
import UserProfileImage from '../assets/user.png';

export function ChatMessage({ message, sender }) {

  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  /*
  if (sender === 'robot') {
    return (
      <div>
        <img src="robot.png" width="50" />
        {message}
      </div>
    );
  }
  */

  return (
    <div
      className={
        sender === 'user'
          ? 'flex justify-end items-start'
          : 'flex items-start'
      }
    >

      {sender === 'robot' && (
        <img
          src={ChatbotProfileImage}
          className="w-11.25"
        />
      )}

      <div className="bg-gray-200 px-5 py-4 rounded-lg mx-2 mb-5 max-w-75">
        {message}
      </div>

      {sender === 'user' && (
        <img
          src={UserProfileImage}
          className="w-11.25"
        />
      )}

    </div>
  );
}

