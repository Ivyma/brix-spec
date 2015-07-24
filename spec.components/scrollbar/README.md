<div class="mb40">
    <div class="fontsize-20">滚动条 <small>Scrollbar</small></div>
    <div class="color-999 mt4">滚动条是示意当前可视区域在所有内容中的相对位置，用户可以拖动滚动条快速切换可视区域。</div>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>


<div class="example">
    <div class="content">
    	<div class="content-header">
    		<div>基本用法</div>
    		<ol>
    			<li>内容超出可视区域时出现滚动条。</li>
 				<li>滚动条可以由鼠标滚轮直接操作，当纵向、横向滚动条同时出现时，滚轮只可操作纵向滚动条，但要尽量避免这种情况的产生。</li>
    		</ol>
    	</div>
    	<div class="content-body">
    		<div class="dropdown open clearfix">
        		<ul class="dropdown-menu" style="position: relative; width: 140px;">
        			<% for(var i = 1; i < 11; i++) { %>
                    <li><a href="javascript: void(0);">选项 <%= i %></a></li>
                    <% } %>
  				</ul>
  			</div>
        </div>
    </div>
</div>
