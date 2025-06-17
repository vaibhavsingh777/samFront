const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aadit Sule",
      content: "Student Alumni Meet (SAM) organised in Pune by the Student Alumni Relations Cell (SARC), was truly  a memorable experience for me. I got a chance to meet the alumni of IITB even before I stepped on our campus. The alums shared stories from their time at IITB and gave us tips on making friends and balancing studies with fun activities.The alumni talked about how important it is to make friends and build memories during our time at IITB. They also encouraged us to explore our interests beyond academics. The event ended with alumni sharing their career journeys, offering us advice, and reminding us of the strong IITB network. It was an inspiring and 
        motivating day, making me feel proud and excited to be part of the IITB community",
      rating: 5
    },
    {
      id: 2,
      name: "Amit Bhartiya",
      role: "CTO",
      content: "The Student Alumni Meet was my first event connecting me to IIT Bombay and introducing me to SARC. It was an enriching experience interacting with numerous alumni from different batches and branches, who shared their diverse and extensive experiences. Engaging with alumni working in various career fields provided me with valuable insights. Additionally, learning about the upcoming campus life and culture was truly exciting. Watching alumni interact like old friends and share their college memories was incredibly inspiring.
"
",
      rating: 5
    },
    {
      id: 3,
      name: "Krish Gupta",
      role: "Small Business Owner",
      content: "I had the pleasure of attending a student-alumni meetup in Jaipur a year ago, held at an alumnus's house. The event was a wonderful opportunity for upcoming freshers to meet and interact with the alumni of IIT Bombay.The atmosphere was warm and welcoming, with a cozy setting that made it easy for everyone to mingle and have meaningful conversations. The host was gracious and ensured that everyone felt at home.The meetup itself was incredibly beneficial. It allowed the freshers to gain valuable insights and advice from the alumni, who shared their experiences and offered guidance on how to navigate the academic and social aspects of life at IIT Bombay. The alumni were approachable and eager to help, making the freshers feel supported and motivated.
",
      rating: 4
    }


      {
      id: 4,
      name: "Darsh Patel",
      role: "Small Business Owner",
      content: "I arrived at the 'Ideas to Impact Hub' in Pune for the IITB Student Alumni Meet (SAM). Surprisingly early, I met alumni from the 1980s. They welcomed me warmly, reminiscing about their IITB days. Over breakfast, we shared stories—alumni pride, hostel memories, and the changing times at IITB. They emphasized lifelong friendships, the evolving campus, and the importance of non-academic experiences. Discussions ranged from ragging to career advice, highlighting IITB's strong alumni network and global reputation. It was an inspiring start to my IITB journey!
",
      rating: 4
    }

        {
      id: 5,
      name: "Aniruddha Sharma",
      role: "Small Business Owner",
      content: "I attended sam in 2023 mid August, it was a great experience meeting people even before coming to insti, and most importantly meeting the alums . To my surprise I did find some amazing people there I didn't expect to attend . Definitely, it was a good experience.
",
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
