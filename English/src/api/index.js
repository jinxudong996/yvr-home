
 import service from '@/utils/fetch'
 export function slogan(data) {         //宣传语
   return service({
     url: 'cms/job/slogan',
     method: 'get',
     params:data
   })
 }

 export function jobList(data) {         //岗位列表
  return service({
    url: 'cms/job/jobList',
    method: 'get',
    params:data
  })
}

export function aboutusIndex(data) {         //关于我们
  return service({
    url: 'cms/aboutus/index',
    method: 'get',
    params:data
  })
}

export function dictType(dictType,data) {         //获取字典
  return service({
    url: `common/type/${dictType}`,
    method: 'get',
    params:data
  })
}

export function friendList(data) {         // api/cms/link/list 查询友情链接列表
  return service({
    url: 'cms/link/list',
    method: 'get',
    params:data
  })
}

export function headline(data) {         // /api/cms/news/headline 查询最新头条列表
  return service({
    url: 'cms/news/headline',
    method: 'get',
    params:data
  })
}

export function getNewsList(data) {         // /api/cms/news/list 查询品牌新闻列表
  return service({
    url: 'cms/news/list',
    method: 'get',
    params:data
  })
}

export function getNewsDetail(id,data) {         // /api/cms/news/{id}   获取品牌新闻详情
  return service({
    url: `cms/news/${id}`,
    method: 'get',
    params:data
  })
}

export function serviceIndex(data) {         // /api/cms/service/index  服务与支持首页
  return service({
    url: 'cms/service/index',
    method: 'get',
    params:data
  })
}

export function recommend(data) {         // /api/cms/store/recommend  推荐门店
  return service({
    url: 'cms/store/recommend',
    method: 'get',
    params:data
  })
}

export function getstoreList(data) {         // /api/cms/store/list 查询门店列表
  return service({
    url: 'cms/store/list',
    method: 'get',
    params:data
  })
}

export function homeIndex(data) {         // /api/cms/home/index  首页
  return service({
    url: 'cms/home/index',
    method: 'get',
    params:data
  })
}

export function getPage(code,data) {         // /api/common/help/{code}  根据编码获取帮助文档
  return service({
    url: `common/help/${code}`,
    method: 'get',
    params:data
  })
}

export function getNewsRelated(id,data) {         // /api/cms/news/{id}/related  查询相关品牌新闻列表
  return service({
    url: `cms/news/${id}/related`,
    method: 'get',
    params:data
  })
}
export function feedback(data) {         // /api/cms/feedback 新增反馈
  return service({
    url: 'cms/feedback',
    method: 'post',
    data:data
  })
}
