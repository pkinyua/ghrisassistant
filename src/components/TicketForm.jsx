import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const TicketForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const routingRules = [
  {
    keywords: ['wrong id', 'surname', 'details'],
    issueType: 'Personal Details Issue',
    officerEmail: 'dennhome@gmail.com',
    ccEmails: ['ikiara_faith02@yahoo.com', 'maureenakoth3@gmail.com', 'muriithi.mwai@ict.go.ke' , 'pius.is.piugit2@gmail.com'],
  },
  {
    keywords: ['system does not recognize', 'registration', 'reset'],
    issueType: 'Registration & Reset',
    officerEmail: 'dennhome@gmail.com',
    ccEmails: ['ikiara_faith02@yahoo.com', 'maureenakoth3@gmail.com', 'muriithi.mwai@ict.go.ke' , 'pius.is.piugit2@gmail.com'],
  },
  {
    keywords: ['terms of engagement', 'probation'],
    issueType: 'Engagement Terms',
    officerEmail: 'dennhome@gmail.com',
    ccEmails: ['ikiara_faith02@yahoo.com', 'maureenakoth3@gmail.com', 'muriithi.mwai@ict.go.ke' , 'pius.is.piugit2@gmail.com'],
  },
];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    const messageText = form.current.ticket_message.value.trim();
    const lowerMessage = messageText.toLowerCase();
    const userName = form.current.user_name.value.trim();
    const IDnum = form.current.id_num.value.trim();
    const UPNnum = form.current.upn_num.value.trim();
    const phoneNumber = form.current.phone_num.value.trim();
    const replyemail = form.current.reply_email.value.trim();
    
    

    let matchedRule = null;
    for (const rule of routingRules) {
      if (rule.keywords.some((keyword) => lowerMessage.includes(keyword))) {
        matchedRule = rule;
        break;
      }
    }

    if (!matchedRule) {
  matchedRule = {
    issueType: 'General Inquiry',
    officerEmail: 'dennhome@gmail.com',
    ccEmails: ['ikiara_faith02@yahoo.com', 'maureenakoth3@gmail.com', 'muriithi.mwai@ict.go.ke' , 'pius.is.piugit2@gmail.com'],
  };
}

const allCCs = (matchedRule.ccEmails || []).join(', ');
    
const templateParams = {
  issue_type: matchedRule.issueType,
  message: messageText,
  to_email: matchedRule.officerEmail,
  from_name: userName,
  id_num: IDnum,
  upn: UPNnum,
  phone_no: phoneNumber,
  email: replyemail,
  cc_email: allCCs,
  
};

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('✅ Ticket sent successfully! An officer will be in touch.');
      form.current.reset();
    } catch (error) {
      console.error('EmailJS Full Error:', error);
      setStatus('❌ Failed to send ticket. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[440px] mt-4">
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-3.5 bg-white border-2 border-[#E1EDF5] rounded-2xl hover:border-[#6BA3D6] transition-all duration-200 shadow-soft"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-[#2A3A4A]">
          🎫 {isOpen ? 'Close Ticket Form' : 'Open a Support Ticket'}
        </span>
        <span className={`text-[#4A90D9] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {/* Collapsible Form */}
      {isOpen && (
        <div className="mt-3 border-2 border-[#E1EDF5] rounded-2xl bg-white shadow-soft bubble-enter overflow-hidden">
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col">
            {/* Scrollable Fields */}
            <div className="p-4 sm:p-5 space-y-3 overflow-y-auto" style={{ maxHeight: 'min(500px, 60vh)' }}>
              <h3 className="font-semibold text-[#2A3A4A] mb-2">
                Open a Support Ticket
              </h3>

              <input
                type="text"
                name="user_name"
                placeholder="Enter your name..."
                className="w-full px-4 py-2.5 text-sm border-2 border-[#E8EDF2] rounded-xl focus:outline-none focus:border-[#6BA3D6] focus:ring-2 focus:ring-[#6BA3D6]/20 transition-all bg-[#F8FAFC]"
                required
              />
              <input
                type="text"
                name="id_num"
                placeholder="Enter ID number..."
                className="w-full px-4 py-2.5 text-sm border-2 border-[#E8EDF2] rounded-xl focus:outline-none focus:border-[#6BA3D6] focus:ring-2 focus:ring-[#6BA3D6]/20 transition-all bg-[#F8FAFC]"
                required
              />
              <input
                type="text"
                name="upn_num"
                placeholder="Enter personal number..."
                className="w-full px-4 py-2.5 text-sm border-2 border-[#E8EDF2] rounded-xl focus:outline-none focus:border-[#6BA3D6] focus:ring-2 focus:ring-[#6BA3D6]/20 transition-all bg-[#F8FAFC]"
                required
              />
              <input
                type="tel"
                name="phone_num"
                placeholder="Enter phone number..."
                className="w-full px-4 py-2.5 text-sm border-2 border-[#E8EDF2] rounded-xl focus:outline-none focus:border-[#6BA3D6] focus:ring-2 focus:ring-[#6BA3D6]/20 transition-all bg-[#F8FAFC]"
                required
              />
              <input
                type="email"
                name="reply_email"
                placeholder="Enter your email..."
                className="w-full px-4 py-2.5 text-sm border-2 border-[#E8EDF2] rounded-xl focus:outline-none focus:border-[#6BA3D6] focus:ring-2 focus:ring-[#6BA3D6]/20 transition-all bg-[#F8FAFC]"
                required
              />
              
              <textarea
                name="ticket_message"
                placeholder="Describe your concern (e.g., password reset, payslip issue)..."
                className="w-full px-4 py-3 text-sm border-2 border-[#E8EDF2] rounded-xl focus:outline-none focus:border-[#6BA3D6] focus:ring-2 focus:ring-[#6BA3D6]/20 transition-all resize-none bg-[#F8FAFC]"
                rows="4"
                required
              />
            </div>

            {/* Fixed Footer */}
            <div className="p-5 border-t border-[#E8EDF2] bg-white">
              <button type="submit"
                disabled={isLoading}
                className="w-full px-4 py-3 bg-gradient-to-r from-[#6BA3D6] to-[#4A9B91] text-white font-semibold text-sm rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50"
              >
                {isLoading ? 'Sending...' : '📩 Send Ticket'}
              </button>

              {status && 
                <p className={`text-sm text-center mt-3 ${
                  status.startsWith('✅') ? 'text-[#3A7B73]' : 'text-[#B54A4A]'
                }`}>
                  {status}
                </p>
              }
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TicketForm;