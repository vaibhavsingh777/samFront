export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface NavItem {
  path: string;
  label: string;
}