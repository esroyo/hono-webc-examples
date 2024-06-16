import { Hono } from '@hono/hono';
import { honoWebc } from '@esroyo/hono-webc';

const app = new Hono();

app.use(honoWebc({
    defineComponents: '**/components/**/*.webc',
    data: {
        source:
            'https://github.com/esroyo/hono-webc-examples/blob/main/002-counter-button',
    },
    input: 'layout.webc',
}));

app.get('/', (ctx) => {
    return ctx.render(`<my-counter :initial="initial"></my-counter>`, {
        initial: 10,
    });
});

export default {
    app,
    desc:
        "Sampling how WebC scopes styles, scripts and provides a uid attribute to keep unique id's inside a component",
    route: '/my-counter',
};
