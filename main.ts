import { Hono } from '@hono/hono';
import { honoWebc } from '@esroyo/hono-webc';
import examples from './index.ts';

const examplesApp = new Hono().basePath('/examples');
for (const example of examples) {
    examplesApp.route(example.route, example.app);
}

const homepageApp = new Hono();
homepageApp.use(honoWebc({
    data: { source: 'https://github.com/esroyo/hono-webc-examples/blob/main/main.ts' },
    input: 'layout.webc',
}));
homepageApp.on('GET', ['/', '/examples'], async (ctx) => {
    return ctx.render(`
<h1>Hono WebC examples</h1>
<dl>
  <div webc:for="example of examples">
    <dt><a :href="'/examples' + example.route" @raw="example.route"></a></dt>
    <dd @raw="example.desc"></dd>
  </div>
</dl>`,
        { examples: examples.map(({ desc, route }) => ({ desc, route })) },
    );
});

const app = new Hono();
app.route('/', homepageApp);
app.route('/', examplesApp);

Deno.serve(app.fetch, { port: 8000 });
