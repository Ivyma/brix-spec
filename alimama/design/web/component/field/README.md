<div class="mb40">
    <div class="fontsize-20">字段控制器 <small>Field</small></div>
    <div class="color-999 mt4">为满足用户在阅读列表时个性化的需求，提供一个自定义列表字段的功能。列表默认显示对大部分用户而言较重要的字段。当字段过多时，点击字段控制器时，会显示当前所有字段的列表。用户可以从中选择一个或多个字段添加到列表中，也可以根据自己的关注需求，从已选择的字段进行删减，缩减列表的字段。从而形成自定义后，符合用户需求的列表。</div>
</div>

<div class="usage mb40">
    <div>基本规范</div>
    <ol>
        <li>默认显示：当前表格显示的字段，默认在可选数据字段中显示已选中，且在自定义列表中，按当前表格的显示字段顺序显示已选字段。</li>
        <li>选中新的数据字段：点击未选中的数据字段，该数据字段将自动增加至自定义列表的最后（自定义列表滚动至底部，显示当前选中的数据字段）。</li>
        <li>去除已选数据字段：点击已选中的数据字段，则该数据字段在自定义列表中隐藏。</li>
        <li>自定义列表排序：鼠标移动至数据字段上，显示可移动图标，拖动图标，进行数据字段的排序。</li>
    </ol>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
        </div>
        <div class="content-body">
        	<div class="clearfix mb10">
        		<div id="clickme" href="javascript:;" class="table-column-priority-trigger pull-right">
        			<span class="brixfont fontsize-20 color-ccc">&#xe602;</span>
        		</div>
        	</div>
            <table bx-name="components/table" class="table table-hover table-fixed" data-column-rwd-range="[3,-2]" data-column-rwd-limit="3" data-column-rwd-cursor="1" data-column-priority-trigger="#clickme">
			    <thead>
			        <tr>
			            <th width="40"><input type="checkbox" data-linkage-name="all"></th>
			            <th width="75" class="stable">不动列 1</th>
			            <th width="75" class="stable">不动列 2</th>
			            <th>滚动列 1</th><th>滚动列 2</th><th>滚动列 3</th><th>滚动列 4</th><th>滚动列 5</th><th>滚动列 6</th>
			            <th width="75" class="stable">不动列 3</th>
			            <th width="75" class="stable">不动列 4</th>
			        </tr>
			    </thead>
			    <tbody>
			        <tr>
			            <td><input type="checkbox" data-linkage-parent-name="all"></td>
			            <td>-</td>
			            <td>-</td>
			            <td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td>
			            <td>-</td>
			            <td>-</td>
			        </tr>
			        <tr>
			            <td><input type="checkbox" data-linkage-parent-name="all"></td>
			            <td>-</td>
			            <td>-</td>
			            <td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td>
			            <td>-</td>
			            <td>-</td>
			        </tr>
			    </tbody>
			</table>
        </div>
    </div>
    <pre><code class="hljs html">
        <div id="clickme" href="javascript:;" class="table-column-priority-trigger pull-right">
            <span class="brixfont fontsize-20 color-ccc">&#xe602;</span>
        </div>
        <table bx-name="components/table" class="table table-hover table-fixed" data-column-rwd-range="[3,-2]" data-column-rwd-limit="3" data-column-rwd-cursor="1" data-column-priority-trigger="#clickme">
            <!-- ... -->
        </table>
    </code></pre>
</div>

<script type="text/javascript">
	require(['css!alimama/design/web/component/table/table.css'])
</script>
