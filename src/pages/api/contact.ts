import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ ok: true, route: 'contact', methods: ['POST'] }), {
    headers: { 'content-type': 'application/json' }
  });

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get('content-type') ?? '';

  if (!contentType.includes('multipart/form-data') && !contentType.includes('application/x-www-form-urlencoded')) {
    return new Response(
      JSON.stringify({
        ok: false,
        message: 'Contact messages must be submitted from the contact form.'
      }),
      {
        status: 400,
        headers: { 'content-type': 'application/json' }
      }
    );
  }

  const formData = await request.formData();
  const message = Object.fromEntries(formData);

  console.info('Contact placeholder received', message);

  return new Response(JSON.stringify({ ok: true, message: 'Contact message placeholder received.' }), {
    status: 200,
    headers: { 'content-type': 'application/json' }
  });
};
