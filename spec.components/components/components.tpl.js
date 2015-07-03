/* global define */
define(function() {
    return (function(){/*
<div class="ungrid-row">
    <div class="ungrid-col" style="width: 200px;">
        <div class="sidebar-wrapper">
            <div class="sidebar">
                <div class="sidebar-item"><a href="#引入 Install">引入 <small>Install</small></a></div>
                <div class="sidebar-item"><a href="#基础库 Basics">基础库 <small>Basics</small></a></div>
                <% _.each(COMPONENTS, function(item, index){ %>
                <div class="sidebar-item"><a href="readme.html?name=<%= item.resp || item.name %>"><%= item.name %></a></div>
                <% }) %>
            </div>
        </div>
    </div><!-- col -->
    <div class="ungrid-col">
        <div class="main-wrapper">

            <div class="">
                <div class="marginfix"></div>
                <h1>引入 <small>Install</small></h1>
                <hr>
            </div>
            <div class="mb20">
                <div class="mb5"><h2>压缩版本 <small>Production Version</small></h2></div>
                <pre>http://g.tbcdn.cn/thx/brix-release/0.0.22/require+config.js</pre>
                <div class="mb5"><h2>未压缩版本 <small>Development Version</small></h2></div>
                <pre>http://g.tbcdn.cn/thx/brix-release/0.0.22/require+config.js</pre>
            </div>

            <div class="">
                <div class="marginfix"></div>
                <h1>基础库 <small>Basics</small></h1>
                <hr>
            </div>

            <div class="basics">
                <div class="row">
                    <% _.each(BASICS, function(item, index){ %>
                    <div class="col-md-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <%= item.name %>
                            </div>
                            <div class="panel-body">
                                <%= item.desc %>
                            </div>
                            <div class="panel-footer">
                                <a href="#">Github</a>
                            </div>
                        </div>
                    </div>
                    <% }) %>
                </div>
            </div>

            <div class="">
                <div class="marginfix"></div>
                <h1>组件 <small>Components</small></h1>
                <hr>
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