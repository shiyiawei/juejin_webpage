const Router = require('koa-router')
const router = new Router()
const request = require('../../request')
const { apiJuejin } = require('../../config/url')
const validator = require('../../middleware/validator')

/**
 * 获取右侧作者列表
 * @param {number} limit - 条数
 * @param {number} cursor - 分页标识
 * @param {string} category_id - 类目
 */
router.get('/authorBlock',async (ctx, next) => {
  ctx.set('Cache-Control', 'max-age=60')
  const options = {
    url: `http://localhost:1337/api/authors?populate=deep`,
    method: "GET",
  };
  let { body } = await request(options)
  ctx.body = body
})

/**
 * 获取右侧广告
 * @param {number} limit - 条数
 * @param {number} cursor - 分页标识
 * @param {string} category_id - 类目
 */
router.get('/banerBlock',async (ctx, next) => {
  ctx.set('Cache-Control', 'max-age=60')
  const options = {
    url: `http://localhost:1337/api/advertisement-pics?populate=deep`,
    method: "GET",
  };
  let { body } = await request(options)
  ctx.body = body
})


/**
 * 获取推荐作者
 * @param {number} limit - 条数
 * @param {number} cursor - 分页标识
 * @param {string} category_id - 类目
 */
router.get('/recommendAuthor', validator({
  limit: {
    type: 'string',
    required: true,
    validator: (rule, value) => Number(value) > 0,
    message: 'limit 需传入正整数'
  },
  cursor: { type: 'string' },
  category_id: { type: 'string' }
}), async (ctx, next) => {
  ctx.set('Cache-Control', 'max-age=60')
  const data = ctx.query
  const options = {
    url: `${apiJuejin}user_api/v1/author/recommend`,
    method: "GET",
    params: {
      category_id: data.category_id || '',
      cursor: data.cursor || 0,
      limit: data.limit || 20,
    }
  };
  let { body } = await request(options)
  ctx.body = body
})

module.exports = router
