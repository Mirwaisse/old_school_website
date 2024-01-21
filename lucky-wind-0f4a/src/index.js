export default {
	async fetch(request, env, ctx) {
		try {
			const value = await env.old_school_website_namespace.get('numbers');
			if (value === null) {
				return new Response('Value not found', { status: 404 });
			}
			return new Response(value);
		} catch (err) {
			console.error(`KV returned error: ${err}`);
			return new Response(err, { status: 500 });
		}
	},
};
