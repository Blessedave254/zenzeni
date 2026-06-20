import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ ok: true, route: 'card-payment', methods: ['POST'] }), {
    headers: { 'content-type': 'application/json' }
  });

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const payment = Object.fromEntries(formData);

  console.info('Card payment placeholder received', payment);

  return redirect('/payment-status', 303);
};
