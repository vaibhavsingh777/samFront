const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "This platform has transformed how we do business. The results were immediate and impressive.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      content: "Incredible service with outstanding support. Highly recommended for any business.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Wilson",
      role: "Small Business Owner",
      content: "Affordable yet powerful solution that helped us compete with bigger players.",
      rating: 4
    }
  ]

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">What Our Clients Say</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-indigo-600">👤</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-indigo-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-indigo-600 text-white rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to join our happy customers?</h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Sign up today and experience the difference for yourself
          </p>
          <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
            Get Started Now
          </button>
        </section>
      </div>
    </div>
  )
}

export default Testimonials