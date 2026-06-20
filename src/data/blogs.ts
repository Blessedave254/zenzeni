export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
  tags: string[];
};

export const blogs: BlogPost[] = [
  {
    title: 'Best Time to Visit Maasai Mara for Safari',
    slug: 'best-time-to-visit-maasai-mara',
    date: '2026-02-12',
    author: 'Zenzeni Travel Team',
    image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'A practical guide to Mara seasons, migration timing, wildlife viewing, and lodge planning.',
    tags: ['Maasai Mara', 'Safari Planning', 'Wildlife'],
    content: [
      'The Maasai Mara is rewarding throughout the year, but your ideal travel month depends on what you want to experience. Dry months make wildlife easier to spot, while green season brings dramatic landscapes, fewer vehicles, and excellent value.',
      'The migration season usually attracts the highest demand, especially around river crossing periods. Booking early helps secure better camps, guides, and flight or road logistics.',
      'For photographers, early morning and late afternoon game drives are essential. Zenzeni Africa Safari plans routing around light, wildlife behavior, and guest pace.'
    ]
  },
  {
    title: 'Safari and Beach: How to Combine Mara and Diani',
    slug: 'safari-and-beach-mara-diani',
    date: '2026-03-04',
    author: 'Zenzeni Travel Team',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Turn a Kenya holiday into a complete bush-and-beach journey with smart routing.',
    tags: ['Diani', 'Beach Holidays', 'Honeymoon'],
    content: [
      'A safari and beach itinerary gives you contrast: wildlife-rich mornings in the bush followed by slow Indian Ocean days. The most efficient plan usually starts with safari and ends at the coast.',
      'For honeymoons, we recommend adding private dinners, upgraded rooms, and relaxed transfer days so the trip feels celebratory rather than packed.',
      'Domestic flights can reduce fatigue, while road transfers can be useful for budget-conscious travellers or groups.'
    ]
  },
  {
    title: 'What to Pack for a Kenya Safari',
    slug: 'what-to-pack-for-kenya-safari',
    date: '2026-04-18',
    author: 'Zenzeni Travel Team',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'A simple packing list covering clothing, documents, health items, and safari essentials.',
    tags: ['Safari Tips', 'Packing', 'Kenya'],
    content: [
      'Pack light, breathable layers in neutral colors, plus a warm fleece or jacket for early morning drives. Comfortable shoes matter more than fashion-heavy outfits.',
      'Bring sunscreen, insect repellent, sunglasses, a hat, reusable water bottle, camera batteries, chargers, travel documents, and any personal medication.',
      'Soft-sided luggage is easier for safari vehicles and light aircraft. If your trip includes the coast, add swimwear and lighter evening clothing.'
    ]
  }
];
