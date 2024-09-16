
import { Accordion } from 'react-bootstrap';
 // Ensure Bootstrap CSS is imported

const FAQ = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-4 text-dark font-weight-bold">Your Marketing Questions, Answered</h2>
        <p className="text-muted">Find answers to the most frequently asked questions about our social media marketing services.</p>
      </div>

      <Accordion defaultActiveKey="0" className="accordion-flush">
        <Accordion.Item eventKey="0" className="border-0 rounded-lg shadow-sm mb-3">
          <Accordion.Header className="bg-light text-dark rounded-lg py-2 px-3">
            Can I start with a small budget?
          </Accordion.Header>
          <Accordion.Body className="p-4">
            Absolutely! We offer flexible packages to suit different budgets. We'll work with you to maximize your ROI regardless of the size of your budget.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className="border-0 rounded-lg shadow-sm mb-3">
          <Accordion.Header className="bg-light text-dark rounded-lg py-2 px-3">
            How long will it take to see results?
          </Accordion.Header>
          <Accordion.Body className="p-4">
            Results can vary depending on your goals and the current state of your social media presence. Typically, clients start seeing noticeable improvements within 2-3 months.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className="border-0 rounded-lg shadow-sm mb-3">
          <Accordion.Header className="bg-light text-dark rounded-lg py-2 px-3">
            What social media platforms do you work with?
          </Accordion.Header>
          <Accordion.Body className="p-4">
            We work with a wide range of platforms including Facebook, Instagram, Twitter, LinkedIn, and TikTok. We tailor our strategies to fit the platforms that best reach your target audience.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className="border-0 rounded-lg shadow-sm mb-3">
          <Accordion.Header className="bg-light text-dark rounded-lg py-2 px-3">
            How do you measure the success of your campaigns?
          </Accordion.Header>
          <Accordion.Body className="p-4">
            We use various metrics such as engagement rates, click-through rates, conversion rates, and return on investment (ROI) to measure the success of our campaigns. We provide regular reports to keep you updated on performance.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" className="border-0 rounded-lg shadow-sm mb-3">
          <Accordion.Header className="bg-light text-dark rounded-lg py-2 px-3">
            Can you help with content creation?
          </Accordion.Header>
          <Accordion.Body className="p-4">
            Yes, we offer comprehensive content creation services, including graphic design, copywriting, and video production. Our team ensures that all content aligns with your brand and engages your target audience.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5" className="border-0 rounded-lg shadow-sm mb-3">
          <Accordion.Header className="bg-light text-dark rounded-lg py-2 px-3">
            What happens if I’m not satisfied with the results?
          </Accordion.Header>
          <Accordion.Body className="p-4">
            Your satisfaction is our priority. If you're not happy with the results, we offer a review and optimization process to address any concerns. We also provide ongoing support to ensure your objectives are met.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
