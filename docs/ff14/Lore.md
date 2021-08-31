# 高级文本搜索

目前仅支持中文文本检索，不好用，建议使用[文本检索工具](https://strings.wakingsands.com/)



<details>
  <summary>目前包含在搜索中的内容</summary>

* 过场字幕
* 所有任务对话和文本数据
* 物品描述
* 理符描述
* FATE描述
* NPC喊话
* NPC气泡文本
* 实例内容文本数据
* 成就描述
* 平时对话文本
* 任务道具描述
* 坐骑和宠物描述
* Buff描述
* 九宫幻卡描述

</details>

<div>
    <script src="/js/search.js" defer></script>
    <script src="/js/xivapi.js" defer></script>
    <br>
    <br>
    <div class="search-box"><input id="loresearch" value='苍天之龙骑士' onkeydown="Enter(event)" ></div>    
    <button type="button" onclick="NewLoreSearch()" >搜索</button>
    <p id="loreresult"></p>
</div>