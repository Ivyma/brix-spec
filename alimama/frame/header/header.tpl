<nav class="navbar navbar-spec">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" on-click="toggleNavbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <div class="navbar-brand">
                <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button"><!-- on-click="toggleBrand()" -->
                        <a href="index.html">
                            <span class="dropdown-toggle-label">
                                <span class="minecraft-refactor-font">&#xe600;</span>
                                <span class="middle-line">|</span>
                                <span class="minecraft-refactor-font">&#xe603;<!-- 阿里妈妈 &#xe603; --></span>
                            </span>
                        </a>
                    </button>
                    <ul class="dropdown-menu">
                        <li class="active"><a href="javascript: void(0);" on-click="selectBrand()">
                            <span class="minecraft-refactor-font">&#xe600;</span>
                            <span class="middle-line">|</span>
                            <span class="minecraft-refactor-font">&#xe603;<!-- 阿里妈妈 &#xe603; --></span>
                        </a></li>
                        <li class=""><a href="javascript: void(0);" on-click="selectBrand()">
                            <span class="minecraft-refactor-font">&#xe600;</span>
                            <span class="middle-line">|</span>
                            <span>淘宝商家</span>
                        </a></li>
                        <li class=""><a href="javascript: void(0);" on-click="selectBrand()">
                            <span class="minecraft-refactor-font">&#xe600;</span>
                            <span class="middle-line">|</span>
                            <span>天猫商家</span>
                        </a></li>
                        <li class=""><a href="javascript: void(0);" on-click="selectBrand()">
                            <span class="minecraft-refactor-font">&#xe600;</span>
                            <span class="middle-line">|</span>
                            <span class="">聚划算商家</span>
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="minecraft-header-navbar-collapse-phone">
            <ul class="nav navbar-nav">
                <li data-phone="false"> <a href="main.html<%= DESIGN.href %>">设计</a> </li>
                <li data-phone="true" on-click="toggleNavbar"> <a href="#/design">设计</a> </li>

                <li data-phone="true" class="navbar-dropdown">
                    <a href="javascript:;" on-click="toggleNavDropdown" class="dropdown-toggle">
                        <span>样式</span> 
                        <span class="dropdown-caret minecraft-refactor-font fontsize-12 color-brand">&#xe604;</span>
                    </a>
                    <ul class="dropdown-menu">
                        <% _.each(DESIGN.WEB.STYLE.children, function(item, index) { %>
                        <li on-click="toggleNavbar"><a href="<%= item.href %>"><%= item.name %></a></li>
                        <% }) %>
                    </ul>
                </li>

                <li data-phone="true" class="navbar-dropdown">
                    <a href="javascript:;" on-click="toggleNavDropdown" class="dropdown-toggle">
                        <span>组件</span> 
                        <span class="dropdown-caret minecraft-refactor-font fontsize-12 color-brand">&#xe604;</span>
                    </a>
                    <ul class="dropdown-menu">
                        <% _.each(DESIGN.WEB.COMPONENT.children, function(item, index) { %>
                        <li on-click="toggleNavbar"><a href="<%= item.href %>"><%= item.name %></a></li>
                        <% }) %>
                    </ul>
                </li>

                <li data-phone="false"> <a href="main.html<%= BRAND.href %>">品牌</a> </li>
                <li data-phone="true" class="navbar-dropdown">
                    <a href="javascript:;" on-click="toggleNavDropdown" class="dropdown-toggle">
                        <span>品牌</span> 
                        <span class="dropdown-caret minecraft-refactor-font fontsize-12 color-brand">&#xe604;</span>
                    </a>
                    <ul class="dropdown-menu">
                        <% _.each(BRAND, function(item, index) { %>
                        <li on-click="toggleNavbar"><a href="<%= item.href %>"><%= item.name %></a></li>
                        <% }) %>
                    </ul>
                </li>
                <li data-phone="false"> <a href="main.html<%= ANIMATION.href %>">动效</a> </li>
                <li data-phone="true" class="navbar-dropdown">
                    <a href="javascript:;" on-click="toggleNavDropdown" class="dropdown-toggle">
                        <span>动效</span> 
                        <span class="dropdown-caret minecraft-refactor-font fontsize-12 color-brand">&#xe604;</span>
                    </a>
                    <ul class="dropdown-menu">
                        <% _.each(ANIMATION, function(item, index) { %>
                        <li on-click="toggleNavbar"><a href="<%= item.href %>"><%= item.name %></a></li>
                        <% }) %>
                    </ul>
                </li>
                <li data-phone="false"> <a href="main.html<%= CHART.href %>">图表</a> </li>

            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
