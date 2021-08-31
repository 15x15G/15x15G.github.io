# FFXIV 字体

鸣谢： [FF14图标支持](https://github.com/thewakingsands/ffxiv-axis-font-icons)

字体字符：<span class='ffxiv'></span>

css加载： <i class="xiv ime-hira-full"></i>

  <div id="loading">加载中……</div>

<table>
    <thead>
        <tr>
        <th>字符</th>
        <th>码点</th>
        <th>HTML</th>
        <th>描述</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>
<script src="https://cdn.jsdelivr.net/npm/crel@4.2.1/crel.min.js" integrity="sha256-1QJN4sehgRSpatqbGj5FUMKGW035GCEYG4U9QksrKlM=" crossorigin="anonymous">
</script>
<script>
    // document.body.addEventListener('mouseenter', function (e) {
    // if (e.target.tagName !== 'CODE') return
    // var range = document.createRange()
    // range.selectNodeContents(e.target)
    // var selection = window.getSelection()
    // selection.removeAllRanges()
    // selection.addRange(range)
    // }, true)
    fetch('https://cdn.jsdelivr.net/gh/thewakingsands/ffxiv-axis-font-icons/characters.json')
    .then(function (resp) {
        return resp.json()
    })
    .then(function (json) {
        var tbody = document.querySelector('tbody')
        for (var codepoint in json) {
            var name = json[codepoint][0]
            var desc = json[codepoint][1]
            var row = crel('tr', [
                crel('td', { class: 'ffxiv' }, String.fromCodePoint(parseInt(codepoint, 16))),
                crel('td', codepoint),
                crel('td', crel('code', '<i class="xiv ' + name + '"></i>')),
                crel('td', desc)
            ])
            tbody.appendChild(row)
        }
        document.querySelector('#loading').style.display = 'none';
    })
</script>


