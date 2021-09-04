# FFXIV 字体

👇你甚至可以在这里写宏

<div style="display: flex;">
<textarea id='linenumber' class='nut ffxiv' rows=16 cols=1  disabled=true></textarea>    
<textarea id='macrotext' class='nut ffxiv' rows=16  wrap='off' style='width:90%'></textarea>        
</div>

<div id='btnarea' style="margin: 2px;">
    <style>
        #btnarea .btn:hover{
            transform: scale(1.5);
        }
        textarea{    
            resize: none;    
            line-height: 1.1;        
        }
    </style>
</div>

<button  type="button"  onclick='createurl()'>生成分享链接</button>
<br>
<input id='urlbox'  type="text" style="width: 30%;"  ></input>
<button class="btn" type="button"  data-clipboard-target='#urlbox'>复制</button>

你可以复制分享链接并粘贴到[git.io](https://git.io/)来获得短网址

<details>
    <summary>字符介绍</summary>
    <br>
    <button id="loadbutton"  type="button"  onclick='iconload()'>加载</button>
    <table>
        <thead>
            <tr>
            <th>字符</th>
            <th>码点</th>
            <th>Name</th>
            <th>描述</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    <div id="loading" style="display: none;">加载中……</div>
</details>

<div>
    <script src="/js/fontpage.js" defer></script>
</div>

<br>
<br>
<br>

鸣谢： [FF14图标支持](https://github.com/thewakingsands/ffxiv-axis-font-icons)

