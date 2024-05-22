import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, Content } from '@google/generative-ai';

// Your API key and model name
const API_KEY = 'AIzaSyCZ-gij1YJBoeewPhyZncQaMZLdJKoU2kM';
const MODEL_NAME = 'gemini-pro';

// Safety settings for content filtering
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

interface ChatModalProps {
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState<{ text: string; isUser: boolean }[]>([]);
  const conversationRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async () => {
    if (message.trim() !== '') {
      const newMessage = { text: message, isUser: true };
      setConversation([...conversation, newMessage]);
      setMessage(''); // Clear the input field after sending

      try {
        await simulateBotResponse(message);
      } catch (error) {
        console.error('Error generating response:', error); //Handle the fcking error
      
      }
    }
  };

  const simulateBotResponse = async (userMessage: string) => {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const prompt = `input: ${userMessage}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    if (text) {
      const sentences = text.split(/[.!?]/);
      const summary = sentences[0];
      const botResponseText = `${summary} .`;
      const botResponse = { text: botResponseText, isUser: false };
      setConversation((prevConversation) => [...prevConversation, botResponse]);
    } else {
      console.error('Error: Empty response text.');
    }
  };
  
  
  
  
  useEffect(() => {
    // Scroll to the bottom of the chat conversation when it updates
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [conversation]);


  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <div className="chat-modal-overlay" onClick={onClose}>
      <div className="chat-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="chat-header">
          <h2 className="chat-title">SiJi</h2>
          <span className="chat-modal-close" onClick={onClose}>&times;</span>
        </div>
        <div className="chat-modal-body">
          <div ref={conversationRef} className="chat-conversation">
            {conversation.map((msg, index) => (
              <div key={index}>
                {!msg.isUser && (
                  <div className="ai-message">
                    <div className="bot-profile">
                      <div className="bot-profile-image">
                        <img src="src/assets/robot.png" alt="Bot Profile" style={{ height: '20px' }} />
                      </div>
                      <div className="ai-name">SiJi</div>
                    </div>
                  </div>
                )}
                <div
                  className={`chat-message ${msg.isUser ? 'user-message' : 'bot-message'}`}
                  style={{ alignSelf: msg.isUser ? 'flex-end' : 'flex-start' }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="chat-input-container">
          <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress} // Added keydown event listener
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
