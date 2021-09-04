# 魂晶时刻表

摘自[2.0电子书](https://15x15G.github.io/FFXIV_ARR_GuideBook_CN)

<div>
    <link rel="stylesheet" href="/css/eoclock.css" />
    <link rel="stylesheet" href="/css/eorzeaclock.min.css" />
    <style>
        #eorzeaclock2 tr{
            background-color: transparent;
        }
    </style>
    <script src="/js/eoclock.js" ></script>
    <script src="/js/eorzeaclock.min.js" ></script>
</div>

<div id="eorzeaclock2" style="auto;">
    <script type="text/javascript">    
        function checkclc(){
            if (!(window.EorzeaClock&&window.localToEorzea)) {
                setTimeout(checkclc,200)
            }
            else{
                EorzeaClock("eorzeaclock2", 1, null)
            }  
        }
        checkclc()
    </script>
</div>