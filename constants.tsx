
import { Service, Package, SeasonalSpecial } from './types';

// Export CONTACT_INFO for use in Hero, Contact, and Footer components
export const CONTACT_INFO = {
  phone: '+91 94414 51026',
  whatsapp: '+91 94414 51026',
  email: 'sridurga.sdt@gmail.com',
  address: 'Bakavani Thota, Near HP Gas Office, Madanapalle, Andhra Pradesh 517325'
};

export const SERVICES: Service[] = [
  { id: '1', title: 'Pilgrimage & Temple Tours', description: 'Expertly guided trips to sacred sites across South India and major pilgrim hubs in North India.', icon: '🕌' },
  { id: '2', title: 'Marriage Transportation', description: 'Reliable group transport for weddings and events with high-capacity luxury buses.', icon: '💍' },
  { id: '3', title: 'Ayyappa / Sabarimala Specials', description: 'Dedicated season-specific pilgrimage support for the holy Sabarimala yatra.', icon: '🙏' },
  { id: '4', title: 'Family & Group Tours', description: 'Comfortable vacation planning for your loved ones to any destination in India.', icon: '👨‍👩‍👧‍👦' },
  { id: '5', title: 'Corporate Travel', description: 'Professional office commute, team outings, and executive airport transfers.', icon: '💼' },
  { id: '6', title: 'Airport Transfers', description: 'Punctual pickups from Bangalore, Chennai, Hyderabad, and all major airports.', icon: '✈️' },
];

export const PACKAGES: Package[] = [
  // Pilgrimage
  { 
    id: 'p1', 
    name: 'Tirupati Tirumala', 
    category: 'Pilgrimage', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1S185C6gUp1q2TAt_RqFGEfRtcR4hR96__w&s',
    description: 'Special Darshan packages to the abode of Lord Venkateswara.',
    location: 'Tirumala, Andhra Pradesh'
  },
  { 
    id: 'p_sabarimala', 
    name: 'Sabarimala Yatra', 
    category: 'Pilgrimage', 
    image: 'https://www.indiantempletour.com/wp-content/uploads/2022/08/Sabarimala-Temple.jpg',
    description: 'Dedicated seasonal trips for Ayyappa Swamy devotees.',
    location: 'Pathanamthitta, Kerala'
  },
  { 
    id: 'p_arunachalam', 
    name: 'Arunachalam Giri Pradakshina', 
    category: 'Pilgrimage', 
    image: 'https://bunny-wp-pullzone-n9klvfg340.b-cdn.net/wp-content/uploads/2023/04/Arunachalam-Giri-PRadakshinam-2023-1.jpg',
    description: 'Experience the spiritual walk around the holy mountain of Shiva.',
    location: 'Tiruvannamalai, Tamil Nadu'
  },
  { 
    id: 'p_srisailam', 
    name: 'Srisailam Mallikarjuna', 
    category: 'Pilgrimage', 
    image: 'https://www.templewalks.com/wp-content/uploads/2025/09/srisailam-mallikarjuna-temple.png',
    description: 'Visit the sacred Jyotirlinga and Shakti Peetha on the Nallamala hills.',
    location: 'Srisailam, Andhra Pradesh'
  },
  { 
    id: 'p_kanipakam', 
    name: 'Kanipakam Varasiddhi', 
    category: 'Pilgrimage', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwx3twOcpyL-qRlbbsTg7P5-MKPIIlpqUhA&s',
    description: 'Seek blessings from Lord Ganesha at the famous self-manifested temple.',
    location: 'Chittoor, Andhra Pradesh'
  },
  { 
    id: 'p_shirdi', 
    name: 'Shirdi Sai Baba', 
    category: 'Pilgrimage', 
    image: 'https://blessingsonthenet.com/img/gallery/aim_bn_1_1308574858.jpg',
    description: 'A spiritual journey to the Samadhi Mandir of Sai Baba.',
    location: 'Shirdi, Maharashtra'
  },
  { 
    id: 'p_hampi', 
    name: 'Hampi Heritage', 
    category: 'Heritage', 
    image: 'https://revolvingcompass.com/wp/wp-content/uploads/2024/02/VijayaVittala_3.jpg',
    description: 'Explore the ruins of the Vijayanagara Empire and ancient stone temples.',
    location: 'Hampi, Karnataka'
  },
  { 
    id: 'p_lepakshi', 
    name: 'Lepakshi Nandi', 
    category: 'Heritage', 
    image: 'https://images.unsplash.com/photo-1603222585232-a567637f90f3?auto=format&fit=crop&q=80&w=1000',
    description: 'Witness the hanging pillar and the giant monolithic bull.',
    location: 'Anantapur, Andhra Pradesh'
  },
  
  // Hill Stations
  { 
    id: 'p2', 
    name: 'Ooty (Udhagamandalam)', 
    category: 'Hill Station', 
    image: 'https://images.unsplash.com/photo-1590766948562-0f696a5bbca7?auto=format&fit=crop&q=80&w=1000',
    description: 'The Queen of Hill Stations in the heart of the Nilgiris.',
    location: 'Tamil Nadu'
  },
  { 
    id: 'p_kodai', 
    name: 'Kodaikanal Lake', 
    category: 'Hill Station', 
    image: 'https://images.unsplash.com/photo-1582650859079-ee8013038597?auto=format&fit=crop&q=80&w=1000',
    description: 'The Princess of Hill Stations with its mystical mists and lakes.',
    location: 'Tamil Nadu'
  },
  { 
    id: 'p_munnar', 
    name: 'Munnar Tea Gardens', 
    category: 'Hill Station', 
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=1000',
    description: 'Rolling hills covered in lush green tea plantations.',
    location: 'Kerala'
  },
  { 
    id: 'p_coorg', 
    name: 'Coorg (Madikeri)', 
    category: 'Hill Station', 
    image: 'https://images.unsplash.com/photo-1590050752117-23a9d7fc6f3d?auto=format&fit=crop&q=80&w=1000',
    description: 'The Scotland of India, famous for coffee and scenic beauty.',
    location: 'Karnataka'
  },
  { 
    id: 'p_araku', 
    name: 'Araku Valley', 
    category: 'Hill Station', 
    image: 'https://images.unsplash.com/photo-1623945532588-46700c5c4e40?auto=format&fit=crop&q=80&w=1000',
    description: 'Tribal culture, coffee plantations, and the Borra Caves.',
    location: 'Visakhapatnam, AP'
  },

  // City & Leisure
  { 
    id: 'p_goa', 
    name: 'Goa Beaches', 
    category: 'City', 
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1000',
    description: 'Sun-kissed beaches and vibrant coastal culture.',
    location: 'Goa'
  },
  { 
    id: 'p_bangalore', 
    name: 'Bangalore City', 
    category: 'City', 
    image: 'https://images.unsplash.com/photo-1599930333423-56041c9954bb?auto=format&fit=crop&q=80&w=1000',
    description: 'The Silicon Valley of India with its lush parks and nightlife.',
    location: 'Karnataka'
  },
  { 
    id: 'p_mysuru', 
    name: 'Mysuru Palace', 
    category: 'Heritage', 
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1000',
    description: 'The Royal City of Palaces and Silk.',
    location: 'Karnataka'
  },
  { 
    id: 'p_vizag', 
    name: 'Vizag RK Beach', 
    category: 'City', 
    image: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&q=80&w=1000',
    description: 'The Jewel of the East Coast with pristine shorelines.',
    location: 'Andhra Pradesh'
  },
  { 
    id: 'p_hyd', 
    name: 'Hyderabad Charminar', 
    category: 'City', 
    image: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&q=80&w=1000',
    description: 'City of Pearls and world-famous Biryani.',
    location: 'Telangana'
  },
];

export const SEASONAL_SPECIALS: SeasonalSpecial[] = [
  {
    id: 's1',
    title: 'Sabarimala Season',
    months: 'Nov - Jan',
    description: 'Dedicated fleet for Ayyappa devotees with specialized drivers familiar with the terrain and traditions.',
    bgClass: 'bg-orange-600'
  },
  {
    id: 's2',
    title: 'Summer Vacations',
    months: 'Apr - June',
    description: 'Escape the heat with our cool hill station retreats to Ooty, Munnar, and the Himalayan circuits.',
    bgClass: 'bg-blue-600'
  },
  {
    id: 's3',
    title: 'Wedding Season',
    months: 'Year Round',
    description: 'High-capacity luxury buses and premium cars for wedding guest transportation and events.',
    bgClass: 'bg-red-600'
  }
];
