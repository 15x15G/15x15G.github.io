# 一些碎碎念

## 建站相关

[官方教程](https://v1.vuepress.vuejs.org/zh/guide/getting-started.html)

[其他教程](https://segmentfault.com/a/1190000017055963)

[官网的config.js](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js)

当初其实是想着 <i>这个主题有侧边栏耶</i> 这种想法才用vuepress建站的，结果建完才发现这么麻烦...

### 问题

* ~~单页应用的缓存模式导致每次部署之后需要ctrl+F5才会刷新，加上了pwa插件不知道能不能解决~~
    * 已解决

* js现在都是在`<div>`里加载，有可能会因为各种原因失败（。    

* 由于每次部署都是`git push -f`强制推送，所以基于commit的`lastUpdated`设置只会显示站点部署时间而不是页面修改的时间...没想到解决方法，总不能每次都手动部署然后手动提交`.vuepress/dist`目录吧
    * TODO: 好吧其实可以试试用页面js调用GithubAPI来拿到commit时间


### 其他

看到一个挺新鲜的模式是，博主在issues里发表博文，然后action通过API拉取issues列表来部署博客网站，我得想想能不能把这种方式缝合在这里或者建个新站...
