# 地图搜索

<div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.5.1/dist/leaflet.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@thewakingsands/eorzea-interactive-map/dist/map.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@thewakingsands/eorzea-interactive-map/dist/map.js"></script>
    <script src="/js/search.js" defer></script>
    <script type="text/javascript">          
        //setTimeout(MapInit,5000);
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

鸣谢：[地图工具支持](https://github.com/thewakingsands/wakingsands.com/wiki/InteractiveMap)

<br>
<input id="mapsearch" value='溶洞' onkeydown="Enter(event)" >
<button type="button" onclick="MapSearch()" >搜索</button>
<p id="mapresult"></p>
<br>
<br>
<div>
    <section class="erozea-map-outer" style="height:500px;width:700px">
    <div class="eorzea-map-inner" id="eorzea-map" ></div>
    <div class="eorzea-map-resize-handler"></div>
    </section>
</div>
