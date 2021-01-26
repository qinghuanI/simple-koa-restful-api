const path = require('path');
const Koa = require('koa');
const cors = require('koa-cors');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const KoaStatic = require('koa-static2');
const jwt = require('koa-jwt');
const helmet = require('koa-helmet');
const router = require('./routes');
const ErrorRoutesCatch = require('./middleware/ErrorRoutesCatch');
const ErrorRoute = require('./middleware/ErrorRoute');
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

module.exports = app;
