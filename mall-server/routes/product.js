const router = require('koa-router')()
let db = require("../db"); //引入数据库封装模块
const fs = require('fs');
router.prefix('/product')

router.get('/', async (ctx, next) => {
  // console.log(ctx.request.query.uName)
  const uName = ctx.request.query.uName;
  if (uName === '[]') {
    console.log('xxx')
  }
  let sql = `SELECT * FROM product WHERE uName = '${uName}'`;
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

router.get('/all', async (ctx, next) => {
  let sql = `SELECT * FROM product`;
  await db.allSqlAction(sql).then(res => {
    // 转JSON
    const _res = JSON.parse(JSON.stringify(res));
    // console.log(_res)
    _res.forEach(item => {item.pImage = `http://localhost:3000/images/${item.pImage}`})
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

router.post('/addProduct', async (ctx, next) => {
  // console.log('看我！！',ctx.request.body)
  const file = ctx.request.files.file//获取上传文件
  // console.log(file)
  const reader = fs.createReadStream(file.path);//创建可读流
  const ext = file.name.split('.').pop();//获取上传文件扩展名
  const imageName = `${Math.random().toString()}.${ext}`
  console.log('xxxx',imageName)
  const sql = `insert into product values(null, '${ctx.request.body.uName}', 
      '${imageName}', '${ctx.request.body.pTitle}', 
      '${ctx.request.body.pPrice}', '${ctx.request.body.pText}', '${ctx.request.body.pTime}')`
  await db.allSqlAction(sql).then(res => {
    const upStream = fs.createWriteStream(`data/images/${imageName}`);
    reader.pipe(upStream);
    console.log(res)
    ctx.body = {
      message: '成功',
      code: 200
    }
  })
})

router.post('/deleteProduct', async (ctx, next) => {
  console.log(ctx.request.body.pId)
  const sql = `delete from product WHERE pId = '${ctx.request.body.pId}'`
  await db.allSqlAction(sql).then(res => {
    console.log(res)
    ctx.body = {
      message: '成功',
      code: 200
    }
  })
})

module.exports = router
