const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help and answer any questions you might have
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition">
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-indigo-600 text-white rounded-xl p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="mb-8">Feel free to reach out to us through any of these channels:</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-500 p-3 rounded-full mr-4">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Our Office</h3>
                    <p>123 Business Avenue</p>
                    <p>Suite 456, New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-500 p-3 rounded-full mr-4">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-500 p-3 rounded-full mr-4">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p>info@example.com</p>
                    <p>support@example.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                    <a 
                      key={social} 
                      href="#" 
                      className="bg-indigo-500 hover:bg-indigo-400 w-10 h-10 rounded-full flex items-center justify-center transition"
                    >
                      <span className="text-white">{social.charAt(0).toUpperCase()}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact