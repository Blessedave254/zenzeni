import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ ok: true, route: 'mpesa-payment', methods: ['POST'] }), {
    headers: { 'content-type': 'application/json' }
  });

export const POST: APIRoute = async ({ request, redirect }) => {
  const contentType = request.headers.get('content-type') ?? '';

  if (!contentType.includes('multipart/form-data') && !contentType.includes('application/x-www-form-urlencoded')) {
    return new Response(
      JSON.stringify({
        ok: false,
        message: 'M-Pesa payment requests must be submitted from the payment form.'
      }),
      {
        status: 400,
        headers: { 'content-type': 'application/json' }
      }
    );
  }

  const formData = await request.formData();
  const payment = Object.fromEntries(formData);

  console.info('M-Pesa STK Push placeholder received', payment);

  return redirect('/payment-status', 303);
};
