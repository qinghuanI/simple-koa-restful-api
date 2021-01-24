const jwt = require('jwt-simple');

const JWT_SECRET = 'wqdjkwl1e21FQlk1j2';

class LoginController {
  async get(ctx) {
    const tokenExpiresTime = 1000 * 60 * 60 * 24 * 7;
    const payload = {
      exp: Date.now() + tokenExpiresTime
    };

    const token = jwt.encode(payload, JWT_SECRET);
    ctx.body = {
      token
    };
  }
}

module.exports = new LoginController();
