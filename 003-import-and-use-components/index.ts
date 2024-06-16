import { Hono } from '@hono/hono';
import { honoWebc } from '@esroyo/hono-webc';
import { buildRelativePath } from '../utils.ts';

const app = new Hono();

app.use(honoWebc({
    data: {
        source:
            'https://github.com/esroyo/hono-webc-examples/blob/main/003-import-and-use-components',
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
