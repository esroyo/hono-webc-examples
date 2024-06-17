import { Hono } from '@hono/hono';
import { createWebcMiddleware } from '@esroyo/hono-webc';
import { buildRelativePath } from '../utils.ts';

const app = new Hono();

app.use(createWebcMiddleware({
    data: {
        source:
            'https://github-embed.deno.dev/esroyo/hono-webc-examples/blob/main/006-webc-for-loops',
    },
    input: 'layout.webc',
}));

app.get('/', (ctx) => {
    return ctx.render(
        buildRelativePath(import.meta.url, 'components/sample-loop.webc'),
        { colors: ['red', 'green', 'blue'] },
    );
});

export default {
    app,
    desc: 'How loop syntax works',
    route: '/webc-for-loops',
};
