class UsersController {
  async get(ctx) {
    ctx.body = JSON.stringify([
      {
        name: 'qin',
        age: 26
      }
    ]);
  }

  async post(ctx) {
    const { name, age } = ctx.request.body;

    console.log(name, age);
    ctx.body = JSON.stringify(ctx.request.body);
  }
}

export default new UsersController();
