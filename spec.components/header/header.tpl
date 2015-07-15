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
                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <span class="specfont icon-minecraft"></span>
                        <span class="specfont icon-xialakuang"></span>
                     </button>
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
                            <li class="sidebar-item"><a href="readme.html?name=<%= item.resp || item.name %>"><%= item.name %></a></li>
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
