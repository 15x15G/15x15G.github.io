# FFXIV 字体

鸣谢： [FF14图标支持](https://github.com/thewakingsands/ffxiv-axis-font-icons)


👇你甚至可以在这里写宏

<textarea class='ffxiv' id="allicon" rows=20 style="resize: none;width: 80%;"></textarea>
<script>
    function iconreset(){
        document.querySelector('#allicon').value='\n\n\n'+
        '\n\n\n';
    }
    iconreset();
</script>

<button  type="button"  onclick='iconreset()'>重置</button>

<details>
  <summary>字符介绍</summary>

  <button id="loadbutton"  type="button"  onclick='iconload()'>加载</button>

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
    <div id="loading" style="display: none;">加载中……</div>
</details>
<!-- <script src="https://cdn.jsdelivr.net/npm/crel@4.2.1/crel.min.js" integrity="sha256-1QJN4sehgRSpatqbGj5FUMKGW035GCEYG4U9QksrKlM=" crossorigin="anonymous">
</script> -->
<script>
    // document.body.addEventListener('mouseenter', function (e) {
    // if (e.target.tagName !== 'CODE') return
    // var range = document.createRange()
    // range.selectNodeContents(e.target)
    // var selection = window.getSelection()
    // selection.removeAllRanges()
    // selection.addRange(range)
    // }, true)
    function iconload(){
        document.querySelector('#loading').style.display = 'block';
        document.querySelector('#loadbutton').style.display = 'none';
        fetch('/json/characters.json')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (json) {
            const tbody = document.querySelector('tbody')
            for (let codepoint in json) {
                const name = json[codepoint][0]
                const desc = json[codepoint][1]
                const row = crel('tr', [
                    crel('td', { class: 'ffxiv' }, String.fromCodePoint(parseInt(codepoint, 16))),
                    crel('td', codepoint),
                    crel('td', crel('code', '<i class="xiv ' + name + '"></i>')),
                    crel('td', desc)
                ])
                tbody.appendChild(row)
            }
            document.querySelector('#loading').style.display = 'none';
        })
    }
</script>


