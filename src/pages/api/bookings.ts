import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ ok: true, route: 'bookings', methods: ['POST'] }), {
    headers: { 'content-type': 'application/json' }
  });

export const POST: APIRoute = async ({ request, redirect }) => {
  const contentType = request.headers.get('content-type') ?? '';

  if (!contentType.includes('multipart/form-data') && !contentType.includes('application/x-www-form-urlencoded')) {
    return new Response(
      JSON.stringify({
        ok: false,
        message: 'Booking requests must be submitted from the booking form.'
      }),
      {
        status: 400,
        headers: { 'content-type': 'application/json' }
      }
    );
  }

  const formData = await request.formData();
  const booking = Object.fromEntries(formData);

  console.info('Booking placeholder received', booking);

  return redirect('/booking-confirmation', 303);
};
