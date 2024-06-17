import { Hono } from '@hono/hono';
import { createWebcMiddleware } from '@esroyo/hono-webc';
import { buildRelativePath } from '../utils.ts';

const app = new Hono();

app.use(createWebcMiddleware({
    data: {
        source:
            'https://github-embed.deno.dev/esroyo/hono-webc-examples/blob/main/003-import-and-use-components',
    },
    input: 'layout.webc',
}));

app.get('/', (ctx) => {
    return ctx.render(buildRelativePath(import.meta.url, 'pages/main.webc'));
});

export default {
    app,
    desc:
        'How to import one component inside another, so you can modularize your templates',
    route: '/import-and-use-components',
};
