# 简易物品搜索

鸣谢：[悬浮窗工具支持](https://unpkg.cnpmjs.org/@thewakingsands/kit-tooltip@0.2.0/dist/example/auto.html)

<div>
<script src="https://cdn.jsdelivr.net/npm/@thewakingsands/kit-tooltip/dist/bundle.js"></script>
<script src="/js/search.js" defer></script>
<style type="text/css">
#demo>span:hover {
  color: #00f;
  background: #0ff;
  cursor: default;
}
</style>
<script>
</script>
<div class="search-box"><input id="itemsearch" value='酒神杖·究极' onkeydown="Enter(event)" ></div>

<button type="button" onclick="ItemSearch()" >搜索</button>

<p id="itemresult"></p>
</div>

