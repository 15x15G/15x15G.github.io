# 一些碎碎念

## 建站相关

[官方教程](https://v1.vuepress.vuejs.org/zh/guide/getting-started.html)

[其他教程](https://segmentfault.com/a/1190000017055963)

[官网的config.js](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js)

当初其实是想着 <i>这个主题有侧边栏耶</i> 这种想法才用vuepress建站的，结果建完才发现这么麻烦...

### 问题

* ~~单页应用的缓存模式导致每次部署之后需要ctrl+F5才会刷新，加上了pwa插件不知道能不能解决~~
    * 加上了pwa，已解决

* js现在都是在`<div>`里加载，有可能会因为各种原因失败（。    

* ~~由于每次部署都是`git push -f`强制推送，所以基于commit的`lastUpdated`设置只会显示站点部署时间而不是页面修改的时间...没想到解决方法，总不能每次都手动部署然后手动提交`.vuepress/dist`目录吧~~
    * ~~TODO: 好吧其实可以试试用页面js调用GithubAPI来拿到commit时间~~
    * 原因找到了，不是强制推送的问题，是这个[issue](https://github.com/reuixiy/hugo-theme-meme/issues/107#issuecomment-740006482)里提到的[checkout](https://github.com/actions/checkout)有问题，自己修改workflows手动checkout顺利解决了

* 因为大量魔改JS，本站对移动设备支持不友好（。

### 其他

看到一个挺新鲜的模式是，博主在issues里发表博文，然后action通过API拉取issues列表来部署博客网站，我得想想能不能把这种方式缝合在这里或者建个新站...

### 讨论区

与gitalk、vssue等基于issues的静态博客评论模块不同，[giscus](https://github.com/laymonage/giscus) 基于Github Discussions 工作，从而能把issues腾出来用作别处。

作为[VUE组件](https://github.com/giscus/giscus-component)导入的工作失败了（...），网上居然完全搜不到将giscus导入vuepress的教程，所以现在 ~~暂时用js加载~~ 用vue组件在单文件中加载，~~而且暂时不支持FFXIV字体~~ 现已支持FFXIV字体

