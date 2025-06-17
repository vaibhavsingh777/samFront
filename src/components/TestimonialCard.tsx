interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const TestimonialCard = ({ name, role, content, avatar }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p>"{content}"</p>
      </div>
      <div className="testimonial-author">
        <img src={avatar} alt={name} className="testimonial-avatar" />
        <div>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;