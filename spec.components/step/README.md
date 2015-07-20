# 步骤条 <small>Step</small>

步骤条可以帮助用户对操作流程长度和步骤有个预期，并且知道自己当前在哪个步骤。同时也可以对用户的任务完成度有明确的度量。

### 示例 <small>Examples</small>

<div class="bs-example">
    <div class="content">
        <h3>基础用法</h3>
        <ol>
            <li>前后有依存的操作（例：第一步不完成无法做第二步）</li>
            <li>非常长的操作（3步以上）, 建议不多于 5 步</li>
        </ol>
        <hr>
        <div>
        	<div bx-name="spec.components/step/step"></div>
        </div>
        <div>
        	<ol class="steps clearfix">
        		<li class="step active"><span>1</span>步骤一</li>
        		<li class="step"><span>2</span>步骤二</li>
        		<li class="step"><span>3</span>步骤三</li>
        	</ol>
        	<p class="flat-text small"></p>
        	<p class="flat-text full-width"></p>
        	<p class="flat-text full-width"></p>
        	<div>
        		<button class="btn btn-brand mr10">下一步</button>
        		<button class="btn mr10">返回上一步</button>
        	</div>
        </div>
    </div>
    <pre><code class="hljs html">
    </code></pre>
</div>

基础用法
 • 前后有依存的操作（例：第一步不完成无法做第二步 ）
 • 非常长的操作（3步以上）, 建议不多于5步
使用场景
 • 单向流程：适用没有分支流程，需要一步到位完成的情况。当用户决定
开始流程时出现，明确告知用户流程步骤数，放在内容的左上方，可替
代标题。每个步骤指的是操作而无需是单独的页面，步骤必须依次往下，
通过字体变大显示当前步骤，操作过流程的步骤颜色深于没有到达的步
骤颜色。
 • 复合流程：适用过程中会出现分支情况，不会一步到位可反复的流程，
如注册、付款、创建计划。当用户决定开始流程时出现，明确告知用户
流程进度，放在内容的右上方。

Lorem ipsum{ .lead }

### 示例 <small>Examples</small>

<div class="bs-example">
    <div class="content">
        <div>hello</div>
    </div>
</div>
