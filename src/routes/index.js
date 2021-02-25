import Router from 'koa-router';

import LoginController from './login';
import UsersController from './users';

const router = new Router();

router.get('/login', LoginController.get);
router.get('/', UsersController.get);
router.post('/users', UsersController.post);
router.get('/users', UsersController.get);

export default router;
