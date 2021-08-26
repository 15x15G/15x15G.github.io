module.exports = {
    title: '15x15',
    description: '15x15的主页',
    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
        ['script', { src: '/js/eoclock.js' }],
        ['script', { src: '/js/eorzeaclock.min.js' }]
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
        sidebar: [
            '/',
            {
                title: 'FF14',
                collapsable: false,
                children: [
                    '/ff14/',
                    '/ff14/AtmaClock',
                    '/ff14/Search',
                    '/ff14/Map',
                    '/ff14/Lore'
                ]
            }
        ],
        lastUpdated: '最近更新' // string | boolean

    },
    plugins:
    {
        'robots':
        {
            /**
             * @host
             * Mandatory, You have to provide the host URL
             */
            host: "https://15x15G.github.io",
            /**
             * @disallowAll
             * Optional: if it's true, all others options are ignored and exclude all robots from the entire server
             */
            disallowAll: true,
            /**
             * @allowAll
             * Optional: if it's true and @disallowAll is false, all others options are ignored and allow all robots complete access
             */
            //allowAll: false,
            /**
             * @sitemap
             * Optional, by default: sitemap.xml
             */
            //sitemap: "/assets/sitemap.xml"
            /**
             * @policies
             * Optional, by default: null
             */
            // policies: [
            // {
            //     userAgent: '*',
            //     disallow: [
            //         '/admin', '/login'
            //     ],
            //     allow: [ // Optional: Allowed paths. 
            //         'products', 'blog'
            //     ]
            // }]
        },
        '@vuepress/back-to-top': true,
        '@vuepress/medium-zoom': true,
        '@vuepress/nprogress': true,
    }
}