import { Hono } from '@hono/hono';
import { createWebcMiddleware } from '@esroyo/hono-webc';

const app = new Hono();

app.use(createWebcMiddleware({
    defineComponents: '**/components/**/*.webc',
    input: 'layout.webc',
    data: {
        source:
            'https://github-embed.deno.dev/esroyo/hono-webc-examples/blob/main/001-hello-world/',
    },
}));

app.get('/', (ctx) => {
    return ctx.render(`<hello-world></hello-world>`);
});

export default {
    app,
    desc: 'Basic usage of a component',
    route: '/hello-world',
};
