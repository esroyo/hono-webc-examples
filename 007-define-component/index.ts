import { Hono } from '@hono/hono';
import { honoWebc } from '@esroyo/hono-webc';
import { buildRelativePath } from '../utils.ts';

const app = new Hono({ input: 'layout.webc' });

app.use(honoWebc({
    defineComponents: '**/components/**/*.webc',
    data: {
        friends: [
            { name: 'Joe' },
            { name: 'Monica' },
            { name: 'Chandler' },
            { name: 'Rachel' },
            { name: 'Phoebe' },
            { name: 'Ross' },
        ],
        source:
            'https://github-forward.deno.dev/esroyo/hono-webc-examples/blob/main/007-define-component',
    },
    input: 'layout.webc',
}));

app.get('/', (ctx) => {
    return ctx.render(
        buildRelativePath(import.meta.url, 'components/my-agenda.webc'),
    );
});

export default {
    app,
    desc:
        "If you don't want to express how to import components explicitly, pass the `defineComponents` glob to hono-webc, so it will pass it to WebC and you don't have to `webc:import` every single component you wish to use.",
    route: '/define-component',
};
