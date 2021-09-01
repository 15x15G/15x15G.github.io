# 一些碎碎念

## 建站相关

[官方教程](https://v1.vuepress.vuejs.org/zh/guide/getting-started.html)

[其他教程](https://segmentfault.com/a/1190000017055963)

当初其实是想着 <i>这个主题有侧边栏耶</i> 这种想法才用vuepress建站的，结果建完才发现这么麻烦...

### 问题

* 单页应用的缓存模式导致每次部署之后需要ctrl+F5才会刷新，加上了pwa插件不知道能不能解决

* js没法直接写在`<Header>`上...现在都是在`<div>`里加载，有可能会因为网速加载失败（。


### 其他

看到一个挺新鲜的模式是，博主在issues里发表博文，然后action通过API拉取issues列表来部署博客网站，我得想想能不能把这种方式缝合在这里或者建个新站...
