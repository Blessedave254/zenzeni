import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ ok: true, route: 'comments', methods: ['POST'] }), {
    headers: { 'content-type': 'application/json' }
  });

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const comment = Object.fromEntries(formData);

  console.info('Comment placeholder received', comment);

  return new Response(JSON.stringify({ ok: true, message: 'Comment placeholder received for moderation.' }), {
    status: 200,
    headers: { 'content-type': 'application/json' }
  });
};
