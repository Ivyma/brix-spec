define(
    [
        './mobile.style', './mobile.component'
    ],
    function(
        Style, Component
    ) {
        var MOBILE = {
            name: 'MOBILE',
            name_en: 'MOBILE',
            path: 'alimama/design/web/index/index',
            href: '#/design/mobile/index',
            role: ['switcher'],
            children: [
                Style,
                Component
            ]
        }
        return MOBILE
    }
)