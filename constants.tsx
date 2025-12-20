import { Service, Package, SeasonalSpecial } from './types';

export const CONTACT_INFO = {
  phone: '+91 94414 51026',
  whatsapp: '+91 94414 51026',
  email: 'sridurga.sdt@gmail.com',
  address: 'Bakavani Thota, Near HP Gas Office, Madanapalle, Andhra Pradesh 517325'
};

export const SERVICES: Service[] = [
  { id: '1', title: 'Pilgrimage & Temple Tours', description: 'Expertly guided trips to sacred sites across South India and major pilgrim hubs in North India.', icon: 'temple' },
  { id: '2', title: 'Marriage Transportation', description: 'Reliable group transport for weddings and events with high-capacity luxury buses.', icon: 'wedding' },
  { id: '3', title: 'Ayyappa / Sabarimala Specials', description: 'Dedicated season-specific pilgrimage support for the holy Sabarimala yatra.', icon: 'spiritual' },
  { id: '4', title: 'Family & Group Tours', description: 'Comfortable vacation planning for your loved ones to any destination in India.', icon: 'family' },
  { id: '5', title: 'Corporate Travel', description: 'Professional office commute, team outings, and executive airport transfers.', icon: 'corporate' },
  { id: '6', title: 'Airport Transfers', description: 'Punctual pickups from Bangalore, Chennai, Hyderabad, and all major airports.', icon: 'airport' },
];

export const PACKAGES: Package[] = [
  {
    id: 'p1',
    name: 'Tirupati Tirumala',
    category: 'Pilgrimage',
    image: 'https://www.southtourism.in/assets/images/destination/andhra/places/tirupathi.webp',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNv0JchEBq04dZtYpsuHn6jSgjuiXz5Y-6g&s',
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
    image: 'https://newsmeter.in/h-upload/2022/04/04/319025-new-project-93.webp',
    description: 'Witness the hanging pillar and the giant monolithic bull.',
    location: 'Anantapur, Andhra Pradesh'
  },
  {
    id: 'p2',
    name: 'Ooty (Udhagamandalam)',
    category: 'Hill Station',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_11/313024/339512.jpg',
    description: 'The Queen of Hill Stations in the heart of the Nilgiris.',
    location: 'Tamil Nadu'
  },
  {
    id: 'p_kodai',
    name: 'Kodaikanal Lake',
    category: 'Hill Station',
    image: 'https://curlytales.com/wp-content/uploads/2025/07/Untitled-design-46.jpg',
    description: 'The Princess of Hill Stations with its mystical mists and lakes.',
    location: 'Tamil Nadu'
  },
  {
    id: 'p_munnar',
    name: 'Munnar Tea Gardens',
    category: 'Hill Station',
    image: 'https://www.keralaruchi.com/public/uploads/places/munnar.jpg',
    description: 'Rolling hills covered in lush green tea plantations.',
    location: 'Kerala'
  },
  {
    id: 'p_coorg',
    name: 'Coorg (Madikeri)',
    category: 'Hill Station',
    image: 'https://www.explorebees.com/uploads/madikeri%20or%20coorg%20(10).jpg',
    description: 'The Scotland of India, famous for coffee and scenic beauty.',
    location: 'Karnataka'
  },
  {
    id: 'p_araku',
    name: 'Araku Valley',
    category: 'Hill Station',
    image: 'https://blogs.tripzygo.in/wp-content/uploads/2025/03/things-to-do-in-araku-valley.jpg',
    description: 'Tribal culture, coffee plantations, and the Borra Caves.',
    location: 'Visakhapatnam, AP'
  },
  {
    id: 'p_goa',
    name: 'Goa Beaches',
    category: 'City',
    image: 'https://marquishotels.in/wp-content/uploads/2019/06/North_Goa_Beach.jpg',
    description: 'Sun-kissed beaches and vibrant coastal culture.',
    location: 'Goa'
  },
  {
    id: 'p_bangalore',
    name: 'Bangalore City',
    category: 'City',
    image: 'https://www.nambiardistrict25.info/images/nambiar/bangalore.webp',
    description: 'The Silicon Valley of India with its lush parks and nightlife.',
    location: 'Karnataka'
  },
  {
    id: 'p_mysuru',
    name: 'Mysuru Palace',
    category: 'Heritage',
    image: 'https://hblimg.mmtcdn.com/content/hubble/img/mysore/mmt/activities/m_activities_Mysore_Mysore%20Palace_l_386_579.jpg',
    description: 'The Royal City of Palaces and Silk.',
    location: 'Karnataka'
  },
  {
    id: 'p_vizag',
    name: 'Vizag RK Beach',
    category: 'City',
    image: 'https://pub-6637fac653e84bcf92528aee66112f75.r2.dev/images/S6c7HFG9nSCqwwhaLj0YExnc74W5aAv3S3yl2qvs.jpg',
    description: 'The Jewel of the East Coast with pristine shorelines.',
    location: 'Andhra Pradesh'
  },
  {
    id: 'p_hyd',
    name: 'Hyderabad Charminar',
    category: 'City',
    image: 'https://tanushreecabs.com/wp-content/uploads/2025/01/Places-to-visit-in-Hyderabad-1024x818.webp',
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
