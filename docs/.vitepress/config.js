import { defineConfig } from 'vitepress'

export default defineConfig({
    base: '/',
    title: 'Lanaya',
    description: 'Vite & Vue powered static site generator.',
    appearance: false, //控制主题切换是否显示
    ignoreDeadLinks: true,
    lang: 'zh-CN',
    lastUpdated: true,
    markdown: {
        theme: 'github-dark',
        lineNumbers: false,
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
            {text: 'Guide', link: '/'},
            {text: 'About', link: '/about/'},
            {text: 'Kubernetes', link: '/packages/kubernetes/nfs/server', activeMatch: '/packages/kubernetes/'},
            {text: 'Teamcity', link: '/packages/teamcity/', activeMatch: '/packages/teamcity/'},
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
            '/packages/kubernetes/': [
                {
                    text: 'NFS动态存储卷',
                    collapsed: false,
                    collapsible: false,
                    items: [
                        {
                            text: 'NFS服务端',
                            link: '/packages/kubernetes/nfs/server'
                        },
                        {
                            text: 'NFS客户端',
                            link: '/packages/kubernetes/nfs/client'
                        },
                        {
                            text: 'NFS在k8s中部署',
                            link: '/packages/kubernetes/nfs/deploy'
                        }
                    ]
                }                
            ],
            '/packages/teamcity/': [
                {
                    text: 'Teamcity教程',
                    collapsed: true,
                    collapsible: false,
                    items: [
                        {
                            text: 'Server安装',
                            link: '/packages/teamcity/server'
                        },
                        {
                            text: 'Agent安装',
                            link: '/packages/teamcity/agent'
                        },
                        {
                            text: '构建部署',
                            link: '/packages/teamcity/deploy'
                        }
                    ]
                }                
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