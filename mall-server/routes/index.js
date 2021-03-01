const router = require('koa-router')()
let db = require("../db"); //引入数据库封装模块

router.get('/', async (ctx, next) => {
  let sql = `SELECT * FROM users`;
  //查询数据库
  // await db.query(sql).then(res => {
  //   ctx.body = res
  // }, (err) => {
  //   ctx.body = {te: '失败'}
  // })
  await db.allSqlAction(sql).then(res => {
    // 转JSON
    const _res = JSON.parse(JSON.stringify(res));
    console.log(_res)
    ctx.body = {
      message: _res,
      code: 200
    }
  }, (err) => {
    ctx.body = {
      message: err,
      code: 400
    }
  })
  //配置跨域资源共享
  // ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  // ctx.set('Access-Control-Allow-Credentials', 'true');
})

module.exports = router
