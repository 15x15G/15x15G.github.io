# 地图搜索

<div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.5.1/dist/leaflet.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@thewakingsands/eorzea-interactive-map/dist/map.css">
    <script src="https://cdn.jsdelivr.net/npm/@thewakingsands/eorzea-interactive-map/dist/map.js"></script>
    <script src="/js/search.js" defer></script>
    <script type="text/javascript">          
        function MapInit(){
            const el = document.querySelector('#eorzea-map') // 地图容器，请自行创建
            if(!el) return;
            if (!window.YZWF) {
                setTimeout(MapInit,1000)
            }
            else{
                window.YZWF.eorzeaMap.create(el)
                    .then(function (map) {
                        window.map = map
                        map.loadMapKey(92) // 92 为地图编号（游戏内 Map 表）
                        // https://xivapi.com/Map/92
                    });                
            }  
        }
        MapInit();
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
    #mapresult span{
        color: #00f;
    }
    #mapresult span:hover {    
        background: #0ff;
        cursor: pointer;
    }
    </style>
</div>


[大地图](https://map.wakingsands.com/)


<br>
<div class="search-box"><input id="mapsearch" value='溶洞' onkeydown="Enter(event)" ></div>
<button type="button" onclick="MapSearch()" >搜索</button>
<p id="mapresult"></p>
<br>
<br>
<div>
    <section  class="erozea-map-outer" style="border-style:solid;border-width:1px; right:5%;left:5%;top:20%;bottom:20%">
    <div class="eorzea-map-inner" id="eorzea-map" ></div>
    <div class="eorzea-map-resize-handler"></div>
    </section>
</div>
<br>
<br>
<br>

鸣谢：[地图工具支持](https://github.com/thewakingsands/wakingsands.com/wiki/InteractiveMap)
