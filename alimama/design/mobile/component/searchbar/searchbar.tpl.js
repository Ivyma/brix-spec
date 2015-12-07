/* global define */
define(function() {
    return (function(){/*
<div class="search_box">
    <form class="sbox txt">
        <span>
            <input class="ico search_input" name="q" type="search" placeholder="输入您要分享的宝贝" autocomplete="off"  autocorrect="off" maxlength="50" value=""/>
        </span>
        <span class="button">
            <b></b>
        </span>
        <i class="btn_cancel">取消</i>
    </form> 
</div>

    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})