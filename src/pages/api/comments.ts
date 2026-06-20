import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ ok: true, route: 'comments', methods: ['POST'] }), {
    headers: { 'content-type': 'application/json' }
  });

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get('content-type') ?? '';

  if (!contentType.includes('multipart/form-data') && !contentType.includes('application/x-www-form-urlencoded')) {
    return new Response(
      JSON.stringify({
        ok: false,
        message: 'Comments must be submitted from the comment form.'
      }),
      {
        status: 400,
        headers: { 'content-type': 'application/json' }
      }
    );
  }

  const formData = await request.formData();
  const comment = Object.fromEntries(formData);

  console.info('Comment placeholder received', comment);

  return new Response(JSON.stringify({ ok: true, message: 'Comment placeholder received for moderation.' }), {
    status: 200,
    headers: { 'content-type': 'application/json' }
  });
};
