import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ ok: true, route: 'bookings', methods: ['POST'] }), {
    headers: { 'content-type': 'application/json' }
  });

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const booking = Object.fromEntries(formData);

  console.info('Booking placeholder received', booking);

  return redirect('/booking-confirmation', 303);
};
