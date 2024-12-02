import React, { useState, ChangeEvent } from "react";

interface Message {
  sender: "me" | "them";
  text: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "me", text: "Hey, how are you?" },
    { sender: "them", text: "I'm good! What about you?" },
  ]);

  const [newMessage, setNewMessage] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewMessage(e.target.value);
  };

  const sendMessage = (): void => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "me", text: newMessage },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="h-screen ml-96 border-l-[1px] border-gray-300 border-solid flex flex-col bg-gray-100">
      {/* Header */}
      <div className="flex items-center pt-6 justify-between border-b-[1px] border-gray-300 border-solid bg-teal-600 text-white p-4">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="font-semibold">John Doe</span>
        </div>
        <div className="flex space-x-4">
          <button className="hover:text-gray-300">🔍</button>
          <button className="hover:text-gray-300">⋮</button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`${
                msg.sender === "me"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-300 text-gray-900"
              } px-4 py-2 rounded-lg max-w-xs animate-fade`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="flex items-center bg-white p-4 pt-[0.90rem] border-t border-gray-300">
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          onClick={sendMessage} className="ml-3 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
