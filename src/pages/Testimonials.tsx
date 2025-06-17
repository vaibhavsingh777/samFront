import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      content: 'This website completely transformed our online presence. The design is stunning and the user experience is flawless.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      content: 'The most visually impressive website we have ever worked with. The team delivered beyond our expectations.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'CEO',
      content: 'Our engagement metrics improved by 300% after launching this beautiful website. Absolutely worth it!',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5
    }
  ];

  return (
    <div className="page testimonials-page">
      <div className="page-header">
        <h1>What Our Clients Say</h1>
        <p>Hear from people who have experienced our work</p>
      </div>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;