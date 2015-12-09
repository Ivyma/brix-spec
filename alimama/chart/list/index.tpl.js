/* global define */
define(function() {
    return (function(){/*
<% var RE_FILENAME = /.+\/([^\/]+)/ %>
<% var list = [] %>
<div class="clearfix mb40">
    <div class="pull-left">
        <span class=" fontsize-20 mb40">图表DEMO <small>共 ( <%= COMPONENTS.length %> 个 ) </small></span>
    </div>

</div>

<div class="components">
    <div class="row">
        <% _.each(COMPONENTS, function(item, index){ %>
        <div class="col-md-4" style="margin-bottom:50px;">
            <a href="http://thx.github.io/chartx/demo/<%= item.type %>/<%= item.resp %>.html" target="_blank">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <%= item.name %> 
                    </div>
                    <div class="panel-body" style="height:180px;line-height:160px;">
                        <img src="alimama/chart/assets/vteam-chart/<%= item.type %>/<%= item.resp %>.<%= item.prevImgType %>">
                    </div>
                    <div class="panel-footer hide" style="color:#999">
                        <%= item.beizhu %>
                    </div>
                </div>
            </a>
        </div>
        <% }) %>
    </div>
</div>


    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})