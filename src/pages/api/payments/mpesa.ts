import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ ok: true, route: 'mpesa-payment', methods: ['POST'] }), {
    headers: { 'content-type': 'application/json' }
  });

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const payment = Object.fromEntries(formData);

  console.info('M-Pesa STK Push placeholder received', payment);

  return redirect('/payment-status', 303);
};
