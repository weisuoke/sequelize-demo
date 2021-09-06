const Koa = require('koa')
const router = require('koa-router')()
const koaBody = require('koa-body')
const app = new Koa()

app.use(koaBody())

const Student = require('./db/models').student;

//添加学生信息
router.post('/student', async ctx => {
  ctx.body = await Student.create(ctx.request.body);
});

//更新学生信息
router.put('/student', async ctx => {
  const { id } = ctx.request.body;
  ctx.body = await Student.update(ctx.request.body, { where: { id } });
});

//获取学生列表
router.get('/students', async ctx => {
  ctx.body = await Student.findAll();
});

//根据id删除学生信息
router.delete('/student/:id', async ctx => {
  const { id } = ctx.params;
  ctx.body = await Student.destroy({ where: { id } });
});

const Class = require('./db/models')._class;

//获取班级信息以及班级里的所有学生
router.get('/classes', async ctx => {
  //获取所有班级以及学生信息
  ctx.body = await Class.findAll({ include: [Student] });
});

app.use(router.routes())
  .use(router.allowedMethods('*'))

app.listen(3000, () => {
  console.log('server is listening on 3000...')
})
