# 简易物品搜索

<div>
<script src="https://cdn.jsdelivr.net/npm/@thewakingsands/kit-tooltip/dist/bundle.js"></script>
</div>

<div>
<style type="text/css">
#demo>span:hover {
  color: #00f;
  background: #0ff;
  cursor: default;
}
</style>
<script>
    function init(){
        CafeKitTooltip.initTooltip({
            context: {
                apiBaseUrl: 'https://cafemaker.wakingsands.com',  // xivapi 或 cafemaker 的 url；最后不要有斜线
                iconBaseUrl: 'https://cafemaker.wakingsands.com/i', // 图标 cdn 的 url；最后不要有斜线
                defaultHq: true,  // 是否默认显示 HQ 数据
                hideSeCopyright: true, // 是否隐藏 SE 版权信息
            },
            links: {
                detectWikiLinks: false,  // 是否自动识别 wiki 物品链接
                itemNameAttribute: 'data-ck-item-name', // 自定义悬浮窗时，声明物品名字的属性
                itemIdAttribute: 'data-ck-item-id', // 自定义悬浮窗时，声明物品 ID 的属性
                rootContainer: document, // 监控的根元素
            },
        })
    }
    function func() 
    {
        document.getElementById("demo").innerHTML = '搜索中';
        var text='';
        var x = document.getElementById("item").value;
        var url = 'https://cafemaker.wakingsands.com'+"/search?indexes=Item&string="+encodeURIComponent(x);
        fetch(url)
        .then(data=>{return data.json()})
        .then(res=>{
            console.log(res)
            text+=`搜索结果：${res.Pagination.ResultsTotal}个`
            if(res.Pagination.ResultsTotal>100){
                text+=`，仅显示前100个`
            }
            text+='<br><br>'
            for(i in res.Results){
                text+=`<span data-ck-item-id="${res.Results[i].ID}">${res.Results[i].Name}</span><br>`;
            }
            document.getElementById("demo").innerHTML = text;
            init();
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

<input id="item" value='酒神杖·究极' onkeydown="search()" >
<button type="button" onclick="func()" >搜索</button>

<p id="demo"></p>
</div>

