import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hs-accordion hs-accordion-active:bg-gray-800 rounded-xl p-6 dark:hs-accordion-active:bg-gray-800">
      <button
        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-white rounded-lg transition hover:text-gray-400 focus:outline-none focus:text-gray-400"
        aria-expanded={isOpen}
        onClick={toggleAccordion}
      >
        {question}
        <svg
          className={`hs-accordion-active:${!isOpen ? 'hidden' : 'block'} shrink-0 size-5 text-gray-400 group-hover:text-gray-300`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={isOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
        </svg>
      </button>
      <div
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How does Successor SMMA help businesses grow on social media?',
      answer:
        'At Successor SMMA, we craft personalized strategies to boost your brand’s online presence. Our team uses data-driven insights, trend analysis, and creative content to connect you with your target audience. Whether it’s Instagram, LinkedIn, or Facebook, we create campaigns that engage and convert followers into loyal customers.',
    },
    {
      question: 'What types of businesses do you specialize in?',
      answer:
        'We work with a diverse range of industries, from startups to established enterprises. Our expertise spans tech companies, e-commerce brands, personal development coaches, real estate agencies, and more. No matter the industry, we tailor our approach to meet your unique business needs and goals.',
    },
    {
      question: 'How do you ensure the content aligns with my brand’s vision?',
      answer:
        'We prioritize understanding your brand’s identity, mission, and values before launching any campaign. Our strategy begins with in-depth consultations, competitor analysis, and audience profiling, ensuring that every piece of content reflects your brand’s voice and resonates with your target market.',
    },
    {
      question: 'Can I see results from your services quickly?',
      answer:
        'While social media growth requires consistency and time, our strategies focus on delivering measurable results within the first few months. We provide regular performance reports, monitor engagement, and adjust campaigns as needed to maximize your ROI and accelerate growth.',
    },
    {
      question: 'What services do you offer beyond social media management?',
      answer:
        'In addition to managing your social media accounts, we offer comprehensive digital marketing solutions, including paid ad campaigns, influencer partnerships, content creation, video production, and website optimization. Our holistic approach ensures that every aspect of your digital presence is covered.',
    },
    {
      question: 'How transparent is your reporting process?',
      answer:
        'Transparency is key at Successor SMMA. We provide detailed reports that break down your social media performance, including engagement rates, follower growth, ad spend, and conversions. These reports allow you to track your progress and make informed decisions about your digital strategy.',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">
          Your Questions About Social Media Marketing, Answered
        </h2>
        <p className="mt-1 text-gray-400">
          Discover how Successor SMMA can help elevate your brand’s social media game.
        </p>
      </div>
      {/* FAQ Items */}
      <div className="max-w-2xl mx-auto">
        <div className="hs-accordion-group">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
