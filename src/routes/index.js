const Router = require('koa-router');
const router = new Router();

const LoginController = require('./login');
const UsersController = require('./users');

router.get('/login', LoginController.get);
router.get('/', UsersController.get);
router.post('/users', UsersController.post);
router.get('/users', UsersController.get);

module.exports = router;
