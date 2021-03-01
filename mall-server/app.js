const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

// load上传文件
const koaBody = require('koa-body');
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 2000*1024*1024    // 设置上传文件大小最大限制，默认20M
  }
}));

// 公开该目录，访问图片
app.use(require('koa-static')(__dirname + '/data'))

const index = require('./routes/index')
const users = require('./routes/users')
const product = require('./routes/product')
const order = require('./routes/order')

// error handler
onerror(app)

// 跨域模块
const cors = require('koa2-cors');
app.use(cors());

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(product.routes(), product.allowedMethods())
app.use(order.routes(), product.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
