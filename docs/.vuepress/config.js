module.exports = {
    title: '个人文档',
    description: '练习文档',
    head: [
        [
            'script', // js 文件
            { src: '/js/eoclock.js' }
        ],
        [
            'script', // js 文件
            { src: '/js/eorzeaclock.min.js' }
        ]

    ],
    themeConfig:
    {
        nav: [
            { text: 'Home', link: '/' }, // 根路径
            { text: 'Guide', link: '/t1/t11' },
            { text: 'External', link: 'https://google.com' }, // 外部链接
            // 显示下拉列表
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: 'https://baidu.com' },
                    { text: 'Japanese', link: 'https://google.com' }
                ]
            },
            // 下拉列表显示分组
            {
                text: '高级',
                items: [
                {
                    text: '算法',
                    items: [
                        { text: 'Chinese', link: 'https://baidu.com' },
                        { text: 'Japanese', link: 'https://google.com' }
                    ]
                },
                {
                    text: '设计模式',
                    items: [
                        { text: 'Chinese', link: 'https://baidu.com' },
                        { text: 'Japanese', link: 'https://google.com' }
                    ]
                }, ]
            }
        ],
        sidebar: [
            '/',
            {
                title: '1',
                collapsable: false,
                children: [
                    '/t1/',
                    '/t1/t11',
                    '/t1/t22'
                ]
            },
            {
                title: 'FF14',
                collapsable: false,
                children: [
                    '/ff14/'
                ]
            }
        ]
    }
}