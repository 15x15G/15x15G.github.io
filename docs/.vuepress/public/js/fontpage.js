

// icon按钮onclick事件
function addicon(event) {
    const char = event.srcElement.innerText;
    const textInput = document.getElementById('macrotext');
    const insert = textInput.selectionStart;
    textInput.value = textInput.value.substr(0, insert) + char + textInput.value.substr(insert);
    textInput.focus();
    textInput.setSelectionRange(insert + 1, insert + 1);
    textInput.blur();
}
// '生成链接'按钮
function createurl() {
    document.querySelector('#urlbox').value = '生成失败';
    const str = document.querySelector('#macrotext').value;
    const loc = window.location;
    const baseurl = `${loc.protocol}//${loc.hostname}${loc.port ? ":" + loc.port : ""}${loc.pathname}?s=`;

    const url = baseurl + encodeURIComponent(str);
    document.querySelector('#urlbox').value = url;
}
// 读取url参数
function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return '';
}
// 初始化按钮
function initbutton() {
    const str = ``;
    const dom = document.getElementById('btnarea');
    for (let i in str) {
        const b = document.createElement("button");
        b.onclick = addicon;
        b.className = 'btn ffxiv';
        b.innerHTML = str[i];
        dom.appendChild(b);
    }
}
function initcopy() {
    // 初始化tooltip
    const btns = document.querySelectorAll('[data-clipboard-target]');
    function clearTooltip(e) {
        e.currentTarget.setAttribute('class', 'btn');
        e.currentTarget.removeAttribute('aria-label');
    }
    function showTooltip(elem, msg) {
        elem.setAttribute('class', 'btn cooltipz--right');
        elem.setAttribute('aria-label', msg);
    }
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('mouseleave', clearTooltip);
        btns[i].addEventListener('blur', clearTooltip);
    }
    // 初始化clipborajs
    const clipboardDemos = new ClipboardJS('[data-clipboard-target]');
    clipboardDemos.on('success', function (e) {
        e.clearSelection();
        showTooltip(e.trigger, '复制成功');
    });
    clipboardDemos.on('error', function (e) {
        showTooltip(e.trigger, '设备不支持一键复制');
    });
}

// 初始化textarea内容
document.querySelector('#macrotext').value = decodeURIComponent(getQueryVariable('s'));
document.querySelector('#linenumber').value = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
initbutton();
initcopy();

//加载表格
function iconload() {
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
                    crel('td', name),
                    crel('td', desc)
                ])
                tbody.appendChild(row)
            }
            document.querySelector('#loading').style.display = 'none';
        })
}