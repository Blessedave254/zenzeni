import type { APIRoute } from 'astro';
import { activities } from '@data/activities';
import { destinations } from '@data/destinations';
import { faqs } from '@data/faqs';
import { packages } from '@data/packages';

const funFacts: Record<string, string[]> = {
  'maasai-mara': [
    'The Maasai Mara is part of the wider Serengeti-Mara ecosystem.',
    'The word Mara is often understood to mean spotted, inspired by the dotted trees and shadows across the plains.'
  ],
  'amboseli-national-park': [
    'Amboseli is one of Kenya’s best places to see elephants with Mount Kilimanjaro in the background.',
    'The park’s swamp systems help wildlife thrive even in dry seasons.'
  ],
  'tsavo-national-park': [
    'Tsavo is one of the largest protected wilderness areas in Kenya.',
    'Its elephants are famous for their red-dust look from the park’s iron-rich soil.'
  ],
  'lake-nakuru': [
    'Lake Nakuru is known for rhino conservation and dramatic Rift Valley viewpoints.',
    'Flamingo numbers change with water conditions, so every visit can feel different.'
  ],
  'diani-beach': [
    'Diani’s white sand coast pairs beautifully with a safari itinerary.',
    'The beach is a favorite for honeymoons, snorkeling, and relaxed resort stays.'
  ],
  watamu: [
    'Watamu has protected marine areas with coral gardens and excellent snorkeling.',
    'Mida Creek near Watamu is loved for mangroves, sunset views, and birdlife.'
  ],
  malindi: [
    'Malindi blends beach relaxation with coastal heritage and food culture.',
    'It is a useful north-coast base for marine excursions.'
  ],
  naivasha: [
    'Lake Naivasha is a freshwater lake in the Rift Valley.',
    'Naivasha is popular for boat rides, retreats, and easy Nairobi weekend escapes.'
  ],
  'hells-gate': [
    'Hell’s Gate is one of the few Kenyan parks where visitors can cycle through parts of the park.',
    'Its cliffs, gorges, and geothermal scenery make it a strong adventure day trip.'
  ],
  'mount-kenya': [
    'Mount Kenya is Africa’s second-highest mountain.',
    'Its routes pass through forest, moorland, and alpine scenery.'
  ],
  'aberdare-national-park': [
    'Aberdare is known for cool highland forests and waterfalls.',
    'Some lodges overlook waterholes, creating relaxed wildlife viewing from the property.'
  ],
  'karura-forest': [
    'Karura Forest is one of Nairobi’s most loved urban nature escapes.',
    'It has walking trails, caves, cycling routes, and a waterfall.'
  ],
  'thomson-falls': [
    'Thomson Falls is near Nyahururu in Kenya’s cool central highlands.',
    'It is often paired with Rift Valley and Aberdare travel circuits.'
  ],
  'fourteen-falls': [
    'Fourteen Falls sits near Thika and is a convenient day trip from Nairobi.',
    'The falls are named for the multiple cascades across the river.'
  ]
};

const normalize = (value: string) => value.toLowerCase().replace(/[^\w\s-]/g, ' ');
const words = (value: string) => normalize(value).split(/\s+/).filter(Boolean);

const scoreText = (query: string, haystack: string) => {
  const queryWords = words(query);
  const text = normalize(haystack);

  return queryWords.reduce((score, word) => {
    if (text.includes(word)) return score + (word.length > 4 ? 3 : 1);
    return score;
  }, 0);
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' }
  });

const buildPackageAnswer = (query: string) => {
  const ranked = packages
    .map((item) => {
      const searchable = [
        item.title,
        item.location,
        item.shortDescription,
        item.fullDescription,
        item.activities.join(' '),
        item.durationDays === 1 ? 'one day day trip short trip' : `${item.durationDays} days multi day`,
        item.included.join(' '),
        item.itinerary.map((day) => day.title).join(' ')
      ].join(' ');

      let score = scoreText(query, searchable);
      const lowerQuery = normalize(query);

      if (lowerQuery.includes('honeymoon') && item.activities.includes('Honeymoon packages')) score += 8;
      if (lowerQuery.includes('beach') && item.activities.includes('Beach holidays')) score += 8;
      if (lowerQuery.includes('team') && item.activities.includes('Team building')) score += 8;
      if (lowerQuery.includes('corporate') && item.activities.includes('Corporate excursions')) score += 8;
      if ((lowerQuery.includes('1 day') || lowerQuery.includes('one day')) && item.durationDays === 1) score += 8;

      return { item, score };
    })
    .sort((a, b) => b.score - a.score);

  const matches = ranked.filter((entry) => entry.score > 0).slice(0, 3);

  if (matches.length === 0) return null;

  const top = matches[0].item;
  const relatedFacts = destinations.find((destination) => destination.title === top.location || top.location.includes(destination.title));

  return {
    answer: `${top.title} is a strong match. It is a ${top.durationDays}-day package in ${top.location}, starting from $${top.price}. ${top.shortDescription}`,
    funFact: relatedFacts ? funFacts[relatedFacts.slug]?.[0] : undefined,
    links: matches.map(({ item }) => ({
      label: item.title,
      href: `/packages/${item.slug}`,
      meta: `${item.location} • ${item.durationDays} ${item.durationDays === 1 ? 'day' : 'days'} • From $${item.price}`
    }))
  };
};

const buildDestinationAnswer = (query: string) => {
  const ranked = destinations
    .map((item) => {
      const searchable = [
        item.title,
        item.region,
        item.summary,
        item.description,
        item.highlights.join(' '),
        item.bestFor.join(' ')
      ].join(' ');

      return { item, score: scoreText(query, searchable) };
    })
    .sort((a, b) => b.score - a.score);

  const matches = ranked.filter((entry) => entry.score > 0).slice(0, 3);

  if (matches.length === 0) return null;

  const top = matches[0].item;

  return {
    answer: `${top.title} is a great choice for ${top.bestFor.slice(0, 2).join(' and ').toLowerCase()}. ${top.summary}`,
    funFact: funFacts[top.slug]?.[0],
    links: matches.map(({ item }) => ({
      label: item.title,
      href: `/destinations/${item.slug}`,
      meta: `${item.region} • ${item.bestFor.slice(0, 2).join(', ')}`
    }))
  };
};

const buildActivityAnswer = (query: string) => {
  const ranked = activities
    .map((item) => ({ item, score: scoreText(query, `${item.title} ${item.description}`) }))
    .sort((a, b) => b.score - a.score);

  const matches = ranked.filter((entry) => entry.score > 0).slice(0, 4);

  if (matches.length === 0) return null;

  const top = matches[0].item;

  return {
    answer: `For ${top.title.toLowerCase()}, Zenzeni Africa Safaris can help with planning, routing, and package matching. ${top.description}`,
    funFact: 'A good Kenya itinerary often combines two moods: active adventure first, then slower relaxation at the coast or a lake.',
    links: [
      { label: 'View activities', href: '/activities', meta: `${matches.length} related travel styles found` },
      ...matches.slice(0, 2).map(({ item }) => ({ label: item.title, href: '/activities', meta: item.description }))
    ]
  };
};

const buildFaqAnswer = (query: string) => {
  const ranked = faqs
    .map((item) => ({ item, score: scoreText(query, `${item.question} ${item.answer}`) }))
    .sort((a, b) => b.score - a.score);

  const match = ranked.find((entry) => entry.score > 0);

  if (!match) return null;

  return {
    answer: match.item.answer,
    funFact: 'Clear travel planning saves time on safari because transfers, park timing, meals, and lodge check-ins all shape the guest experience.',
    links: [{ label: 'Read all FAQs', href: '/faq', meta: match.item.question }]
  };
};

const fallback = () => ({
  answer:
    'I can help with Kenya safari packages, destinations, activities, prices, durations, beach holidays, honeymoons, team building, and booking questions. Try asking “Which package is best for honeymoon?” or “Tell me about Naivasha.”',
  funFact: 'Kenya trips are often strongest when they combine contrast: savanna wildlife, Rift Valley scenery, and Indian Ocean beach time.',
  links: [
    { label: 'Browse packages', href: '/packages', meta: 'Safari, beach, hiking, and corporate trips' },
    { label: 'Explore destinations', href: '/destinations', meta: 'Parks, beaches, forests, waterfalls, and mountains' },
    { label: 'Start booking', href: '/booking', meta: 'Send your travel dates and group details' }
  ]
});

const answerQuestion = (question: string) => {
  if (question.length < 2) {
    return { ok: false, message: 'Please ask a travel question.' };
  }

  const lowerQuestion = normalize(question);
  const destinationAnswer = buildDestinationAnswer(question);
  const packageAnswer = buildPackageAnswer(question);
  const activityAnswer = buildActivityAnswer(question);
  const faqAnswer = buildFaqAnswer(question);

  let result =
    lowerQuestion.includes('destination') || lowerQuestion.includes('where') || lowerQuestion.includes('tell me about')
      ? destinationAnswer ?? packageAnswer ?? activityAnswer ?? faqAnswer
      : packageAnswer ?? destinationAnswer ?? activityAnswer ?? faqAnswer;

  result ??= fallback();

  return {
    ok: true,
    question,
    ...result
  };
};

export const GET: APIRoute = ({ url }) => {
  const question = url.searchParams.get('question')?.trim() ?? '';

  if (!question) {
    return json({
      ok: true,
      route: 'assistant',
      prompts: [
        'Which package is best for honeymoon?',
        'Tell me about Maasai Mara',
        'Do you have a one day safari?',
        'What can we do in Naivasha?'
      ]
    });
  }

  const result = answerQuestion(question);
  return json(result, result.ok ? 200 : 400);
};

export const POST: APIRoute = async ({ request }) => {
  const rawBody = await request.text().catch(() => '');
  let body: { question?: string } | null = null;
  let question = '';

  try {
    body = rawBody ? (JSON.parse(rawBody) as { question?: string }) : null;
    question = body?.question?.trim() ?? '';
  } catch {
    const params = new URLSearchParams(rawBody);
    question = params.get('question')?.trim() ?? rawBody.trim();
  }

  const result = answerQuestion(question);
  return json(result, result.ok ? 200 : 400);
};
