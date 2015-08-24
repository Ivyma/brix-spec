<div class="dropdown <%= disabled ? 'disabled' : '' %>">
    <button class="btn btn-default dropdown-toggle" type="button" value="<%= value %>" bx-click="toggle()">
        <span class="dropdown-toggle-label"><%= label %></span>
        <!-- <span class="caret"> -->
        <span class="caret_custom caret_brixfont"><!-- 保留 caret_brixfont 是为了向后兼容，在下个版本中移除  -->
            <span class="brixfont down">&#xe623;</span><!-- 向下 -->
            <span class="brixfont up">&#xe62e;</span><!-- 向上 -->
        </span>
    </button>
    <div class="dropdown-menu-wrapper">
        <div class="searchbox <%= searchbox ? '' : 'hide' %>">
            <label>
                <span class="brixfont">&#xe61c;</span>
                <input type="text" placeholder="搜索关键词">
            </label>
        </div>
        <ul class="dropdown-menu">
            <% for(var i = 0, item; item = data[i]; i++ ) { %>
                <% if(item.children) { %>
                    <li class="dropdown-header"><%=item.label%></li>
                    <% for(var ii = 0; ii < item.children.length; ii++ ) { %>
                        <li class="<%= item.children[ii].value == value ? 'active' : ''%>"><a href="javascript: void(0);" value="<%= item.children[ii].value %>" bx-click="_select()"><%= item.children[ii].label %></a></li>
                    <% } %>
                <% } else { %>
                    <% if(item === 'divider') { %>
                        <li class="divider"></li>
                    <% } else { %>
                        <li class="<%= item.value == value ? 'active' : ''%>">
                            <% if(popover) { %>
                            <a bx-name="components/popover"
                                data-content="<%= item.label %>" 
                                data-width="<%= popover_width %>"
                                bx-click="_select()"
                                href="javascript: void(0);">
                                <span><%= item.label %></span>
                            </a>
                            <% } else { %>
                            <a href="javascript: void(0);" value="<%= item.value %>" bx-click="_select()">
                                <%= item.label %>
                            </a>
                            <% } %>
                        </li>
                    <% }  %>
                <% } %>
            <% } %>
        </ul>
    </div>
</div>