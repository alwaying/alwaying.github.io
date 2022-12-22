import { defineConfig } from 'vitepress'

export default defineConfig({
    base: '/docs/',
    title: 'LANAYA',
    description: 'Vite & Vue powered static site generator.',
    appearance: false, //控制主题切换是否显示
    ignoreDeadLinks: true,
    lang: 'zh-CN',
    lastUpdated: true,
    markdown: {
        theme: 'github-dark',
        lineNumbers: true,
    },
    titleTemplate: '博客',
    head: [
        [
            'link', {rel: 'icon', href: 'favicon.ico'} // 设置网站的favicon.ico，需要放置到public目录下
        ]
    ],
    themeConfig: {
        logo: '/favicon.ico',
        outlineTitle: '自定义的当前页面',
        nav: [
            {text: '首页', link: '/'},
            {text: '关于', link: '/about/'},
            {text: '前端', link: '/frontend/'},
        ],
        // 全局sidebar
        // sidebar: [
        //     {
        //         text: '前端学习',
        //         items: [
        //             {text: 'HTML', link: '/frontend/html/'},
        //             {text: 'HTML', link: '/frontend/html/label'},
        //         ]
        //     }
        // ]
        // 局部sidebar
        sidebar: {
            '/frontend/': [
                {
                    text: 'JAVASCRIPT教程',
                    collapsed: false,
                    collapsible: true,
                    items: [
                        {
                            text: 'Javascript基础学习',
                            link: '/frontend/js/'
                        }
                    ]
                },
                {
                    text: 'HTML教程',
                    collapsed: false,
                    collapsible: true,
                    items: [
                        {
                            text: 'HTML基础学习',
                            link: '/frontend/html/'
                        },
                        {
                            text: 'HTML标签学习',
                            link: '/frontend/html/label'
                        }
                    ]
                },                
            ]
        },
        // 右上角的github点击区
        socialLinks: [
            {
                icon: 'github',
                link: 'https://www.github.com'
            }
        ],
        // 首页底部区域
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        }
    }
})