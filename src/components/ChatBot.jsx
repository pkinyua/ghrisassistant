import React, { useState, useRef, useEffect } from 'react';
import KenyaFlag from './KenyaFlag.jsx';
import { kenyaKnowledge } from '../utils/kenyaKnowledge.js';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findResponse = (message) => {
    const lowerMsg = message.toLowerCase();
    for (const [key, topic] of Object.entries(kenyaKnowledge)) {
      if (topic.keywords.some(keyword => lowerMsg.includes(keyword))) {
        return topic.response;
      }
    }
    return kenyaKnowledge.general.response;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setShowWelcome(false);
    setIsTyping(true);

    setTimeout(() => {
      const response = findResponse(input);
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 500 + Math.random() * 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickReplies = [
    { icon: '🔑', label: 'Reset Password', value: 'I forgot my password' },
    { icon: '📄', label: 'Download Payslip', value: 'How do I download my payslip?' },
    { icon: '📄', label: 'Upload Documents', value: 'I want to upload my documents after appointment' },
    { icon: '📄', label: 'Registration', value: 'I want to register on GHRIS' },
    { icon: '📞', label: 'Contact Helpdesk', value: 'How to contact helpdesk?' },
    { icon: '⚠️', label: 'System Access Challenge Error', value: 'How do I get past system access challenge error?' },
    { icon: '⚠️', label: 'System does not recognize', value: 'The system does not recognize me' },
    { icon: '⚠️', label: 'Server Error 404/HTTP Error 504', value: 'Getting server error 404/http error 504 when I try accessing GHRIS' },
    { icon: '📅', label: 'Date of First Appointment', value: 'The date of first appointment I enter does not work' },
    { icon: '💡', label: 'Terms of Engangement', value: 'The terms of engagement I choose do not work' },
  ];

  return (
    <div className="chatbot-container w-[440px] h-[680px] rounded-3xl overflow-hidden flex flex-col relative">
      
      {/* Header with Blue/Green Gradient */}
      <div className="chatbot-header p-5">
        <div className="flex items-center gap-3">
          <KenyaFlag className="flag-small" />
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-white flex items-center gap-2">
              GHRIS Msaidizi
              <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-normal text-white flex items-center gap-1.5">
                <span className="status-dot"></span>
                Online
              </span>
            </h1>
            <p className="text-sm text-white/80">Your friendly GHRIS assistant</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-5 space-y-3.5 bg-gradient-to-b from-[#F8FAFC] to-[#F0F6FA]">
        {showWelcome && (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#6BA3D6] to-[#4A9B91] rounded-2xl flex items-center justify-center gentle-float shadow-soft">
              <KenyaFlag className="w-12 h-8" />
            </div>
            <h2 className="text-2xl font-semibold text-[#2A3A4A] mb-2">
              Karibu GHRIS Assistant! 👋
            </h2>
            <p className="text-[#4A5A6A] text-base mb-6 max-w-xs mx-auto">
              I'm here to help you with GHRIS service FAQs. How can I assist you today?
            </p>
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInput(reply.value);
                    setTimeout(handleSend, 100);
                  }}
                  className="welcome-grid-btn"
                >
                  <span className="text-2xl">{reply.icon}</span>
                  <span className="text-sm font-medium">{reply.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} bubble-enter`}
          >
            <div
              className={`max-w-[85%] px-5 py-3.5 rounded-2xl ${
                msg.sender === 'user'
                  ? 'message-bubble-user rounded-br-sm'
                  : 'message-bubble-bot rounded-bl-sm'
              }`}
            >
              {msg.sender === 'bot' && (
                <div className="flex items-center gap-2 mb-1.5">
                  <KenyaFlag className="flag-tiny" />
                  <span className="text-xs font-medium text-[#4A5A6A]">GHRIS Assistant</span>
                </div>
              )}
              <div className="text-sm leading-relaxed whitespace-pre-wrap">
                {msg.text}
              </div>
              <div className={`text-[10px] mt-1.5 ${
                msg.sender === 'user' ? 'text-white/70' : 'text-[#94A3B8]'
              }`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="message-bubble-bot rounded-2xl rounded-bl-sm px-5 py-3.5">
              <div className="flex items-center gap-2">
                <KenyaFlag className="flag-tiny" />
                <div className="typing-dots flex gap-1.5 ml-1">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div className="px-5 py-3 border-t border-[#E8EDF2] bg-[#F8FAFC]">
        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => {
                setInput(reply.value);
                setTimeout(handleSend, 100);
              }}
              className="quick-reply-btn flex-shrink-0 flex items-center gap-2"
            >
              <span className="text-lg">{reply.icon}</span>
              <span>{reply.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-5 border-t border-[#E8EDF2] bg-white">
        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your question here..."
            className="chat-input flex-1"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="send-btn"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
            <span className="hidden sm:inline">Send</span>
          </button>
        </div>
        <p className="text-xs text-[#94A3B8] mt-2 text-center">
          Press Enter to send · Shift+Enter for new line
        </p>
      </div>
    </div>
  );
};

export default ChatBot;