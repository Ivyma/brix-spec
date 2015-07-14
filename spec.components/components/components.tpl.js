/* global define */
define(function() {
    return (function(){/*
<div class="ungrid-row">
    <div class="ungrid-col" style="width: 200px;">
        <div class="sidebar-wrapper">
            <div class="sidebar">
                <% _.each(COMPONENTS, function(item, index){ %>
                <div class="sidebar-item"><a href="readme.html?name=<%= item.resp || item.name %>"><%= item.name %></a></div>
                <% }) %>
            </div>
        </div>
    </div><!-- col -->
    <div class="ungrid-col">
        <div class="main-wrapper">

            <div class="">
                <div class="fontsize-28 mb40">组件 <small>Components</small></div>
            </div>

            <div class="components">
                <div class="row">
                    <% _.each(COMPONENTS, function(item, index){ %>
                    <div class="col-md-3">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <a href="readme.html?name=<%= item.resp || item.name %>"><%= $('<div>' + item.name + '</div>').text() %></a>
                            </div>
                            <div class="panel-body">
                                <img src="<%= item.preview %>" class="img-rounded">
                            </div>
                            <div class="panel-footer">
                                <a href="#示例">示例</a>
                                <a href="#配置">配置</a>
                                <a href="#属性">属性</a>
                                <a href="#方法">方法</a>
                                <a href="#事件">事件</a>
                            </div>
                        </div>
                    </div>
                    <% }) %>
                </div>
            </div>

            <div bx-name="spec/footer"></div>
        </div>
    </div><!-- col -->
</div><!-- row -->
            
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})