module.exports = {
    title: '15x15',
    description: '',
    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/crel@4.2.1/crel.min.js' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        // ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
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
                    { text: 'OnlineProxy', link: 'https://proxy.15x15.workers.dev' },
                    { text: 'Picx', link: 'https://15x15g.github.io/picx' }

                ]
            }
        ],
        sidebar: {
            '/': [
                {
                    title: 'FF14',
                    collapsable: false,
                    children: [
                        '/ff14/',
                        '/ff14/AtmaClock',
                        '/ff14/Search',
                        '/ff14/Map',
                        '/ff14/Lore',
                        '/ff14/Font'
                    ]
                },
                {
                    title: '碎碎念',
                    collapsable: false,
                    children: [
                        '/Blog/',
                    ]
                },
            ],
        },
    },
    plugins:
    {
        'robots':
        {
            // https://github.com/HiYue/vuepress-plugin-robots
            host: "https://15x15G.github.io",
            disallowAll: true,
            // sitemap: "/assets/sitemap.xml"
        },
        '@vuepress/back-to-top': true,
        '@vuepress/medium-zoom': true,
        '@vuepress/nprogress': true,
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: true
        }
    }
}