import { Hono } from '@hono/hono';
import { honoWebc } from '@esroyo/hono-webc';
import { CookieStore, Session, sessionMiddleware } from '@jcs224/hono-sessions';
import { buildRelativePath } from '../utils.ts';

const app = new Hono<{
    Variables: {
        session: Session;
    };
}>();

const store = new CookieStore();

app.use(sessionMiddleware({
    store,
    encryptionKey: 'JF5FKPfxJn5PE6RRFzPkvnk8vpnP9sjQ',
    expireAfterSeconds: 900, // Expire session after 15 minutes of inactivity
    cookieOptions: {
        sameSite: 'Lax', // Recommended for basic CSRF protection in modern browsers
        path: '/', // Required for this library to work properly
        httpOnly: true, // Recommended to avoid XSS attacks
    },
}));

app.use(honoWebc({
    data: {
        source:
            'https://github-forward.deno.dev/esroyo/hono-webc-examples/blob/main/004-using-with-other-middlewares',
    },
    input: 'layout.webc',
}));

app.get('/', (ctx) => {
    return ctx.render(
        buildRelativePath(import.meta.url, 'components/guess.webc'),
    );
});

app.post('/result/', async (ctx) => {
    const body = await ctx.req.parseBody();
    const { session } = ctx.var;
    if (!session.get('guesses')) {
        session.set('guesses', []);
    }
    session.get('guesses').push(body['num']);
    return ctx.render(
        buildRelativePath(import.meta.url, 'components/result.webc'),
    );
});

app.get('/clear/', async (ctx) => {
    ctx.var.session.set('guesses', []);
    return ctx.redirect('../', 302);
});

export default {
    app,
    desc:
        'Combining several Hono middlewares into the same project, so you get all the nice stuff from Hono ecosystem',
    route: '/using-with-other-middlewares/',
};
