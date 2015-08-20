/* global define */
define(function() {
    return (function(){/*
<div class="">
    <div class="fontsize-20 mb40">组件 <small>Components ( <%= COMPONENTS.length %> 个 ) </small></div>
</div>

<div class="components">
    <div class="row">
        <% _.each(COMPONENTS, function(item, index){ %>
        <div class="col-md-3">
            <a href="readme.html?name=<%= item.resp %>">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <%= item.name %> <%= item.resp %>
                    </div>
                    <div class="panel-body">
                        <img src="<%= item.prev %>">
                    </div>
                    <div class="panel-footer hide">
                        示例
                        配置
                        属性
                        方法
                        事件
                    </div>
                </div>
            </a>
        </div>
        <% }) %>
    </div>
</div>
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})