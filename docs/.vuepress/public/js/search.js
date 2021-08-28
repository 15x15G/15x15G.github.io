var lock = false;
var apiUrl = 'https://cafemaker.wakingsands.com'
async function MapSearch()
{
    if (lock)
        return;
    lock = true;
    try
    {
        const xivapiorg = 'https://xivapi.com'
        let text = '';
        const x = document.getElementById("mapsearch").value;
        if (x.length < 2)
        {
            document.getElementById("mapresult").innerHTML = '请输入至少两个字符';
            return;
        }
        document.getElementById("mapresult").innerHTML = '搜索中';
        const url = apiUrl + "/search?indexes=PlaceName&string=" + encodeURIComponent(x);
        await fetch(url)
            .then(data => { return data.json() })
            .then(async (res) => {
                text += `搜索结果：${res.Pagination.ResultsTotal}个，仅显示有效值<br><br>`;

                const ulNode = document.createElement("ul");

                const ids = res.Results.map(d => d.ID).join(',')
                const nnurl = `${apiUrl}/PlaceName?ids=${ids}&columns=Name,Maps`;
                const PlaceNames = await fetch(nnurl).then(data => { return data.json() });
                console.log(PlaceNames);
                for (let i in PlaceNames.Results) {
                    const PlaceName = PlaceNames.Results[i];
                    if (PlaceName.Maps.length > 0)
                    {
                        const liNode = document.createElement("li");
                        const TextNode = document.createTextNode(PlaceName.Name);
                        liNode.appendChild(TextNode);
                        ulNode.appendChild(liNode);

                        for (let map in PlaceName.Maps)
                        {
                            const mapulNode = document.createElement("ul");
                            const mapliNode = document.createElement("li");
                            //span节点切换地图
                            const mapspanNode = document.createElement("span");

                            mapspanNode.onclick = function() { LoadMap(PlaceName.Maps[map].ID) };
                            if (PlaceName.Maps[map].PlaceNameSub)
                            {
                                mapspanNode.innerHTML = PlaceName.Maps[map].PlaceNameSub.Name;
                            }
                            else
                            {
                                mapspanNode.innerHTML = PlaceName.Maps[map].PlaceName.Name;
                            }


                            //外部链接
                            const maplinkNode = document.createElement("a");
                            maplinkNode.href = xivapiorg + PlaceName.Maps[map].MapFilename;
                            maplinkNode.style = "margin: 0px 0px 0px 100px;";
                            maplinkNode.target = "_blank"
                            maplinkNode.innerHTML = "地图源文件";

                            mapliNode.appendChild(mapspanNode);
                            mapliNode.appendChild(maplinkNode);
                            mapulNode.appendChild(mapliNode);

                            liNode.appendChild(mapulNode);
                        }
                    }
                }
                
                document.getElementById("mapresult").innerHTML = text;
                document.getElementById("mapresult").appendChild(ulNode);
            });
    }
    catch (err)
    {
        console.log(err)
        document.getElementById("mapresult").innerHTML = '搜索失败';
    }
    finally
    {
        lock = false;
    }

}

async function LoreSearch()
{
    if (lock)
        return;
    lock = true;
    try
    {
        let text = '';
        const x = document.getElementById("loresearch").value;
        if (x.length < 2)
        {
            document.getElementById("loreresult").innerHTML = '请输入至少两个字符';
            return;
        }
        document.getElementById("loreresult").innerHTML = '搜索中';
        const url = apiUrl + "/lore?columns=Text,Data,Source&language=cn&string=" + encodeURIComponent(x);
        await fetch(url)
            .then(data => { return data.json() })
            .then(res =>
            {
                console.log(res)
                text += `搜索结果：${res.Pagination.ResultsTotal}个`
                if (res.Pagination.ResultsTotal > 100)
                {
                    text += `，仅显示前100个`
                }
                //text += '<br><br><ul>'
                text += '<br><br>'

                const ulNode = document.createElement("ul");

                for (i in res.Results)
                {
                    const source = res.Results[i].Source
                    const id = res.Results[i].Data.ID;
                    const name = res.Results[i].Data.Name
                    const context = name ? `${source}/${id} - ${name}` : `${source}/${id}`;

                    const liNode = document.createElement("li");
                    const aNode = document.createElement("a");
                    const TextNode = document.createTextNode(context);
                    aNode.href = `${apiUrl}/${source}/${id}`;
                    aNode.target = "_blank";
                    aNode.appendChild(TextNode);

                    const codeulNode = document.createElement("ul");
                    const codeliNode = document.createElement("li");
                    const codeNode = document.createElement("code");
                    const codeTextNode = document.createTextNode(res.Results[i].Text);
                    codeNode.appendChild(codeTextNode);
                    codeliNode.appendChild(codeNode);
                    codeulNode.appendChild(codeliNode);

                    liNode.appendChild(aNode);
                    liNode.appendChild(codeulNode);
                    ulNode.appendChild(liNode);

                    //text += `<li>${context}<ul><li><code>${res.Results[i].Text}</code></li></ul></li>`;
                }
                //text += "</ul>";
                document.getElementById("loreresult").innerHTML = text;
                document.getElementById("loreresult").appendChild(ulNode);
            });
    }
    catch (err)
    {
        console.log(err)
        document.getElementById("loreresult").innerHTML = '搜索失败';
    }
    finally
    {
        lock = false;
    }
}

async function ItemSearch()
{
    let text = '';
    const x = document.getElementById("itemsearch").value;
    if (x.length < 2)
    {
        document.getElementById("itemresult").innerHTML = '请输入至少两个字符';
        return;
    }
    document.getElementById("itemresult").innerHTML = '搜索中';
    const url = apiUrl + "/search?indexes=Item&string=" + encodeURIComponent(x);
    await fetch(url)
        .then(data => { return data.json() })
        .then(res =>
        {
            console.log(res)
            text += `搜索结果：${res.Pagination.ResultsTotal}个`
            if (res.Pagination.ResultsTotal > 100)
            {
                text += `，仅显示前100个`
            }
            text += '<br><br>'
            for (i in res.Results)
            {
                text += `<span data-ck-item-id="${res.Results[i].ID}">${res.Results[i].Name}</span><br>`;
            }
            document.getElementById("itemresult").innerHTML = text;
            CafeKitTooltip.initTooltip(
            {
                context:
                {
                    apiBaseUrl: apiUrl, // xivapi 或 cafemaker 的 url；最后不要有斜线
                    iconBaseUrl: `${apiUrl}/i`, // 图标 cdn 的 url；最后不要有斜线
                    defaultHq: true, // 是否默认显示 HQ 数据
                    hideSeCopyright: true, // 是否隐藏 SE 版权信息
                },
                links:
                {
                    detectWikiLinks: false, // 是否自动识别 wiki 物品链接
                    itemNameAttribute: 'data-ck-item-name', // 自定义悬浮窗时，声明物品名字的属性
                    itemIdAttribute: 'data-ck-item-id', // 自定义悬浮窗时，声明物品 ID 的属性
                    rootContainer: document, // 监控的根元素
                },
            });
        });
}

function Enter(event)
{
    if (window.event.keyCode == 13)
    {
        if (event.srcElement.id == "mapsearch")
            MapSearch();
        else if (event.srcElement.id == "loresearch")
            LoreSearch();
        else if (event.srcElement.id == "itemsearch")
            ItemSearch();
    }
}

function LoadMap(id)
{
    window.map.loadMapKey(id)
}

function MapInit()
{
    const el = document.querySelector('#eorzea-map') // 地图容器，请自行创建
    if (el)
    {
        window.YZWF.eorzeaMap.create(el)
            .then(function(map)
            {
                window.map = map
                map.loadMapKey(92) // 92 为地图编号（游戏内 Map 表）
                // https://xivapi.com/Map/92
            });
    }

}

MapInit();