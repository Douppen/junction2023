import { useState } from 'react';

interface Message {
  byUser: boolean;
  text: string;
}

function Chat() {
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [answerLoading, setAnswerLoading] = useState(false);

  const sendMessage = () => {
    if (answerLoading || !value) return;
    setMessages((prev) => [...prev, { byUser: true, text: value }]);
    setValue('');
    setAnswerLoading(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { byUser: false, text: 'Reply' }]);
      setAnswerLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-end w-full h-[calc(100vh-140px)] overflow-y-scroll">
      <div className="w-full max-w-[800px] py-6">
        {messages.map((message, i) => (
          <div className={`chat ${message.byUser ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-bubble">{message.text}</div>
          </div>
        ))}
        {answerLoading && <span className="loading loading-dots loading-lg mx-6 absolute -translate-y-8" />}
      </div>
      <textarea
        className="textarea textarea-bordered w-full h-[80px] max-w-[800px] flex-shrink-0 resize-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
          }
        }}
      />
    </div>
  );
}

export default Chat;
