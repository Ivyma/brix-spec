/* global define */
define(function() {
    return (function(){/*
<nav class="navbar navbar-spec">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <div class="navbar-logo">
                <div class="dropdown">
                    <div class="btn btn-default dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <a href="/"><span class="specfont icon-minecraft"></span></a>
                        <span class="specfont icon-xialakuang" onclick-bak="$(this).closest('.dropdown').toggleClass('open')"></span>
                     </div>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="#"><span class="specfont icon-minecraft"></span></a></li>
                        <li><a href="#"><span class="specfont icon-minecraft"></span></a></li>
                        <li><a href="#"><span class="specfont icon-minecraft"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a href="css.html">样式</a></li>
                <li>
                    <a href="components.html" class="hasmore">组件</a>
                    <div class="dropdown">
                        <a href="components.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">组件 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <% _.each(COMPONENTS, function(item, index){ %>
                            <li class="sidebar-item"><a href="readme.html?name=<%= item.resp %>"><%= item.name %> <small><%= item.resp %></small></a></li>
                            <% }) %>
                        </ul>
                    </div>
                </li>
                <li><a href="brand.html">品牌</a></li>
                <li><a href="animation.html">动效</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})