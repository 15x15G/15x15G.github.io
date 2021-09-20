
## 艾欧泽亚时间

[站长工具](http://tool.chinaz.com/Tools/unixtime.aspx)

<div id='timemd'>
    <table>
        <tr>
            <td>UNIX时间戳(ms)</td>
            <td><input id='UnixTimestmp'>
    <button class="btn" type="button"  data-clipboard-target='#UnixTimestmp'>复制</button></td>
        </tr>
        <tr>
            <td>艾欧泽亚时间戳(ms)</td>
            <td><input id='EorzeaTimestmp'>
            <button class="btn" type="button"  data-clipboard-target='#EorzeaTimestmp'>复制</button></td>
        </tr>
        <tr>
            <td>UTC时间</td>
            <td><input id='UnixTime'>
    <button class="btn" type="button"  data-clipboard-target='#UnixTime'>复制</button></td>
        </tr>
        <tr>
            <td>艾欧泽亚时间</td>
            <td><input id='EorzeaTime'>
    <button class="btn" type="button"  data-clipboard-target='#EorzeaTime'>复制</button></td>
        </tr>
        <tr>
            <td>月相</td>
            <td><span id='Moon'></span></td>
        </tr>
    </table>
</div>

<br>

<div id='test'>    
    <table>
        <tr>
            <td>UNIX时间戳(ms)</td>
            <td><input id='testUnixTimestmp'>
    <button onclick=test()>test</button> </td>
        </tr>
        <tr>
            <td>艾欧泽亚时间戳(ms)</td>
            <td><input id='testEorzeaTimestmp'>
    <button class="btn" type="button"  data-clipboard-target='#testEorzeaTimestmp'>复制</button></td>
        </tr>
        <tr>
            <td>UTC时间</td>
            <td><input id='testUnixTime'>
    <button class="btn" type="button"  data-clipboard-target='#testUnixTime'>复制</button></td>
        </tr>
        <tr>
            <td>艾欧泽亚时间</td>
            <td><input id='testEorzeaTime'>
    <button class="btn" type="button"  data-clipboard-target='#testEorzeaTime'>复制</button></td>
        </tr>
        <tr>
            <td>月相</td>
            <td><span id='testMoon'></span></td>
        </tr>
    </table>
</div>

<div>
    <script>
        function test(){
            const unix=document.querySelector('#testUnixTimestmp').value;
            const LocalDate = new Date(parseInt(unix));
            const LocalUnix = LocalDate.getTime();
            const EorzeaDate = localToEorzea();
            EorzeaDate.setTime(LocalUnix);
            const EorzeaUnix = EorzeaDate.getTime();   
            const EorzeaMoon = eorzeaMoon();
            EorzeaMoon.setTime(EorzeaUnix);
            const EtMoon = EorzeaMoon.getMoon();
            //
            const EtSpeed = EorzeaDate.getSpeed();
            const EtYear = EorzeaDate.getYear();
            const EtMonth = EorzeaDate.getMonth() + 1;
            const EtDate = EorzeaDate.getDate() + 1;
            const EtHour = EorzeaDate.getHours();
            const EtMinute = EorzeaDate.getMinutes();
            const EtSecond = EorzeaDate.getSeconds();
            const EtMillis = EorzeaDate.getMilliseconds();
            //
            const MOON_LIST_TEXT = ["新月", "三日月", "上弦の月", "十三夜", "満月", "十六夜", "下弦の月", "二十六夜"];
            const MOON_LIST = ["new", "new_crescent", "quarter", "new_gibbous", "full", "old_gibbous", "waning", "old_crescent"];
            const EtMoonText = MOON_LIST_TEXT[MOON_LIST.indexOf(EtMoon)];
            const EtMoonImg = `<img style="vertical-align:middle;" src="/img/${EtMoon}.png">`;
            //
            document.querySelector('#testEorzeaTimestmp').value=EorzeaUnix.toFixed(0);
            document.querySelector('#testUnixTime').value=LocalDate.toISOString();// expected output: 2011-10-05T14:48:00.000Z
            document.querySelector('#testEorzeaTime').value=`${EtYear}-${doubleDigit(EtMonth)}-${doubleDigit(EtDate)}T${doubleDigit(EtHour)}:${doubleDigit(EtMinute)}:${doubleDigit(EtSecond)}.${tripleDigit(EtMillis)}Z`;
            document.querySelector('#testMoon').innerHTML= `${EtMoonText} ${EtMoonImg}`;            
        }
    </script>
</div>

<div>
    <script>
        function gettime(){
            const LocalDate = new Date();
            const LocalUnix = LocalDate.getTime();
            const EorzeaDate = localToEorzea();
            EorzeaDate.setTime(LocalUnix);
            const EorzeaUnix = EorzeaDate.getTime();   
            const EorzeaMoon = eorzeaMoon();
            EorzeaMoon.setTime(EorzeaUnix);
            const EtMoon = EorzeaMoon.getMoon();
            //
            const EtSpeed = EorzeaDate.getSpeed();
            const EtYear = EorzeaDate.getYear();
            const EtMonth = EorzeaDate.getMonth() + 1;
            const EtDate = EorzeaDate.getDate() + 1;
            const EtHour = EorzeaDate.getHours();
            const EtMinute = EorzeaDate.getMinutes();
            const EtSecond = EorzeaDate.getSeconds();
            const EtMillis = EorzeaDate.getMilliseconds();
            //
            const MOON_LIST_TEXT = ["新月", "三日月", "上弦の月", "十三夜", "満月", "十六夜", "下弦の月", "二十六夜"];
            const MOON_LIST = ["new", "new_crescent", "quarter", "new_gibbous", "full", "old_gibbous", "waning", "old_crescent"];
            const EtMoonText = MOON_LIST_TEXT[MOON_LIST.indexOf(EtMoon)];
            const EtMoonImg = `<img style="vertical-align:middle;" src="/img/${EtMoon}.png">`;
            //
            if(document.querySelector('#timemd')!=null){
                document.querySelector('#UnixTimestmp').value=LocalUnix;
                document.querySelector('#EorzeaTimestmp').value=EorzeaUnix.toFixed(0);
                document.querySelector('#UnixTime').value=LocalDate.toISOString();// expected output: 2011-10-05T14:48:00.000Z
                document.querySelector('#EorzeaTime').value=`${EtYear}-${doubleDigit(EtMonth)}-${doubleDigit(EtDate)}T${doubleDigit(EtHour)}:${doubleDigit(EtMinute)}:${doubleDigit(EtSecond)}.${tripleDigit(EtMillis)}Z`;
                document.querySelector('#Moon').innerHTML= `${EtMoonText} ${EtMoonImg}`;
            }
            setTimeout("gettime()", EtSpeed)
        }
        gettime();
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
        initcopy();
    </script>
</div>