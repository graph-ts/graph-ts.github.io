/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Graph TS',
    tagline: 'Strongly typed graphing libraries for the web.',
    url: 'https://graph-ts.github.io/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'graph-ts', // Usually your GitHub org/user name.
    projectName: 'graph-ts.github.io', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Graph TS',
            logo: {
                alt: 'Graph TS Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    label: 'Docs',
                    to: 'docs/guides/introduction/getting-started',
                    position: 'right',
                },
                {
                    label: 'APIs',
                    to: 'docs/apis/graph-lib',
                    position: 'right'
                },
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'right'
                },
                {
                    href: 'https://github.com/graph-ts',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Getting Started',
                            to: 'docs/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Graph TS. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
