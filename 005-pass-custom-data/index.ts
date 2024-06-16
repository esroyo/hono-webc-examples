import { Hono } from '@hono/hono';
import { honoWebc } from '@esroyo/hono-webc';
import { buildRelativePath } from '../utils.ts';

const app = new Hono();

app.use(honoWebc({
    data: {
        source:
            'https://github.com/esroyo/hono-webc-examples/blob/main/005-pass-custom-data',
        xpto: 'buzz',
    },
    input: 'layout.webc',
}));

app.get('/', (ctx) => {
    return ctx.render(
        buildRelativePath(import.meta.url, '/components/extra-data.webc'),
        {
            foo: 'bar',
            xpto: 'woof',
        },
    );
});

export default {
    app,
    desc:
        `In order to offer a more clean way to feed your templates with data, you can pass extra data to it when defining the middleware and also when calling ctx.render().`,
    route: '/pass-custom-data',
};
