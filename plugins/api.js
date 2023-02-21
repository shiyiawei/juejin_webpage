export default ({ app: { $request } }, inject) => {
  inject('api', {
 
    /**
     * 获取首页列表
     * @param {string} cate_id - 分类id
     * @param {string} cursor - 分页标识，加载下一页传入
     * @param {string} limit - 条数
     * @param {string} sort_type - 0：全部、3：三天内、7：7天内、30：30天内、200：热门、300：最新
     * @param {string} feed_type - all：推荐，cate：分类
     */
    getIndexList (data = {}) {
      return $request.get('/v2/articles/indexList', data)
    },
    /**
     * 获取详情页信息
     * @param {string} article_id - 文章id
     */
    getDetail (params = {}) {
      let res = $request.get('/v2/articles/detail', params)
      return res
    },
    /**
     * 获取用户信息
     * @param {string} user_id - 用户id
     * @param {string} not_self
     */
    getMultiUser(params = {}){
      return $request.get('/v2/users/multiUser', params)
    },
    
    /**
     * 获取标签详情
     * @param {string} key_word
     */
    getTagDetail(params = {}){
      return $request.get('/v2/tags/detail', params)
    },

    /**
     * 获取对应标签的文章列表
     * @param {string} cursor - 分页标识
     * @param {number} sort_type - 排序: 0-最热、200-热门，300-最新
     * @param {array} tag_ids - 标签
     */
    getTagEntry(data = {}){
      return $request.post('/v2/tags/entry', data)
    },

    /**
     * 获取用户专栏文章
     * @param {string} user_id - 用户id
     * @param {string} cursor - 分页
     * @param {number} sort_type - 1：热门、2：最新
     */
    getUserPost(params = {}){
      return $request.get('/v2/articles/userPost', params)
    },
    /**
     * 获取右侧作者
     */
    getAuthorBlock(){
      return $request.get('/v2/recommends/authorBlock')
    },
    /**
     * 获取右侧广告
     */
    getBanerBlock(){
      return $request.get('/v2/recommends/banerBlock')
    },
    /**
     * 获取推荐作者
     */
    getRecommendAuthor(params = {}){
      return $request.get('/v2/recommends/recommendAuthor', params)
    },
    /**
     * 获取相关文章
     * @param {number} tag_id - 分类标签的id
     */
    getRelatedEntry(params = {}){
      let res = $request.get('/v2/articles/relatedEntry', params)
      return res
    },
  /**
   * 根据标签id获取相关推荐文章
   * @param {string} item_id - 文章id
   * @param {string} cursor - 分页标识
   * @param {number} sort_type - 排序
   * @param {array} tag_ids - 标签id
   */
    getRecommendEntryByTagIds(data = {}){
      return $request.post('/v2/articles/recommendEntryByTagIds', data)
    },
    // 获取标签
    getTags(){
      return $request.get('/v2/tags/tags')
    },
    /**
     * 获取类目
     * @param {number} show_type 0：首页 1：作者排行榜 2：小册
     */
    getCategories(params = {}){
      return $request.get('/v2/categories/entry', params)
    },
    /**
     * 获取类目下的标签
     * @param {string} cate_id - 类目id
     */
    getTagByCategories(params = {}){
      return $request.post('/v2/categories/tags', params)
    },
    /**
     * 获取已关注的标签
     */
    getTagBySubscribed(){
      return $request.get('/v2/tags/subscribed')
    },
    /**
     * 获取全部标签
     * @param {string} type - 类型： 最新、最热
     * @param {number} page - 页码
     * @param {number} pageSize - 页数
     */
    getTagByAll(params = {}){
      return $request.get('/v2/tags/all', params)
    },

    /**
     * 关注标签
     * @param {string} tagId
     */
    followTag(data = {}){
      return $request[data.method]('/v2/tags/subscribe', {
        tagId: data.tagId
      })
    },
    /**
     * 获取话题列表
     * @param {string} cursor - 分页标识
     * @param {number} limit - 条数
     * @param {string} sort_type - 排序
     */
    getTopics(params = {}) {
      return $request.get('/v2/topics/list', params)
    },
    /**
     * 获取推荐话题列表
     * @param {string} cursor - 分页标识
     * @param {number} limit - 条数
     * @param {string} sort_type - 排序
     */
    getRecommendTopics(params = {}) {
      return $request.get('/v2/topics/recommendList', params)
    },
    /**
     * 获取已关注话题列表
     * @param {string} cursor - 分页标识
     * @param {number} limit - 条数
     * @param {string} sort_type - 排序
     */
    getFollowedTopics(params = {}) {
      return $request.get('/v2/topics/followedList', params)
    },
    /**
     * 关注话题
     * @param {string} topicId
     */
    followTopic(data = {}){
      return $request[data.method]('/v2/topics/follow', {
        topicIds: data.topicIds
      })
    },
  })
}