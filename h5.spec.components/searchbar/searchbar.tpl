<div class="search_box">
    <form class="sbox txt">
        <span>
            <input class="ico search_input" name="q" bx-name="components/suggest" type="search" placeholder="输入您要分享的宝贝" autocomplete="off"  autocorrect="off" maxlength="50" value=""/>
        </span>
        <span class="button">
            <b></b>
        </span>
        <i class="btn_cancel">取消</i>
    </form> 
</div>
<script>
    require(['brix/loader', 'underscore', 'mock'], function(Loader, _, Mock) {
        Loader.boot(function() {
            var data = Mock.mock({
                'list|100': ['@NAME', '@NATURAL(1,1000000)', '@CWORD(5,10)']
            }).list

            var suggests = Loader.query('components/suggest')
            _.each(suggests, function(item, index){
                item.on('change.suggest.input', function(event, value) {
                    if (!$.trim(value)) {
                        item.close()
                        return
                    }
                    item.data(
                        _.filter(data, function(item, index){
                            return ('' + item).toLowerCase().indexOf(value.toLowerCase()) !== -1
                        })
                        .sort(function(a, b) {
                            return ('' + a).toLowerCase().indexOf(value.toLowerCase()) - ('' + b).toLowerCase().indexOf(value.toLowerCase())
                        })
                    )
                })
            })
        })
    })
</script>
