import { Link } from 'react-router-dom';

interface NavItem {
  path: string;
  name: string;
}

const navItems: NavItem[] = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/pastevents', name: 'Past Events' },
  { path: '/testimonials', name: 'Testimonials' },
  { path: '/faqs', name: 'FAQs' },
  { path: '/contact', name: 'Contact' }
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ReconnectHub
        </Link>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link to={item.path} className="nav-links">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;