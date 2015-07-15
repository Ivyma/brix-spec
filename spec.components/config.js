/* global require */
require.config({
    map: {
        '*': {
            // 扩展组件
            'spec/header': 'spec.components/header/header.js',
            'spec/footer': 'spec.components/footer/footer.js',
            'spec/css': 'spec.components/css/css.js',
            'spec/components': 'spec.components/components/components.js',
            'spec/brand': 'spec.components/brand/brand.js',
            'spec/animation': 'spec.components/animation/animation.js',

            'spec/button': 'spec.components/button/button.js',
        }
    },
    paths: {
        mock: 'bower_components/mockjs/dist/mock',
    }
})