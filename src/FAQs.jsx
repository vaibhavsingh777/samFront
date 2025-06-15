import { useState } from 'react'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full flex justify-between items-center py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 h-7 flex items-center">
          {isOpen ? (
            <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

const FAQs = () => {
  const faqs = [
    {
      question: "How do I get started with your service?",
      answer: "Getting started is easy! Simply sign up for an account, choose your plan, and follow our onboarding process. We'll guide you through every step."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
    },
    {
      question: "Do you offer discounts for nonprofits?",
      answer: "We offer special pricing for registered nonprofits. Please contact our sales team with proof of your nonprofit status to learn more."
    },
    {
      question: "How do I contact customer support?",
      answer: "Our support team is available 24/7 via live chat in the app. You can also email us at support@example.com or call +1 (555) 123-4567 during business hours."
    }
  ]

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-indigo-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-6 max-w-2xl mx-auto text-indigo-100">
            Can't find the answer you're looking for? Our team is happy to help.
          </p>
          <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}

export default FAQs