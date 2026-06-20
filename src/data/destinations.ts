export type Destination = {
  title: string;
  slug: string;
  region: string;
  image: string;
  summary: string;
  description: string;
  highlights: string[];
  bestFor: string[];
};

export const destinations: Destination[] = [
  {
    title: 'Maasai Mara',
    slug: 'maasai-mara',
    region: 'Rift Valley',
    image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1200&q=80',
    summary: 'Kenya’s iconic big-cat country and a classic stage for the Great Migration.',
    description:
      'The Maasai Mara delivers wide golden plains, predator sightings, rich Maasai culture, and luxury tented camps that place you close to the wildlife without losing comfort.',
    highlights: ['Big five safaris', 'Great Migration season', 'Hot air balloon rides', 'Maasai cultural visits'],
    bestFor: ['Wildlife safaris', 'Photography tours', 'Honeymoon packages']
  },
  {
    title: 'Amboseli National Park',
    slug: 'amboseli-national-park',
    region: 'Kajiado',
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
    summary: 'Elephant herds, open plains, and unforgettable Mount Kilimanjaro views.',
    description:
      'Amboseli is beloved for close elephant encounters, dramatic skies, swamp-fed wildlife, and the postcard view of Kilimanjaro rising beyond the savanna.',
    highlights: ['Elephant herds', 'Kilimanjaro views', 'Birdlife', 'Observation Hill'],
    bestFor: ['Wildlife safaris', 'Photography tours', 'Family holidays']
  },
  {
    title: 'Tsavo National Park',
    slug: 'tsavo-national-park',
    region: 'Coast and Eastern Kenya',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=80',
    summary: 'Vast red-earth wilderness with rugged landscapes and dramatic safari routes.',
    description:
      'Tsavo East and West combine lava flows, springs, baobabs, open plains, and red-dusted elephants into one of Kenya’s most adventurous safari regions.',
    highlights: ['Mzima Springs', 'Red elephants', 'Shetani lava flows', 'Large wilderness areas'],
    bestFor: ['Wildlife safaris', 'Adventure travel', 'Road trips']
  },
  {
    title: 'Lake Nakuru',
    slug: 'lake-nakuru',
    region: 'Rift Valley',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    summary: 'A scenic lake park known for rhinos, viewpoints, and seasonal flamingos.',
    description:
      'Lake Nakuru is compact, rewarding, and ideal for travellers who want strong wildlife viewing, rhino conservation, and easy access from Nairobi.',
    highlights: ['Rhino sightings', 'Baboon Cliff', 'Seasonal flamingos', 'Short safari drives'],
    bestFor: ['Wildlife safaris', 'Day trips', 'Photography tours']
  },
  {
    title: 'Diani Beach',
    slug: 'diani-beach',
    region: 'South Coast',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    summary: 'White sand, turquoise water, beach resorts, and easy coastal relaxation.',
    description:
      'Diani blends palm-fringed beaches, marine activities, boutique stays, and a relaxed coast atmosphere that pairs beautifully with a safari.',
    highlights: ['White sand beaches', 'Snorkeling', 'Luxury resorts', 'Kite surfing'],
    bestFor: ['Beach holidays', 'Honeymoon packages', 'Family holidays']
  },
  {
    title: 'Watamu',
    slug: 'watamu',
    region: 'North Coast',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
    summary: 'Marine parks, coral gardens, mangroves, and charming coastal stays.',
    description:
      'Watamu is perfect for travellers who want softer coastal energy, ocean conservation, snorkeling, seafood, and easy access to Arabuko Sokoke Forest.',
    highlights: ['Marine park', 'Snorkeling', 'Mida Creek', 'Boutique beach hotels'],
    bestFor: ['Beach holidays', 'Water activities', 'Couples']
  },
  {
    title: 'Malindi',
    slug: 'malindi',
    region: 'North Coast',
    image: 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=1200&q=80',
    summary: 'Coastal culture, beaches, history, and relaxed Indian Ocean escapes.',
    description:
      'Malindi offers beach time, heritage stops, Italian-influenced dining, and easy access to marine excursions along Kenya’s north coast.',
    highlights: ['Marine excursions', 'Historic sites', 'Beach resorts', 'Coastal dining'],
    bestFor: ['Beach holidays', 'Cultural experiences', 'Family trips']
  },
  {
    title: 'Naivasha',
    slug: 'naivasha',
    region: 'Rift Valley',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=1200&q=80',
    summary: 'Lake stays, boat rides, flower farms, and weekend escapes from Nairobi.',
    description:
      'Naivasha is ideal for short breaks, corporate retreats, lake activities, and combinations with Hell’s Gate or Crescent Island.',
    highlights: ['Boat rides', 'Crescent Island', 'Lake lodges', 'Corporate retreats'],
    bestFor: ['Team building', 'Weekend getaways', 'Corporate excursions']
  },
  {
    title: 'Hell’s Gate',
    slug: 'hells-gate',
    region: 'Rift Valley',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    summary: 'Cycling, hiking, cliffs, geothermal scenery, and accessible adventure.',
    description:
      'Hell’s Gate National Park is one of Kenya’s best active day trips, with cycling routes, walking safaris, dramatic gorges, and rock formations.',
    highlights: ['Cycling safari', 'Gorge walks', 'Rock climbing', 'Geothermal landscapes'],
    bestFor: ['Hiking', 'Team building', 'Adventure day trips']
  },
  {
    title: 'Mount Kenya',
    slug: 'mount-kenya',
    region: 'Central Kenya',
    image: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=80',
    summary: 'Alpine scenery, trekking routes, forest wildlife, and highland lodges.',
    description:
      'Mount Kenya rewards hikers with moorlands, valleys, peaks, and crisp highland air, with routes available for both scenic walks and serious climbs.',
    highlights: ['Trekking routes', 'Alpine scenery', 'Forest wildlife', 'Mountain lodges'],
    bestFor: ['Hiking', 'Photography tours', 'Adventure travel']
  },
  {
    title: 'Aberdare National Park',
    slug: 'aberdare-national-park',
    region: 'Central Kenya',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    summary: 'Misty forests, waterfalls, moorlands, and unique highland wildlife.',
    description:
      'Aberdare is a cool, forested safari destination with waterfalls, rare species, trout streams, and atmospheric lodges overlooking waterholes.',
    highlights: ['Forest drives', 'Waterfalls', 'Moorlands', 'Waterhole lodges'],
    bestFor: ['Wildlife safaris', 'Waterfalls tours', 'Romantic stays']
  },
  {
    title: 'Karura Forest',
    slug: 'karura-forest',
    region: 'Nairobi',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    summary: 'A peaceful urban forest for walking, cycling, waterfalls, and fresh air.',
    description:
      'Karura Forest is a convenient Nairobi nature escape with shaded trails, caves, waterfalls, and family-friendly outdoor routes.',
    highlights: ['Walking trails', 'Cycling', 'Waterfall', 'Nairobi day escape'],
    bestFor: ['Hiking', 'Family outings', 'Team building']
  },
  {
    title: 'Thomson Falls',
    slug: 'thomson-falls',
    region: 'Nyahururu',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
    summary: 'A scenic waterfall stop with highland air and easy photo moments.',
    description:
      'Thomson Falls is a classic central Kenya excursion, often paired with Lake Nakuru, Aberdare, or Nyahururu highland circuits.',
    highlights: ['Waterfall viewpoint', 'Highland scenery', 'Picnic stop', 'Day trip routing'],
    bestFor: ['Waterfalls tours', 'Photography tours', 'Family trips']
  },
  {
    title: 'Fourteen Falls',
    slug: 'fourteen-falls',
    region: 'Thika',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    summary: 'A powerful waterfall experience within easy reach of Nairobi.',
    description:
      'Fourteen Falls offers quick-access adventure, scenic river views, picnic areas, and a lively day-trip setting near Thika.',
    highlights: ['Waterfall views', 'Picnics', 'Short transfer from Nairobi', 'Photography stops'],
    bestFor: ['Waterfalls tours', 'Day trips', 'Team building']
  }
];
