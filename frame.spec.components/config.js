/* global require */
require.config({
    map: {
        '*': {
            // 扩展组件
            'spec/header': 'frame.spec.components/header/header.js'
        }
    },
    paths: {
        mock: 'bower_components/mockjs/dist/mock',
    }
})