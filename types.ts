
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Package {
  id: string;
  name: string;
  category: 'Pilgrimage' | 'Hill Station' | 'City' | 'Heritage';
  image: string;
  description: string;
  location: string;
}

export interface SeasonalSpecial {
  id: string;
  title: string;
  months: string;
  description: string;
  bgClass: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface BookingDetails {
  name?: string;
  destination?: string;
  season?: string;
  date?: string;
  passengers?: string;
  vehicle?: string;
}
