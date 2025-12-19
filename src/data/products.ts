export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string; // URL for 2D image
  images?: string[]; // Array of image URLs for gallery
  modelPath?: string; // Path for 3D model (optional for now)
  rating: number;
  featured: boolean;
  colors?: string[];
  specs?: { [key: string]: string };
  stock: number;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-fidelity sound with active noise cancellation and 40-hour battery life.',
    price: 299.99,
    category: 'Audio',
    image: '/speakers1.jpg',
    images: [
      '/speakers1.jpg',
      '/speakers2.jpg',
      '/speakers3.jpg',
      '/speakers4.jpg'
    ],
    rating: 4.8,
    featured: true,
    colors: ['#000000', '#ffffff', '#ff0000'],
    specs: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Battery Life': '40 hours',
      'Connectivity': 'Bluetooth 5.2'
    },
    stock: 25
  },
  {
    id: '2',
    name: 'Smart Watch Series 5',
    description: 'Track your fitness, receive notifications, and stay connected on the go.',
    price: 399.99,
    category: 'Wearables',
    image: '/watch1.jpg',
    images: [
      '/watch1.jpg',
      '/watch2.jpg',
      '/watch3.jpg',
      '/watch4.jpg'
    ],
    rating: 4.6,
    featured: true,
    colors: ['#000000', '#aaaaaa', '#ff6b6b'],
    specs: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '5ATM',
      'Connectivity': 'Bluetooth, WiFi'
    },
    stock: 15
  },
  {
    id: '3',
    name: 'Gaming Laptop Pro',
    description: 'High-performance laptop for gaming and content creation.',
    price: 1499.99,
    category: 'Laptops',
    image: '/lapi1.jpg',
    images: [
      '/lapi1.jpg',
      '/lapi2.jpg',
      '/lapi3.jpg',
      '/lapi4.jpg'
    ],
    rating: 4.7,
    featured: true,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Processor': 'Intel i7-12700H',
      'Graphics': 'RTX 3060',
      'RAM': '16GB',
      'Storage': '512GB SSD'
    },
    stock: 12
  },
  {
    id: '4',
    name: 'Flagship Smartphone',
    description: 'Latest smartphone with cutting-edge technology and camera system.',
    price: 999.99,
    category: 'Phones',
    image: '/phones1.jpg',
    images: [
      '/phones1.jpg',
      '/phones2.jpg',
      '/phones3.jpg',
      '/phones4.jpg'
    ],
    rating: 4.9,
    featured: true,
    colors: ['#000000', '#ffffff', '#ff6b6b'],
    specs: {
      'Display': '6.7" OLED',
      'Camera': '108MP Triple Lens',
      'Battery': '5000mAh',
      'Storage': '256GB'
    },
    stock: 18
  },
  {
    id: '5',
    name: 'Smart Home Speaker',
    description: 'Voice-controlled smart speaker with premium audio quality.',
    price: 149.99,
    category: 'Audio',
    image: '/speakers1.jpg',
    images: [
      '/speakers1.jpg',
      '/speakers2.jpg',
      '/speakers3.jpg',
      '/speakers4.jpg'
    ],
    rating: 4.5,
    featured: false,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Power Output': '40W',
      'Voice Assistant': 'Alexa, Google Assistant',
      'Connectivity': 'Wi-Fi, Bluetooth',
      'Height': '170mm'
    },
    stock: 30
  },
  {
    id: '6',
    name: 'Luxury Smartwatch',
    description: 'Premium smartwatch with health monitoring and extended battery life.',
    price: 499.99,
    category: 'Wearables',
    image: '/watch2.jpg',
    images: [
      '/watch2.jpg',
      '/watch3.jpg',
      '/watch4.jpg',
      '/watch5.jpg'
    ],
    rating: 4.7,
    featured: true,
    colors: ['#000000', '#cccccc'],
    specs: {
      'Display': '1.5" Retina',
      'Battery Life': '10 days',
      'Water Resistance': '10ATM',
      'Features': 'ECG, Blood Oxygen'
    },
    stock: 8
  },
  {
    id: '7',
    name: 'High-Performance Laptop',
    description: 'Powerful laptop for professionals and creative work.',
    price: 1299.99,
    category: 'Laptops',
    image: '/lapi2.jpg',
    rating: 4.6,
    featured: true,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Processor': 'AMD Ryzen 9',
      'Graphics': 'RTX 3050',
      'RAM': '32GB',
      'Storage': '1TB SSD'
    },
    stock: 10
  },
  {
    id: '8',
    name: 'Budget Smartphone',
    description: 'Affordable smartphone with great features and reliable performance.',
    price: 399.99,
    category: 'Phones',
    image: '/phones2.jpg',
    rating: 4.3,
    featured: false,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Display': '6.5" HD',
      'Camera': '48MP Dual Lens',
      'Battery': '4000mAh',
      'Storage': '128GB'
    },
    stock: 25
  },
  {
    id: '9',
    name: 'Wireless Earbuds',
    description: 'Compact wireless earbuds with excellent sound quality.',
    price: 129.99,
    category: 'Audio',
    image: '/speakers2.jpg',
    rating: 4.4,
    featured: false,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Driver Size': '6mm',
      'Battery Life': '24 hours total',
      'Connectivity': 'Bluetooth 5.0',
      'Case': 'Charging Case'
    },
    stock: 40
  },
  {
    id: '10',
    name: 'Fitness Tracker',
    description: 'Activity tracker with heart rate monitoring and sleep analysis.',
    price: 79.99,
    category: 'Wearables',
    image: '/watch3.jpg',
    rating: 4.2,
    featured: false,
    colors: ['#000000', '#ff0000', '#0000ff'],
    specs: {
      'Display': '0.96" Color',
      'Battery Life': '14 days',
      'Water Resistance': 'IP68',
      'Features': 'Step Counter, Sleep Tracking'
    },
    stock: 35
  },
  {
    id: '11',
    name: 'Business Laptop',
    description: 'Reliable and secure laptop for business professionals.',
    price: 1199.99,
    category: 'Laptops',
    image: '/lapi3.jpg',
    rating: 4.5,
    featured: true,
    colors: ['#000000'],
    specs: {
      'Processor': 'Intel i7-1165G7',
      'Graphics': 'Integrated Intel Iris Xe',
      'RAM': '16GB',
      'Storage': '256GB SSD'
    },
    stock: 15
  },
  {
    id: '12',
    name: 'Gaming Smartphone',
    description: 'Smartphone optimized for gaming with high refresh rate display.',
    price: 899.99,
    category: 'Phones',
    image: '/phones3.jpg',
    rating: 4.8,
    featured: true,
    colors: ['#000000'],
    specs: {
      'Display': '6.7" 144Hz OLED',
      'Camera': '64MP Triple Lens',
      'Battery': '5000mAh',
      'Storage': '256GB'
    },
    stock: 20
  },
  {
    id: '13',
    name: 'Soundbar Speaker',
    description: 'Premium soundbar with surround sound for your home theater.',
    price: 349.99,
    category: 'Audio',
    image: '/speakers3.jpg',
    rating: 4.6,
    featured: true,
    colors: ['#000000'],
    specs: {
      'Power Output': '300W',
      'Connectivity': 'HDMI, Optical, Wi-Fi',
      'Features': 'Dolby Atmos',
      'Subwoofer': 'Wireless Subwoofer'
    },
    stock: 12
  },
  {
    id: '14',
    name: 'Smartwatch Pro',
    description: 'Advanced smartwatch with GPS and fitness tracking capabilities.',
    price: 349.99,
    category: 'Wearables',
    image: '/watch4.jpg',
    rating: 4.5,
    featured: false,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Display': '1.4" AMOLED',
      'Battery Life': '5 days',
      'GPS': 'Built-in GPS',
      'Features': 'Blood Oxygen, Stress Monitoring'
    },
    stock: 22
  },
  {
    id: '15',
    name: 'Ultrabook Laptop',
    description: 'Ultra-thin and lightweight laptop with all-day battery life.',
    price: 1099.99,
    category: 'Laptops',
    image: '/lapi4.jpg',
    rating: 4.4,
    featured: false,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Processor': 'Intel i5-1135G7',
      'Graphics': 'Integrated Intel Iris Xe',
      'RAM': '8GB',
      'Storage': '512GB SSD'
    },
    stock: 18
  },
  {
    id: '16',
    name: 'Photography Smartphone',
    description: 'Smartphone with exceptional camera system for photography enthusiasts.',
    price: 1199.99,
    category: 'Phones',
    image: '/phones4.jpg',
    rating: 4.9,
    featured: true,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Display': '6.8" LTPO OLED',
      'Camera': '108MP Quad Lens',
      'Battery': '5000mAh',
      'Storage': '512GB'
    },
    stock: 15
  },
  {
    id: '17',
    name: 'Bookshelf Speakers',
    description: 'Hi-fi bookshelf speakers with exceptional sound quality.',
    price: 299.99,
    category: 'Audio',
    image: '/speakers4.jpg',
    rating: 4.7,
    featured: true,
    colors: ['#000000', '#ffff00'],
    specs: {
      'Power Handling': '100W',
      'Frequency Response': '55Hz - 35kHz',
      'Crossover': '2000Hz',
      'Finish': 'Wood Grain'
    },
    stock: 8
  },
  {
    id: '18',
    name: 'Smart Fitness Band',
    description: 'Fitness band with workout tracking and smart notifications.',
    price: 59.99,
    category: 'Wearables',
    image: '/watch5.jpg',
    rating: 4.1,
    featured: false,
    colors: ['#000000', '#00ff00', '#0000ff'],
    specs: {
      'Display': '0.95" Color',
      'Battery Life': '20 days',
      'Water Resistance': 'IP67',
      'Features': '100+ Sports Modes'
    },
    stock: 50
  },
  {
    id: '19',
    name: 'Convertible Laptop',
    description: 'Versatile 2-in-1 laptop that converts to tablet mode.',
    price: 999.99,
    category: 'Laptops',
    image: '/lapi5.jpg',
    rating: 4.3,
    featured: false,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Processor': 'Intel i5-1135G7',
      'Graphics': 'Integrated Intel Iris Xe',
      'RAM': '16GB',
      'Storage': '256GB SSD'
    },
    stock: 20
  },
  {
    id: '20',
    name: '5G Smartphone',
    description: 'Latest 5G smartphone with blazing fast speeds and connectivity.',
    price: 799.99,
    category: 'Phones',
    image: '/phones5.jpg',
    rating: 4.6,
    featured: true,
    colors: ['#000000', '#ffffff', '#ff6b35'],
    specs: {
      'Display': '6.6" FHD+ LCD',
      'Camera': '108MP Triple Lens',
      'Battery': '4500mAh',
      'Storage': '128GB'
    },
    stock: 28
  },
  {
    id: '21',
    name: 'Portable Bluetooth Speaker',
    description: 'Compact and waterproof Bluetooth speaker for outdoor adventures.',
    price: 89.99,
    category: 'Audio',
    image: '/speakers5.jpg',
    rating: 4.3,
    featured: false,
    colors: ['#000000', '#ff0000', '#0000ff'],
    specs: {
      'Power Output': '20W',
      'Water Resistance': 'IPX7',
      'Battery Life': '20 hours',
      'Features': 'Stereo Pairing'
    },
    stock: 35
  },
  {
    id: '22',
    name: 'Digital Watch',
    description: 'Classic digital watch with modern smart features.',
    price: 199.99,
    category: 'Wearables',
    image: '/watch6.jpg',
    rating: 4.0,
    featured: false,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Display': '1.3" Digital',
      'Battery Life': '6 months',
      'Features': 'Alarm, Stopwatch, Timer',
      'Strap': 'Silicone'
    },
    stock: 40
  },
  {
    id: '23',
    name: 'Gaming Laptop Elite',
    description: 'Top-tier gaming laptop with cutting-edge graphics and cooling.',
    price: 2299.99,
    category: 'Laptops',
    image: '/lapi6.jpg',
    rating: 4.9,
    featured: true,
    colors: ['#000000'],
    specs: {
      'Processor': 'Intel i9-12900H',
      'Graphics': 'RTX 4080',
      'RAM': '32GB DDR5',
      'Storage': '2TB SSD'
    },
    stock: 6
  },
  {
    id: '24',
    name: 'Mid-Range Smartphone',
    description: 'Excellent balance of performance and value for everyday use.',
    price: 599.99,
    category: 'Phones',
    image: '/phones6.jpg',
    rating: 4.5,
    featured: false,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Display': '6.5" 90Hz AMOLED',
      'Camera': '50MP Triple Lens',
      'Battery': '4500mAh',
      'Storage': '128GB'
    },
    stock: 30
  },
  {
    id: '25',
    name: 'Studio Monitors',
    description: 'Professional studio monitors for music production and mixing.',
    price: 599.99,
    category: 'Audio',
    image: '/speakers6.jpg',
    rating: 4.8,
    featured: true,
    colors: ['#000000'],
    specs: {
      'Power Output': '200W per pair',
      'Frequency Response': '45Hz - 20kHz',
      'Inputs': 'XLR, TRS, RCA',
      'Size': '8-inch woofers'
    },
    stock: 5
  },
  {
    id: '26',
    name: 'Luxury Timepiece',
    description: 'Premium mechanical watch with elegant craftsmanship.',
    price: 899.99,
    category: 'Wearables',
    image: '/watch7.jpg',
    rating: 4.9,
    featured: true,
    colors: ['#000000', '#ffcc00'],
    specs: {
      'Movement': 'Automatic Mechanical',
      'Water Resistance': '3 ATM',
      'Features': 'Sapphire Crystal, Date Display',
      'Band': 'Genuine Leather'
    },
    stock: 10
  },
  {
    id: '27',
    name: 'Student Laptop',
    description: 'Affordable laptop perfect for students and academic work.',
    price: 699.99,
    category: 'Laptops',
    image: '/lapi7.jpg',
    rating: 4.2,
    featured: false,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Processor': 'AMD Ryzen 5',
      'Graphics': 'Integrated Radeon',
      'RAM': '8GB',
      'Storage': '256GB SSD'
    },
    stock: 25
  },
  {
    id: '28',
    name: 'Foldable Smartphone',
    description: 'Revolutionary foldable smartphone with flexible display technology.',
    price: 1799.99,
    category: 'Phones',
    image: '/phones7.jpg',
    rating: 4.7,
    featured: true,
    colors: ['#000000'],
    specs: {
      'Main Display': '7.6" Foldable OLED',
      'Cover Display': '6.2" AMOLED',
      'Camera': 'Triple 12MP + 10MP Front',
      'Storage': '256GB'
    },
    stock: 12
  },
  {
    id: '29',
    name: 'Vintage Style Speaker',
    description: 'Retro-inspired speaker with modern connectivity and sound quality.',
    price: 199.99,
    category: 'Audio',
    image: '/speakers7.jpg',
    rating: 4.4,
    featured: false,
    colors: ['#000000', '#ff9900'],
    specs: {
      'Power Output': '15W',
      'Connectivity': 'Bluetooth, 3.5mm Jack',
      'Finish': 'Bamboo Wood',
      'Controls': 'Knob Controls'
    },
    stock: 15
  },
  {
    id: '30',
    name: 'Smartband',
    description: 'Basic activity tracker with essential health monitoring.',
    price: 39.99,
    category: 'Wearables',
    image: '/watch8.jpg',
    rating: 3.9,
    featured: false,
    colors: ['#000000', '#ff0000'],
    specs: {
      'Display': '0.96" Monochrome',
      'Battery Life': '30 days',
      'Water Resistance': 'IP67',
      'Features': 'Step Counter, Alarm'
    },
    stock: 60
  },
  {
    id: '31',
    name: 'Content Creator Laptop',
    description: 'Laptop optimized for content creators and video editors.',
    price: 1899.99,
    category: 'Laptops',
    image: '/lapi8.jpg',
    rating: 4.8,
    featured: true,
    colors: ['#000000'],
    specs: {
      'Processor': 'Intel i9-12900H',
      'Graphics': 'RTX 3070',
      'RAM': '32GB',
      'Storage': '1TB SSD'
    },
    stock: 8
  },
  {
    id: '32',
    name: 'Budget Smartphone',
    description: 'Entry-level smartphone with essential features at an affordable price.',
    price: 249.99,
    category: 'Phones',
    image: '/phones8.jpg',
    rating: 4.0,
    featured: false,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Display': '6.5" HD+ LCD',
      'Camera': '13MP Dual Lens',
      'Battery': '5000mAh',
      'Storage': '64GB'
    },
    stock: 45
  },
  {
    id: '33',
    name: 'Wireless Party Speaker',
    description: 'High-powered wireless speaker for parties and gatherings.',
    price: 249.99,
    category: 'Audio',
    image: '/speakers8.jpg',
    rating: 4.5,
    featured: false,
    colors: ['#000000', '#ff0000'],
    specs: {
      'Power Output': '100W',
      'Water Resistance': 'IPX5',
      'Battery Life': '12 hours',
      'Features': 'RGB Lights, TWS Stereo'
    },
    stock: 20
  },
  {
    id: '34',
    name: 'Analog Watch',
    description: 'Classical analog watch with timeless design and precision movement.',
    price: 149.99,
    category: 'Wearables',
    image: '/watch9.jpg',
    rating: 4.3,
    featured: false,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Movement': 'Quartz',
      'Water Resistance': '3 ATM',
      'Features': 'Sweep Second Hand, Date Window',
      'Strap': 'Stainless Steel'
    },
    stock: 25
  },
  {
    id: '35',
    name: 'Chromebook',
    description: 'Lightweight Chromebook for web-based productivity and entertainment.',
    price: 499.99,
    category: 'Laptops',
    image: '/lapi9.jpg',
    rating: 4.1,
    featured: false,
    colors: ['#000000'],
    specs: {
      'Processor': 'Intel Celeron N4020',
      'Graphics': 'Integrated Intel UHD',
      'RAM': '4GB',
      'Storage': '32GB eMMC'
    },
    stock: 30
  },
  {
    id: '36',
    name: 'Phablet',
    description: 'Large-screened smartphone perfect for media consumption and productivity.',
    price: 699.99,
    category: 'Phones',
    image: '/phones9.jpg',
    rating: 4.4,
    featured: false,
    colors: ['#000000'],
    specs: {
      'Display': '6.8" Large AMOLED',
      'Camera': 'Triple 50MP + 12MP',
      'Battery': '5000mAh',
      'Storage': '256GB'
    },
    stock: 22
  },
  {
    id: '37',
    name: 'Turntable',
    description: 'Classic vinyl turntable with modern connectivity for audiophiles.',
    price: 129.99,
    category: 'Audio',
    image: '/speakers9.jpg',
    rating: 4.6,
    featured: false,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Speeds': '33 1/3, 45 RPM',
      'Connectivity': 'USB, Line Out',
      'Features': 'Built-in Preamp',
      'Accessories': 'Stylus Included'
    },
    stock: 18
  },
  {
    id: '38',
    name: 'Hybrid Smartwatch',
    description: 'Combines traditional watch design with smart functionality.',
    price: 249.99,
    category: 'Wearables',
    image: '/watch10.jpg',
    rating: 4.4,
    featured: false,
    colors: ['#000000', '#ffcc00'],
    specs: {
      'Display': '1.2" Hybrid',
      'Battery Life': '30 days',
      'Features': 'Step Tracking, Notifications',
      'Water Resistance': 'IP68'
    },
    stock: 15
  },
  {
    id: '39',
    name: '2-in-1 Convertible',
    description: 'Versatile laptop-tablet hybrid for work and play.',
    price: 799.99,
    category: 'Laptops',
    image: '/lapi10.jpg',
    rating: 4.5,
    featured: false,
    colors: ['#000000', '#ffffff'],
    specs: {
      'Processor': 'Intel i5-1130G7',
      'Graphics': 'Integrated Intel Iris Xe',
      'RAM': '8GB',
      'Storage': '256GB SSD'
    },
    stock: 18
  },
  {
    id: '40',
    name: 'Professional Phone',
    description: 'Business-focused smartphone with enterprise security features.',
    price: 1099.99,
    category: 'Phones',
    image: '/phones10.jpg',
    rating: 4.7,
    featured: true,
    colors: ['#000000'],
    specs: {
      'Display': '6.7" 120Hz OLED',
      'Camera': 'Triple 108MP + Night Vision',
      'Security': 'Hardware Encryption',
      'Storage': '256GB'
    },
    stock: 10
  },
  {
    id: '41',
    name: 'Smart Speaker Display',
    description: 'Smart speaker with touch display and visual interface.',
    price: 199.99,
    category: 'Audio',
    image: '/speakers10.jpg',
    rating: 4.3,
    featured: false,
    colors: ['#000000'],
    specs: {
      'Display': '4" Touchscreen',
      'Connectivity': 'Wi-Fi, Bluetooth',
      'Voice Assistant': 'Google Assistant, Alexa',
      'Camera': '5MP Front Camera'
    },
    stock: 25
  },
  {
    id: '42',
    name: 'Luxury Chronograph',
    description: 'Premium chronograph watch with sophisticated design and features.',
    price: 1299.99,
    category: 'Wearables',
    image: '/watch11.jpg',
    rating: 4.9,
    featured: true,
    colors: ['#000000', '#ffdd00', '#cccccc'],
    specs: {
      'Movement': 'Automatic Swiss',
      'Water Resistance': '10 ATM',
      'Features': 'Chronograph, Moon Phase',
      'Case': 'Stainless Steel 316L'
    },
    stock: 5
  },
  {
    id: '43',
    name: 'Budget Gaming Laptop',
    description: 'Affordable gaming laptop for casual gamers.',
    price: 899.99,
    category: 'Laptops',
    image: '/lapi11.jpg',
    rating: 4.2,
    featured: false,
    colors: ['#000000'],
    specs: {
      'Processor': 'AMD Ryzen 5',
      'Graphics': 'GTX 1650',
      'RAM': '8GB',
      'Storage': '512GB SSD'
    },
    stock: 15
  },
  {
    id: '44',
    name: 'Smartphone Flagship',
    description: 'The ultimate combination of power, camera, and design.',
    price: 1299.99,
    category: 'Phones',
    image: '/phones11.jpg',
    rating: 4.9,
    featured: true,
    colors: ['#000000', '#ffffff', '#ff0000'],
    specs: {
      'Display': '6.9" Dynamic AMOLED',
      'Camera': '200MP + Periscope Telephoto',
      'Battery': '5000mAh + Fast Charging',
      'Storage': '256GB / 512GB / 1TB'
    },
    stock: 8
  },
  {
    id: '45',
    name: 'HiFi Audio System',
    description: 'Complete HiFi system with amplifier, preamp, and speakers.',
    price: 1499.99,
    category: 'Audio',
    image: '/speakers2.jpg',
    rating: 4.9,
    featured: true,
    colors: ['#000000'],
    specs: {
      'Power Output': '150W per channel',
      'Frequency Response': '20Hz - 20kHz',
      'Inputs': 'Multiple Digital & Analog',
      'Compatibility': 'Vinyl, CD, Streaming'
    },
    stock: 4
  }
];

export const categories = [
  { id: 'laptops', name: 'Laptops', image: '/lapi1.jpg' },
  { id: 'phones', name: 'Phones', image: '/phones1.jpg' },
  { id: 'audio', name: 'Audio', image: '/speakers1.jpg' },
  { id: 'wearables', name: 'Wearables', image: '/watch1.jpg' },
];