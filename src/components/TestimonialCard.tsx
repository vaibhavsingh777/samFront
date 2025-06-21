interface TestimonialCardProps {
  id?: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const TestimonialCard = ({ id, name, role, content, avatar }: TestimonialCardProps) => {
  return (
    <div 
      id={id} 
      className="relative bg-blue-900 bg-opacity-80 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all h-full border-2 border-blue-600"
    >
      {/* Quote icon */}
      <div className="absolute top-6 left-6 text-blue-300 opacity-40 text-6xl">"</div>
      
      <div className="testimonial-content mb-8 relative z-10">
        <p className="text-white text-xl leading-relaxed">"{content}"</p>
      </div>
      
      <div className="testimonial-author flex items-center border-t-2 border-blue-700 pt-6">
        <img 
          src={avatar} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover border-4 border-white mr-5 shadow-md"
        />
        <div>
          <h4 className="text-white font-bold text-2xl">{name}</h4>
          <p className="text-blue-200 text-lg mt-1">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;