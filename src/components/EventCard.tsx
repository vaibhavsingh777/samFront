import { Link } from 'react-router-dom';

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  description: string;
  media: string; // Only images now
  location: string;
}

const EventCard = ({ id, title, date, description, media, location }: EventCardProps) => {
  const eventDate = new Date(date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString('default', { month: 'short' });

  return (
    <div className="event-card">
      <div className="event-media-container">
        {/* Only image is rendered now */}
        <img src={media} alt={title} className="event-image" />
        <div className="event-date">
          <span className="event-day">{day}</span>
          <span className="event-month">{month}</span>
        </div>
      </div>
      <div className="event-content">
        <h3>{title}</h3>
        <p className="location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          {location}
        </p>
        <p>{description}</p>
        <Link to={`/events/${id}`} className="event-link">
          View Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;