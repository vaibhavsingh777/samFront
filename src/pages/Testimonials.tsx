import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      id: 'client-1',
      name: 'Virat Kohli',
      role: 'Batsman',
      content: 'This website completely transformed our online presence. The design is stunning and the user experience is flawless.',
      avatar: 'https://tse1.mm.bing.net/th?id=OIP._0efBTZ4QRLdOxxsbqK9nwHaEK&pid=Api&P=0&h=180'
    },
    {
      id: 'client-2',
      name: 'Rohit Sharma ',
      role: 'Batsman',
      content: 'The most visually impressive website we have ever worked with. The team delivered beyond our expectations.',
      avatar: 'https://tse4.mm.bing.net/th?id=OIP.OQRtviBccSwvgOWNUXB4VQHaEK&pid=Api&P=0&h=180'
    },
    {
      id: 'client-3',
      name: 'MS Dhoni',
      role: 'Wicket keeper and Batsman',
      content: 'Our engagement metrics improved by 300% after launching this beautiful website. Absolutely worth it!',
      avatar: 'https://tse4.mm.bing.net/th?id=OIP.llCY_xF0RsDNEodOOq7i7QHaE0&pid=Api&P=0&h=180'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1A237E' }}>
      {/* White top accent */}
      <div className="h-3 bg-white"></div>

      <main className="flex-grow container mx-auto px-4 py-16">
        <header id="testimonials-header" className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6">BEST INTERACTIONS WITH STUDENTS</h1>
          <p className="text-2xl text-blue-100">Hear what industry leaders say about our work</p>
        </header>

        <section id="testimonials-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} id={testimonial.id} className="testimonial-wrapper">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </section>
      </main>

      {/* White bottom accent */}
      <div className="h-3 bg-white"></div>
    </div>
  );
};

export default Testimonials;