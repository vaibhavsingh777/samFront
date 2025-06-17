import EventCard from '../components/EventCard';

const PastEvents = () => {
  const events = [
    {
      id: 1,
      title: 'Design Conference 2023',
      date: 'May 15, 2023',
      description: 'Our annual design conference featuring industry leaders',
      image: 'https://source.unsplash.com/random/600x400/?conference',
      location: 'New York, NY'
    },
    {
      id: 2,
      title: 'Color Theory Workshop',
      date: 'March 22, 2023',
      description: 'Interactive workshop on modern color techniques',
      image: 'https://source.unsplash.com/random/600x400/?workshop',
      location: 'San Francisco, CA'
    },
    {
      id: 3,
      title: 'UX Design Summit',
      date: 'January 10, 2023',
      description: 'Exploring the future of user experience design',
      image: 'https://source.unsplash.com/random/600x400/?ux',
      location: 'Chicago, IL'
    }
  ];

  return (
    <div className="page events-page">
      <div className="page-header">
        <h1>Our Past Events</h1>
        <p>Relive our most memorable moments</p>
      </div>
      <div className="events-container">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default PastEvents;