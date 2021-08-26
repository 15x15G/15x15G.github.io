# 高级文本搜索

目前仅支持中文文本检索

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
    <br>
    <br>
    <input id="text" value='苍天之龙骑士' onkeydown="search()" >
    <button type="button" onclick="func()" >搜索</button>
    <p id="result"></p>
    <script>    
        function func() 
        {
            var text='';
            var x = document.getElementById("text").value;
            if(x.length<2){
                document.getElementById("result").innerHTML = '请输入至少两个字符';
                return;
            }  
            document.getElementById("result").innerHTML = '搜索中';
            var url = 'https://cafemaker.wakingsands.com'+"/lore?columns=Text,Data,Source&language=cn&string="+encodeURIComponent(x);
            fetch(url)
            .then(data=>{return data.json()})
            .then(res=>{
                console.log(res)
                text+=`搜索结果：${res.Pagination.ResultsTotal}个`
                if(res.Pagination.ResultsTotal>100){
                    text+=`，仅显示前100个`
                }
                text+='<br><br><ul>'
                for(i in res.Results){
                    if(res.Results[i].Data.Name){var name=" - "+res.Results[i].Data.Name}
                    else {var name=""}
                    text+=`<li>${res.Results[i].Source}${name}<ul><li>${res.Results[i].Text}</li></ul></li>`;
                }
                text+="</ul>";
                document.getElementById("result").innerHTML = text;
            })
            // var json = httpRequest.responseText;//获取到json字符串，还需解析
            // for(item in json['Results']){
            //     text+=item['Name'];
            // }
        }
        function search() {
        if(event.keyCode == 13) {
            func();
        }
    }
    </script>
</div>