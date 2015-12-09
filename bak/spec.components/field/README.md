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
        		<div id="clickme" href="javascript:;" class="pull-right" style="
        			cursor: pointer;
					padding: 2px 6px;
					border: 1px solid #E6E6E6;
					border-radius: 4px;">
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
    <pre class="example-pre"><code class="hljs html"></code></pre>
</div>

<div class="example hide">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 单个按钮</div>
            <div class="color-999 mt6">常见于字段多，但因界面显示问题需要进行字段取舍的列表中。</div>
        </div>
        <div class="content-body" style="padding-right: 0; padding-bottom: 0;">
            <div style="height: 50px; background-color: #FF6600;"></div>
            <div class="ungrid-row">
                <div class="ungrid-col" style="width: 200px; padding: 60px 30px; text-align: center; vertical-align: top; background-color: #423f48;">
                    <button class="btn btn-brand">＋新建推广计划</button>
                </div>
                <div class="ungrid-col" style="padding: 40px; background-color: #fafafa;">
                    <p class="flat-text small"></p>
                    <p class="flat-text full-width mt10"></p>
                    <p class="flat-text full-width mt10"></p>
                </div>
            </div>
        </div>
    </div>
    <pre class="example-pre"><code class="hljs html">
        <button class="btn btn-brand">＋新建推广计划</button>
    </code></pre>
</div>


<script type="text/javascript">
	require(['css!spec.components/table/table.css', 'css!spec.components/dialog/dialog.css'])
</script>