module.exports = {
    title: '15x15',
    description: '15x15的主页',
    head: [
        [
            'script', // js 文件
            { src: '/js/eoclock.js' }
        ],
        [
            'script', // js 文件
            { src: '/js/eorzeaclock.min.js' }
            // ]
            // [
            //     'script', // https://github.com/cjh0613/anti-selfish-browser
            //     { src: 'https://cdn.staticfile.org/layer/3.1.1/layer.min.js' }
            // ],
            // [
            //     'script', // https://github.com/cjh0613/anti-selfish-browser
            //     { src: 'https://cdn.jsdelivr.net/gh/cjh0613/anti-selfish-browser@master/Browser.js' }
            // ],
            // [
            //     'script', // https://github.com/cjh0613/anti-selfish-browser
            //     { src: 'https://cdn.jsdelivr.net/gh/cjh0613/anti-selfish-browser@master/anti-selfish-browser.js' }
        ]
    ],
    themeConfig:
    {
        nav: [
            { text: '主页', link: '/' }, // 根路径
            { text: '导航', link: '/ff14/' },
            // { text: 'External', link: 'https://google.com' }, // 外部链接
            // 显示下拉列表
            {
                text: '我的项目',
                items: [
                    { text: 'Upptime', link: 'https://15x15G.github.io/upptime' },
                    { text: 'GaRss', link: 'https://15x15G.github.io/garss' },
                    { text: 'FFXIVGuideBook', link: 'https://15x15G.github.io/FFXIV_ARR_GuideBook_CN' },
                    { text: 'OnlineProxy', link: 'https://proxy.15x15.workers.dev/' }
                ]
            }
        ],
        sidebar: [
            '/',
            {
                title: 'FF14',
                collapsable: false,
                children: [
                    '/ff14/',
                    '/ff14/AtmaClock'
                ]
            }
        ]
    }
}