export default {
	async fetch(request, env, ctx) {
		try {
			const value = await env.old_school_website_namespace.get('numbers');
			if (value === null) {
				return new Response('Value not found', { status: 404 });
			}
			let response = new Response(value);
			response.headers.set('Access-Control-Allow-Origin', '*');
			response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
			response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
			return response;
		} catch (err) {
			console.error(`KV returned error: ${err}`);
			return new Response(err, { status: 500 });
		}
	},
};
