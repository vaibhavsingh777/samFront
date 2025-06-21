import EventCard from '../components/EventCard';

const PastEvents = () => {
  const events = [
    {
      id: 1,
      title: '𝕾𝖙𝖚𝖉𝖊𝖓𝖙 𝕬𝖑𝖚𝖒𝖓𝖎 𝕸𝖊𝖊𝖙 ',
      date: '2023-05-15',
      description: 'Our annual design conference featuring industry leaders',
      media: 'https://tse4.mm.bing.net/th?id=OIP.Biv7_klc3mR5lzUIAIJgPAHaEK&pid=Api&P=0&h=180', // Image URL
      location: '✧⋅⋆ MUMBAI CITY ⋆⋅✧'
    },
    {
      id: 2,
      title: '𝕾𝖙𝖚𝖉𝖊𝖓𝖙 𝕬𝖑𝖚𝖒𝖓𝖎 𝕸𝖊𝖊𝖙 ',
      date: '2023-03-22',
      description: 'Interactive workshop on modern color techniques',
      media: 'https://source.unsplash.com/random/600x400/?workshop', // Image URL
      location: 'San Francisco, CA'
    },
    {
      id: 3,
      title: '𝕾𝖙𝖚𝖉𝖊𝖓𝖙 𝕬𝖑𝖚𝖒𝖓𝖎 𝕸𝖊𝖊𝖙 ',
      date: '2023-01-10',
      description: 'Exploring the future of user experience design',
      media: 'https://source.unsplash.com/random/600x400/?ux', // Image URL
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