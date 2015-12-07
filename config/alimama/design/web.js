define(
    [
        './web.style', './web.component'
    ],
    function(
        Style, Component
    ) {
        var WEB = {
            name: 'WEB',
            name_en: 'WEB',
            path: 'alimama/design/web/index/index',
            href: '#/design/web/index',
            role: ['switcher'],
            children: [
                Style,
                Component
            ],
            STYLE: Style,
            COMPONENT: Component
        }
        return WEB
    }
)