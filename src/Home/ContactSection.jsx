const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2 bg-indigo-600 text-white p-8">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="mb-6">Fill out the form and our team will get back to you within 24 hours.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="mr-3">📧</span>
                  <span>contact@example.com</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">🏢</span>
                  <span>123 Business Ave, Suite 456</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection