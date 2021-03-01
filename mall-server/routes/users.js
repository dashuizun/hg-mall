const router = require('koa-router')()
let db = require("../db"); //引入数据库封装模块

router.prefix('/users')

router.post('/login', async (ctx, next) => {
  // console.log(ctx.request.body)
  let sql = `SELECT *
             FROM users`;
  await db.allSqlAction(sql).then(res => {
    // 转JSON
    const _res = JSON.parse(JSON.stringify(res));
    // console.log(_res)
    let isNo = _res.some((item) => {
      return item.uName === ctx.request.body.uName
          && item.uPsw === ctx.request.body.uPsw
    })
    // console.log(isNo)
    if (isNo) {
      ctx.body = {
        message: '成功',
        token: 'myToken' + ctx.request.body.uName,
        code: 200
      }
    } else {
      ctx.body = {
        message: '失败',
        code: 400
      }
    }

  })
  // ctx.body = 'this is a users response!'
})

router.post('/register', async (ctx, next) => {
  console.log(ctx.request.body)
  let sql = `SELECT *
             FROM users`;
  await db.allSqlAction(sql).then(res => {
    // 转JSON
    const _res = JSON.parse(JSON.stringify(res));
    // console.log(_res)
    let isUName = _res.some((item) => {
      return item.uName === ctx.request.body.uName
    })
    // console.log(isNo)
    if (!isUName) {
      const sql2 = `insert into users values(null, '${ctx.request.body.uName}', 
      '${ctx.request.body.email}', '${ctx.request.body.uPsw}')`
      db.allSqlAction(sql2)
      ctx.body = {
        message: '成功',
        code: 200
      }
    } else {
      ctx.body = {
        message: '用户存在',
        code: 400
      }
    }

  })
  // ctx.body = 'this is a users response!'
})

module.exports = router
