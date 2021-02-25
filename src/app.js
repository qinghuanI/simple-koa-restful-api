import path from 'path';
import Koa from 'koa';
import cors from 'koa-cors';
import logger from 'koa-logger';
import koaBody from 'koa-body';
import KoaStatic from 'koa-static2';
import jwt from 'koa-jwt';
import helmet from 'koa-helmet';
import router from './routes';
import ErrorRoutesCatch from './middleware/ErrorRoutesCatch';
import ErrorRoute from './middleware/ErrorRoute';

const app = new Koa();

const JWT_SECRET = 'wqdjkwl1e21FQlk1j2';

app.use(cors());
app.use(helmet());
app.use(
  koaBody({
    multipart: true,
    parsedMethods: ['POST', 'PUT', 'PATCH', 'GET', 'HEAD', 'DELETE'],
    jsonLimit: '10mb',
    formLimit: '10mb',
    textLimit: '10mb'
  })
);

app.use(ErrorRoutesCatch());
app.use(jwt({ secret: JWT_SECRET }).unless({ path: [/^\/public|\/login/] }));
app.use(KoaStatic('assets', path.resolve(__dirname, 'assets')));
app.use(logger());
app.use(router.routes()).use(router.allowedMethods()).use(ErrorRoute());

export default app;
