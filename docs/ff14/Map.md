# 地图搜索

<div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.5.1/dist/leaflet.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@thewakingsands/eorzea-interactive-map/dist/map.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@thewakingsands/eorzea-interactive-map/dist/map.js"></script>
    <script type="text/javascript">  
        function func() 
        {
            var text='';
            const x = document.getElementById("mapsearch").value;
            if(x.length<2){
                document.getElementById("mapresult").innerHTML = '请输入至少两个字符';
                return;
            }            
            document.getElementById("mapresult").innerHTML = '搜索中';
            const url = 'https://cafemaker.wakingsands.com'+"/search?indexes=PlaceName&string="+encodeURIComponent(x);
            fetch(url)
            .then(data=>{return data.json()})
            .then(async(res)=>{
                text+=`搜索结果：${res.Pagination.ResultsTotal}个，仅显示有效值<br><br>`;
                for(i in res.Results){
                    const nexturl=`https://cafemaker.wakingsands.com/PlaceName/${res.Results[i].ID}`;
                    const single = await fetch(nexturl);
                    const json=await single.json();
                    if(json.Maps[0]){
                        const id=json.Maps[0].ID;
                        const name=res.Results[i].Name;
                        text+=`<span onclick="openmap(${id})">${name}</span><br>`;
                    };
                }
                document.getElementById("mapresult").innerHTML = text;
            });
        }
        function search() {
            if(event.keyCode == 13) {
                func();
            }
        }        
        function openmap(id) {
            window.map.loadMapKey(id)
        }
        function init(){
            const el = document.querySelector('#eorzea-map') // 地图容器，请自行创建
            window.YZWF.eorzeaMap.create(el)
            .then(function (map) {
            window.map = map
            map.loadMapKey(92) // 23 为地图编号（游戏内 Map 表）  
            })
        }
        setTimeout(init,300);
    </script>
    <style>
        .erozea-map-outer {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        }
        .eorzea-map-inner {
        width: 100%;
        height: 100%;
        }
        .eorzea-map-place-name {
        color: #fff;
        }
    </style>
    <style type="text/css">
    #mapresult>span:hover {
    color: #00f;
    background: #0ff;
    cursor: default;
    }
    </style>
</div>


[大地图](https://map.wakingsands.com/)

<br>
<input id="mapsearch" value='溶洞' onkeydown="search()" >
<button type="button" onclick="func()" >搜索</button>
<p id="mapresult"></p>
<br>
<br>
<div>
    <section class="erozea-map-outer" style="height:500px;width:700px">
    <div class="eorzea-map-inner" id="eorzea-map" ></div>
    <div class="eorzea-map-resize-handler"></div>
    </section>
</div>
