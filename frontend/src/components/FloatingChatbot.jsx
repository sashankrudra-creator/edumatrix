import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const suggestedQuestions = [
    "Explore Programs",
    "STEM & Innovation",
    "Academic Programs",
    "Institutional Solutions"
  ];

  return (
    <div className="floating-chatbot-container">
      {isOpen && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <h4>Edumatrix Assistant</h4>
            <button onClick={toggleChat} className="chatbot-close-btn" aria-label="Close Chat">
              <X size={20} />
            </button>
          </div>
          
          <div className="chatbot-body">
            <div className="chat-message bot">
              Hi! How can I help you?
            </div>
            
            <div className="chat-suggestions">
              {suggestedQuestions.map((q, index) => (
                <button key={index} className="chat-suggestion-btn">
                  {q}
                </button>
              ))}
            </div>
          </div>
          
          <div className="chatbot-footer">
            <input 
              type="text" 
              placeholder="Ask something..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="chat-input"
            />
            <button className="chat-send-btn" aria-label="Send Message">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
      
      <div className="chatbot-button-wrapper">
        <button 
          className="chatbot-trigger-btn" 
          onClick={toggleChat}
          aria-label="Ask Edumatrix"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </button>
        {!isOpen && <span className="chatbot-tooltip">Ask Edumatrix</span>}
      </div>
    </div>
  );
}
