import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hs-accordion bg-neutral-900 rounded-xl p-6 mb-4 border border-neutral-800">
      <button
        className="flex items-center justify-between w-full text-left text-white font-semibold text-lg transition hover:text-gray-300"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}

        <svg
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"} w-5 h-5 text-gray-400`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-3 text-gray-400 transition-all duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {

  // UPDATED: SupportTech X FAQs
  const faqs = [
    {
      question: "What services does SupportTech X provide?",
      answer:
        "We offer domain & hosting setup, website development, server configuration, networking, CCTV setup, email integration, cloud backup, and on-site IT support anywhere in Hyderabad."
    },
    {
      question: "Do you offer on-site technical support?",
      answer:
        "Yes! Our technicians can visit your office or shop for device installation, troubleshooting, network setup, or repairs. On-site support is available across all major areas of Hyderabad."
    },
    {
      question: "How long does it take to get my website live?",
      answer:
        "A basic business website can be completed within 3–5 days. More complex websites may take 1–3 weeks, depending on design, content, and functionality requirements."
    },
    {
      question: "Can you help me purchase and set up a domain & hosting?",
      answer:
        "Absolutely. We recommend the best domain name, purchase it for you, configure hosting, set up SSL, email accounts, and make your website fully ready to go live."
    },
    {
      question: "Do you offer maintenance or AMC (Annual Maintenance Contract)?",
      answer:
        "Yes, we provide monthly and annual maintenance plans which include updates, backups, security monitoring, and priority support—ideal for businesses needing ongoing IT care."
    },
    {
      question: "How does your pricing work?",
      answer:
        "We keep pricing transparent and affordable for local businesses. Services like domain/hosting have fixed costs, while website development and on-site support depend on the project scope. Contact us for a custom quote."
    },
    {
      question: "What is your response time for support requests?",
      answer:
        "Most issues are addressed within 1–2 hours during working hours. For emergencies, we offer priority support depending on your plan."
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-4xl leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-gray-400">
          Everything you need to know about SupportTech X and our IT services.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

    </div>
  );
};

export default FAQ;
