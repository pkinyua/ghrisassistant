import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const TicketForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Define routing rules based on keywords
  const routingRules = [
    {
      keywords: ['wrong ID', 'surname', 'details'],
      issueType: 'Personal Details Issue',
      officerEmail: 'pius.is.piugit2@gmail.com', // Replace with actual officer email
    },
    {
      keywords: ['system does not recognize', 'registration', 'reset'],
      issueType: 'Registration & Reset',
      officerEmail: 'pius.is.piugit2@gmail.com',
    },
    {
      keywords: ['terms of engagement', 'probation',],
      issueType: 'Engagement terms',
      officerEmail: 'pius.is.piugit2@gmail.com',
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
    const replycc = form.current.reply_cc.value.trim();
    const replybcc = form.current.reply_bcc.value.trim();

    // Find matching officer
    let matchedRule = null;
    for (const rule of routingRules) {
      if (rule.keywords.some((keyword) => lowerMessage.includes(keyword))) {
        matchedRule = rule;
        break;
      }
    }

    // Fallback to general support
    if (!matchedRule) {
      matchedRule = {
        issueType: 'General Inquiry',
        officerEmail: 'pius.is.piugit2@gmail.com',
      };
    }

    // Prepare template parameters
    const templateParams = {
      issue_type: matchedRule.issueType,
      message: messageText,
      to_email: matchedRule.officerEmail,
      from_name: userName,
      id_num: IDnum,
      upn: UPNnum,
      phone_no: phoneNumber,
      email: replyemail,
      cc_email: replycc,
      bcc_email: replybcc,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('✅ Ticket sent successfully! An officer will be in touch.');
      form.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('❌ Failed to send ticket. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="font-semibold text-[#2A3A4A] mb-2">Open a Support Ticket</h3>
        <input
        type = "text"
        name="user_name"
        placeholder="Enter your name..."
        className="w-full p-2 border rounded-md focus:outline-none focus:border-[#4A90D9]"
        required
      />
      <input
      type = "text"
        name="id_num"
        placeholder="Enter ID number..."
        className="w-full p-2 border rounded-md focus:outline-none focus:border-[#4A90D9]"
        required
      />
      <input
      type = "text"
        name="upn_num"
        placeholder="Enter personal number..."
        className="w-full p-2 border rounded-md focus:outline-none focus:border-[#4A90D9]"
        required
      />
      <input
      type = "text"
        name="phone_num"
        placeholder="Enter phone number..."
        className="w-full p-2 border rounded-md focus:outline-none focus:border-[#4A90D9]"
        required
      />
      <input
      type = "text"
        name="reply_email"
        placeholder="Enter your email..."
        className="w-full p-2 border rounded-md focus:outline-none focus:border-[#4A90D9]"
        required 
      />
      <input
      type = "text"
        name="reply_cc"
        placeholder="Enter CC email..."
        className="w-full p-2 border rounded-md focus:outline-none focus:border-[#4A90D9]"
      />
      <input
      type = "text"
        name="reply_bcc"
        placeholder="Enter BCC email..."
        className="w-full p-2 border rounded-md focus:outline-none focus:border-[#4A90D9]"
      />
      <textarea
        name="ticket_message"
        placeholder="Describe your concern (e.g., password reset, payslip issue)..."
        className="w-full p-2 border rounded-md focus:outline-none focus:border-[#4A90D9]"
        rows="3"
        required
      />
      <button
        type="submit"
        disabled={isLoading}
        className="mt-2 px-4 py-2 bg-[#4A90D9] text-white rounded-lg hover:bg-[#3A78B8] transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Sending...' : 'Send Ticket'}
      </button>
      {status && <p className="mt-2 text-sm text-gray-600">{status}</p>}
    </form>
  );
};

export default TicketForm;