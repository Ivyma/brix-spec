/* global require */
require.config({
    map: {
        '*': {
            // 扩展组件
            'spec/header': 'frame.spec.components/header/header.js',
            'spec/css': 'frame.spec.components/css/css.js',
            'spec/components': 'frame.spec.components/components/components.js',
            'spec/brand': 'frame.spec.components/brand/brand.js',
            'spec/animation': 'frame.spec.components/animation/animation.js',
            'spec/footer': 'spec.components/footer/footer.js',
        }
    },
    paths: {
        mock: 'bower_components/mockjs/dist/mock',
    }
})