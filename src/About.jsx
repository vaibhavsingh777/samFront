const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">What is SAM</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Student Alumni Meet in the city is aimed to be a welcome event for IITB students. It is an opportunity for them to get guidance from the alumni of IIT Bombay. It will be an event where they will get to know ‘what life looks like after getting out of IIT and also what is the current scenario of life in the institute’ from the experiences of our esteemed alumni and the current students (our team), respectively.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">SAM Structure</h2>
            <p className="text-gray-600 mb-4">
             Speech by an alumnus (telling about the life after graduating from the institute with a broader perspective i.e. not specific to a particular field)
Presentation by the Chapter (in case of IITB, we have alumni chapters), briefing about the activities done round the year (the invited students as well as the current students will get to know about these)
Common Q&A session where the doubts of students and their parents will be addressed.
            </p>
          </div>

 <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Cities</h2>
            <p className="text-gray-600 mb-4">
             Mumbai
Pune
Jaipur
Delhi
Indore

            </p>
          </div>




          
          <div className="bg-indigo-100 rounded-xl p-8 h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold text-indigo-700">Innovation at Our Core</h3>
            </div>
          </div>
        </div>




          
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Jane Smith', 'John Doe', 'Alex Johnson'].map((name, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-indigo-200 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                  <p className="text-indigo-600 mb-3">Position Title</p>
                  <p className="text-gray-600">Short bio about this team member and their role in the company.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
