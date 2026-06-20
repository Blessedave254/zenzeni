export type TourPackage = {
  title: string;
  slug: string;
  location: string;
  durationDays: number;
  price: number;
  image: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  included: string[];
  excluded: string[];
  activities: string[];
  itinerary: { day: number; title: string; description: string }[];
};

export const packages: TourPackage[] = [
  {
    title: 'Maasai Mara Classic Safari',
    slug: 'maasai-mara-classic-safari',
    location: 'Maasai Mara',
    durationDays: 3,
    price: 680,
    image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'A rewarding three-day big-cat safari with game drives, scenic plains, and comfortable camp stays.',
    fullDescription:
      'Explore the Maasai Mara on a focused safari designed for travellers who want excellent wildlife viewing without rushing the experience. Enjoy guided game drives, warm hospitality, and practical routing from Nairobi.',
    included: ['Transport in safari vehicle', 'Two nights accommodation', 'Meals on safari', 'Professional guide', 'Game drives'],
    excluded: ['Park entry fees unless quoted', 'Tips and personal items', 'Travel insurance', 'Drinks outside meal plan'],
    activities: ['Wildlife safaris', 'Photography tours', 'Cultural experiences'],
    itinerary: [
      { day: 1, title: 'Arrival and afternoon game drive', description: 'Depart Nairobi, arrive at camp, settle in, and enjoy your first Mara game drive.' },
      { day: 2, title: 'Full-day safari', description: 'Spend the day tracking wildlife across the reserve with picnic lunch and flexible photo stops.' },
      { day: 3, title: 'Morning drive and departure', description: 'Enjoy an optional early drive before breakfast, then return to Nairobi.' }
    ]
  },
  {
    title: 'Amboseli Elephant Escape',
    slug: 'amboseli-elephant-escape',
    location: 'Amboseli National Park',
    durationDays: 2,
    price: 430,
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'A compact safari for elephant encounters and Kilimanjaro views.',
    fullDescription:
      'Perfect for a short safari from Nairobi, this Amboseli itinerary prioritizes elephant herds, open landscapes, and dawn views of Mount Kilimanjaro.',
    included: ['Return transport', 'One night accommodation', 'Meals on safari', 'Professional guide', 'Game drives'],
    excluded: ['Park fees', 'Personal expenses', 'Premium drinks', 'Travel insurance'],
    activities: ['Wildlife safaris', 'Photography tours'],
    itinerary: [
      { day: 1, title: 'Nairobi to Amboseli', description: 'Travel to Amboseli, check in, and head out for an afternoon game drive.' },
      { day: 2, title: 'Sunrise safari and return', description: 'Catch morning wildlife activity and Kilimanjaro views before returning to Nairobi.' }
    ]
  },
  {
    title: 'Diani Beach Luxury Break',
    slug: 'diani-beach-luxury-break',
    location: 'Diani Beach',
    durationDays: 4,
    price: 760,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'A premium Indian Ocean beach escape with elegant resort comfort.',
    fullDescription:
      'Unwind on Diani’s white sands with curated resort stays, optional snorkeling, spa time, and coastal dining. Ideal after a safari or as a standalone beach holiday.',
    included: ['Three nights accommodation', 'Breakfast', 'Airport transfers', 'Trip support', 'Resort recommendations'],
    excluded: ['Flights', 'Optional water sports', 'Lunch and dinner unless stated', 'Travel insurance'],
    activities: ['Beach holidays', 'Honeymoon packages', 'Hotel bookings'],
    itinerary: [
      { day: 1, title: 'Arrival at the coast', description: 'Arrive in Diani, transfer to your resort, and enjoy a relaxed beach evening.' },
      { day: 2, title: 'Beach and ocean day', description: 'Spend the day at leisure with optional snorkeling, spa treatments, or kite surfing.' },
      { day: 3, title: 'Coastal experiences', description: 'Choose a dhow cruise, local dining, or a private romantic beach setup.' },
      { day: 4, title: 'Departure', description: 'Enjoy breakfast and a final beach walk before your transfer.' }
    ]
  },
  {
    title: 'Lake Nakuru Rhino Day Trip',
    slug: 'lake-nakuru-rhino-day-trip',
    location: 'Lake Nakuru',
    durationDays: 1,
    price: 185,
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'A fast, scenic Nairobi day trip focused on rhinos, lake views, and wildlife.',
    fullDescription:
      'Leave Nairobi early for Lake Nakuru National Park, enjoy guided game drives and viewpoints, then return in the evening. A smart option for travellers with limited time.',
    included: ['Return transport', 'Professional guide', 'Bottled water', 'Game drive routing'],
    excluded: ['Park entry fees', 'Lunch', 'Tips', 'Travel insurance'],
    activities: ['Wildlife safaris', 'Photography tours'],
    itinerary: [
      { day: 1, title: 'Nairobi, Lake Nakuru game drive, and return', description: 'Depart before sunrise, explore key wildlife areas and viewpoints, then return to Nairobi after the safari.' }
    ]
  },
  {
    title: 'Naivasha Team Building Retreat',
    slug: 'naivasha-team-building-retreat',
    location: 'Naivasha',
    durationDays: 2,
    price: 260,
    image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'A practical corporate retreat with lake activities and facilitated team sessions.',
    fullDescription:
      'Designed for companies and organizations, this retreat combines transport, lake accommodation, group facilitation, outdoor challenges, and optional boat rides.',
    included: ['Return transport', 'One night accommodation', 'Meals', 'Team building facilitation', 'Basic activity equipment'],
    excluded: ['Alcoholic drinks', 'Premium conference equipment', 'Personal expenses', 'Insurance'],
    activities: ['Team building', 'Corporate excursions', 'Hotel bookings'],
    itinerary: [
      { day: 1, title: 'Arrival and team activities', description: 'Travel to Naivasha, check in, complete outdoor team sessions, and enjoy an evening program.' },
      { day: 2, title: 'Lake experience and return', description: 'Enjoy optional lake activities, closing session, lunch, and return transfer.' }
    ]
  },
  {
    title: 'Mount Kenya Hiking Experience',
    slug: 'mount-kenya-hiking-experience',
    location: 'Mount Kenya',
    durationDays: 3,
    price: 520,
    image: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80'
    ],
    shortDescription: 'A guided highland hiking package with mountain scenery and crisp forest air.',
    fullDescription:
      'Experience Mount Kenya through scenic hikes, forest trails, and alpine landscapes with local guides, practical logistics, and comfortable overnight planning.',
    included: ['Transport', 'Guide fees', 'Two nights accommodation', 'Meals during trek', 'Basic route planning'],
    excluded: ['Specialized hiking gear', 'Park fees unless quoted', 'Porter tips', 'Travel insurance'],
    activities: ['Hiking', 'Photography tours', 'Cultural experiences'],
    itinerary: [
      { day: 1, title: 'Arrival and acclimatization walk', description: 'Travel to the Mount Kenya region and enjoy a gentle guided nature walk.' },
      { day: 2, title: 'Full hiking day', description: 'Follow a scenic route through forest and moorland with packed lunch and rest stops.' },
      { day: 3, title: 'Morning views and departure', description: 'Enjoy a relaxed morning before returning to Nairobi.' }
    ]
  }
];
