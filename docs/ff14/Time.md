
## 艾欧泽亚时间

[站长工具](http://tool.chinaz.com/Tools/unixtime.aspx)

<details>
    <summary>月相</summary>

|  月相   | 艾欧泽亚日  |
|  ----  | ----  |
| 新月  | 1-4 |
| 峨眉月  | 5-8 |
| 上弦月  | 9-12 |
| 上凸月  | 13-16 |
| 满月  | 17-20 |
| 下凸月  | 21-24 |
| 下弦月  | 25-28 |
| 残月  | 29-32 |
</details>

### 当前时间

<button id='clockenable' onclick=clockenable()>暂停</button>
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
            <td>UTC时间</td>
            <td><input id='UnixTime'>
            <button class="btn" type="button"  data-clipboard-target='#UnixTime'>复制</button></td>
        </tr>
        <tr>
            <td>本地时间</td>
            <td><input id='LocalTime'>
            <button class="btn" type="button"  data-clipboard-target='#LocalTime'>复制</button></td>
        </tr>
        <tr>
            <td>艾欧泽亚时间</td>
            <td><input id='EorzeaTime'>
            <button class="btn" type="button"  data-clipboard-target='#EorzeaTime'>复制</button></td>
        </tr>
        <tr>
            <td>月相</td>
            <td><span id='Moon'></span></td>
        </tr>
        <tr>
            <td>属性</td>
            <td><span id='Attribute'></span></td>
        </tr>
    </table>
</div>

### 在线转换

<div id='test'>    
    <table>
        <tr>
            <td>
                <select  id='testselect'>
                    <option value ="0">UNIX时间戳(ms)</option>
                    <option value ="1">时间字符串</option>
                </select>
            </td>
            <td><input id='testinput'>
            <button onclick=test()>转换</button> </td>
        </tr>
        <tr>
            <td>UNIX时间戳(ms)</td>
            <td><input id='testUnixTimestmp'>
            <button class="btn" type="button"  data-clipboard-target='#testUnixTimestmp'>复制</button></td>
        </tr>
        <tr>
            <td>艾欧泽亚时间戳(ms)</td>
            <td><input id='testEorzeaTimestmp'>
            <button class="btn" type="button"  data-clipboard-target='#testEorzeaTimestmp'>复制</button></td>
        </tr>
        <tr>
            <td>UTC时间</td>
            <td><input id='testUnixTime'>
            <button class="btn" type="button"  data-clipboard-target='#testUnixTime'>复制</button></td>
        </tr>
        <tr>
            <td>本地时间</td>
            <td><input id='testLocalTime'>
            <button class="btn" type="button"  data-clipboard-target='#testLocalTime'>复制</button></td>
        </tr>
        <tr>
            <td>艾欧泽亚时间</td>
            <td><input id='testEorzeaTime'>
            <button class="btn" type="button"  data-clipboard-target='#testEorzeaTime'>复制</button></td>
        </tr>
        <tr>
            <td>月相</td>
            <td><span id='testMoon'></span></td>
        </tr>
        <tr>
            <td>属性</td>
            <td><span id='testAttribute'></span></td>
        </tr>
    </table>
</div>

<div>
    <script>
        function test(){
            const str = document.querySelector('#testinput').value;
            let LocalDate;
            switch (document.querySelector('#testselect').value) {
                case '0':
                    LocalDate = new Date(parseInt(str));
                    break;
                case '1':
                    LocalDate = new Date(str);
                    break;
                default:
                    return;
            }
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
            //新暦の取得
            const EorzeaNewCalendar = eorzeaNewCalendar();
            EorzeaNewCalendar.setTime(EorzeaUnix);
            const EtNewMonth = EorzeaNewCalendar.getMonth();
            const EtNewPolarity = EorzeaNewCalendar.getPolarity();
            const EtNewAttribute = EorzeaNewCalendar.getAttribute();
            //曜日の取得
            const EorzeaDay = eorzeaDay();
            EorzeaDay.setTime(EorzeaUnix);
            const EtDay = EorzeaDay.getDay();
            //
            const POLARITY_LIST_TEXT = ["霊", "星"];
            const POLARITY_LIST = ["spirit", "star"];
            const EtMonthIcon = ["01halone.png", "02menphina.png", "03thaliak.png", "04nymeia.png", "05llymlaen.png", "06oschon.png", "07byregot.png", "08rhalgr.png", "09azeyma.png", "10naldthal.png", "11nophica.png", "12althyk.png"];
            const EtMonthIconUrl = '/img/' + EtMonthIcon[EtMonth - 1];
            const EtNewPolarityText = POLARITY_LIST_TEXT[POLARITY_LIST.indexOf(EtNewPolarity)];
            const EtMonthImg = `<img style="vertical-align:middle;" src="${EtMonthIconUrl}">`
            const MONTH_ATTRIBUTE_LIST_TEXT = ["氷", "水", "風", "雷", "火", "土"];
            const MONTH_ATTRIBUTE_LIST = ["ice", "water", "wind", "lightning", "fire", "earth"];
            const EtMonthText = MONTH_ATTRIBUTE_LIST_TEXT[MONTH_ATTRIBUTE_LIST.indexOf(EtNewAttribute)];
            const WEEK_LIST_TEXT = ["霊極日", "風属日", "雷属日", "火属日", "土属日", "氷属日", "水属日", "星極日"];
            const WEEK_LIST = ["spirit", "wind", "lightning", "fire", "earth", "ice", "water", "star"];
            const EtDayText = WEEK_LIST_TEXT[WEEK_LIST.indexOf(EtDay)];
            //
            const MOON_LIST_TEXT = ["新月", "三日月", "上弦の月", "十三夜", "満月", "十六夜", "下弦の月", "二十六夜"];
            const MOON_LIST = ["new", "new_crescent", "quarter", "new_gibbous", "full", "old_gibbous", "waning", "old_crescent"];
            const EtMoonText = MOON_LIST_TEXT[MOON_LIST.indexOf(EtMoon)];
            const EtMoonImg = `<img style="vertical-align:middle;" src="/img/${EtMoon}.png">`;
            //
            const isoLocalTime = new Date(LocalDate.getTime() - (LocalDate.getTimezoneOffset() * 60000));
            //
            document.querySelector('#testUnixTimestmp').value=LocalUnix.toFixed(0);
            document.querySelector('#testEorzeaTimestmp').value=EorzeaUnix.toFixed(0);
            document.querySelector('#testUnixTime').value=LocalDate.toISOString();// expected output: 2011-10-05T14:48:00.000Z
            document.querySelector('#testLocalTime').value=isoLocalTime.toISOString().substring(0,23);
            document.querySelector('#testEorzeaTime').value=`${EtYear}-${doubleDigit(EtMonth)}-${doubleDigit(EtDate)}T${doubleDigit(EtHour)}:${doubleDigit(EtMinute)}:${doubleDigit(EtSecond)}.${tripleDigit(EtMillis)}`;
            document.querySelector('#testMoon').innerHTML= `<span style="vertical-align:middle;">${EtMoonText}</span> ${EtMoonImg}`;
            document.querySelector('#testAttribute').innerHTML= `${EtMonthImg}<span style="vertical-align:middle;"> ${EtNewPolarityText}${EtNewMonth}月(${EtMonthText}) ${EtDayText}</span>`
        }
    </script>
</div>

<div>
    <script>
        var clockrun=true;
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
            //新暦の取得
            const EorzeaNewCalendar = eorzeaNewCalendar();
            EorzeaNewCalendar.setTime(EorzeaUnix);
            const EtNewMonth = EorzeaNewCalendar.getMonth();
            const EtNewPolarity = EorzeaNewCalendar.getPolarity();
            const EtNewAttribute = EorzeaNewCalendar.getAttribute();
            //曜日の取得
            const EorzeaDay = eorzeaDay();
            EorzeaDay.setTime(EorzeaUnix);
            const EtDay = EorzeaDay.getDay();
            //
            const POLARITY_LIST_TEXT = ["霊", "星"];
            const POLARITY_LIST = ["spirit", "star"];
            const EtMonthIcon = ["01halone.png", "02menphina.png", "03thaliak.png", "04nymeia.png", "05llymlaen.png", "06oschon.png", "07byregot.png", "08rhalgr.png", "09azeyma.png", "10naldthal.png", "11nophica.png", "12althyk.png"];
            const EtMonthIconUrl = '/img/' + EtMonthIcon[EtMonth - 1];
            const EtNewPolarityText = POLARITY_LIST_TEXT[POLARITY_LIST.indexOf(EtNewPolarity)];
            const EtMonthImg = `<img style="vertical-align:middle;" src="${EtMonthIconUrl}">`
            const MONTH_ATTRIBUTE_LIST_TEXT = ["氷", "水", "風", "雷", "火", "土"];
            const MONTH_ATTRIBUTE_LIST = ["ice", "water", "wind", "lightning", "fire", "earth"];
            const EtMonthText = MONTH_ATTRIBUTE_LIST_TEXT[MONTH_ATTRIBUTE_LIST.indexOf(EtNewAttribute)];
            const WEEK_LIST_TEXT = ["霊極日", "風属日", "雷属日", "火属日", "土属日", "氷属日", "水属日", "星極日"];
            const WEEK_LIST = ["spirit", "wind", "lightning", "fire", "earth", "ice", "water", "star"];
            const EtDayText = WEEK_LIST_TEXT[WEEK_LIST.indexOf(EtDay)];
            //
            const MOON_LIST_TEXT = ["新月", "三日月", "上弦の月", "十三夜", "満月", "十六夜", "下弦の月", "二十六夜"];
            const MOON_LIST = ["new", "new_crescent", "quarter", "new_gibbous", "full", "old_gibbous", "waning", "old_crescent"];
            const EtMoonText = MOON_LIST_TEXT[MOON_LIST.indexOf(EtMoon)];
            const EtMoonImg = `<img style="vertical-align:middle;" src="/img/${EtMoon}.png">`;
            //
            const isoLocalTime = new Date(LocalDate.getTime() - (LocalDate.getTimezoneOffset() * 60000));
            //
            if(document.querySelector('#timemd')!=null && clockrun){
                document.querySelector('#UnixTimestmp').value=LocalUnix;
                document.querySelector('#EorzeaTimestmp').value=EorzeaUnix.toFixed(0);
                document.querySelector('#UnixTime').value=LocalDate.toISOString();// expected output: 2011-10-05T14:48:00.000Z                
                document.querySelector('#LocalTime').value=isoLocalTime.toISOString().substring(0,23);
                document.querySelector('#EorzeaTime').value=`${EtYear}-${doubleDigit(EtMonth)}-${doubleDigit(EtDate)}T${doubleDigit(EtHour)}:${doubleDigit(EtMinute)}:${doubleDigit(EtSecond)}.${tripleDigit(EtMillis)}`;
                document.querySelector('#Moon').innerHTML= `<span style="vertical-align:middle;">${EtMoonText}</span> ${EtMoonImg}`;
                document.querySelector('#Attribute').innerHTML= `${EtMonthImg}<span style="vertical-align:middle;"> ${EtNewPolarityText}${EtNewMonth}月(${EtMonthText}) ${EtDayText}</span>`
            }
            setTimeout("gettime()", EtSpeed);
        }
        gettime();
        function clockenable(){
            clockrun=!clockrun;
            if(clockrun){document.querySelector('#clockenable').innerHTML='暂停'}
            else{document.querySelector('#clockenable').innerHTML='暂停中'}
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
        initcopy();
    </script>
</div>