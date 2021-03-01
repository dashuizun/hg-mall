const router = require('koa-router')()
let db = require("../db"); //引入数据库封装模块
const fs = require('fs');
router.prefix('/order')

router.get('/', async (ctx, next) => {
  // console.log(ctx.request.query.uName)
  let sql = `SELECT * FROM allorder`;
  await db.allSqlAction(sql).then(res => {
    // 转JSON
    const _res = JSON.parse(JSON.stringify(res));
    _res.forEach(item => {item.pImage = `http://localhost:3000/images/${item.pImage}`})
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
})

router.post('/addOrder', async (ctx, next) => {
  // console.log('看我！！',ctx.request.body)
  const sql = `insert into allorder values(null, '${ctx.request.body.pImage}', 
      '${ctx.request.body.pTitle}', '${ctx.request.body.oBuyName}',
      '${ctx.request.body.oSellName}', '${ctx.request.body.oTime}')`
  await db.allSqlAction(sql).then(res => {
    console.log(res)
    ctx.body = {
      message: '成功',
      code: 200
    }
  })
})

module.exports = router
