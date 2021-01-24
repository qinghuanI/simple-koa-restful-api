module.exports = function () {
  return function (ctx, next) {
    console.log('ctx.status =', ctx.status);
    switch (ctx.status) {
      case 404:
        ctx.body = '没有找到内容 - 404';
        break;
    }
    return next();
  };
};
