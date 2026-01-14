export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      // Get email from request body
      const { email } = await request.json();

      if (!email || !email.includes('@')) {
        return new Response(JSON.stringify({ error: 'Invalid email' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Subscribe to ConvertKit
      const response = await fetch(`https://api.convertkit.com/v3/forms/${env.CONVERTKIT_FORM_ID}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: env.CONVERTKIT_API_SECRET,
          email: email,
        })
      });

      const ckData = await response.json();

      if (!response.ok) {
        console.error('ConvertKit error:', response.status, ckData);
        throw new Error(`ConvertKit API error: ${response.status}`);
      }

      // Success!
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });

    } catch (error) {
      console.error('Worker error:', error.message);
      return new Response(JSON.stringify({ error: 'Subscription failed', details: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
    }
  }
};
