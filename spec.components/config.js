/* global require */
require.config({
    map: {
        '*': {
            // 扩展组件
            'vteam/header': 'spec.components/header/header.js',
            'vteam/footer': 'spec.components/footer/footer.js',
            'vteam/css': 'spec.components/css/css.js',
            'vteam/css/sidebar': 'spec.components/css/sidebar.js',
            'vteam/components': 'spec.components/components/components.js',
            'vteam/brand': 'spec.components/brand/brand.js',
        }
    }
})