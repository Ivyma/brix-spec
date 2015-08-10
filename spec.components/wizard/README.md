<div class="mb40">
    <div class="fontsize-20">步骤条 <small>Wizard</small></div>
    <div class="color-999 mt4">步骤条可以帮助用户对操作流程长度和步骤有个预期，并且知道自己当前在哪个步骤。同时也可以对用户的任务完成度有明确的度量。</div>
</div>

<div class="fontsize-16 mb10">示例 <small>Examples</small></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
            <ol>
                <li>前后有依存的操作（例：第一步不完成无法做第二步）</li>
                <li>非常长的操作（3步以上）, 建议不多于 5 步</li>
            </ol>
        </div>
        <div class="content-body">
            <div bx-name="spec.components/wizard/wizard" class="wizard wizard-horizontal">
                <ol class="wizard-nav clearfix">
                    <% for( var i = 0, cursor = 0, total = 3, POOL='一二三四五六七八九'; i < total; i++ ) { %>
                    <li class="item  <%= i === cursor ? 'active' : '' %>">
                        <span class="circle"><%= i+1 %></span>步骤<%= POOL[i] %>
                    </li>
                    <% } %>
                </ol>
                <div class="wizard-cards">
                    <div class="wizard-card">
                        <p class="flat-text small"><%= Mock.Random.cparagraph() %></p>
                        <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                        <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                    </div>
                    <div class="wizard-card">
                        <p class="flat-text small"><%= Mock.Random.cparagraph() %></p>
                        <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                        <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                        <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                    </div>
                    <div class="wizard-card">
                        <p class="flat-text small"><%= Mock.Random.cparagraph() %></p>
                        <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                        <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                        <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                        <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                    </div>
                </div>
                <div class="wizard-footer">
                    <button class="btn btn-brand mr10 wizard-next" bx-click="next">下一步</button>
                    <button class="btn mr10 wizard-back" bx-click="back">返回上一步</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="example bs-example2">
    <div class="content">
        <div class="content-header">
            <div>场景 1 - 单向流程</div>
            <div class="color-999 mt6">适用没有分支流程，需要一步到位完成的情况。当用户决定开始流程时出现，明确告知用户流程步骤数，放在内容的左上方，可替代标题。每个步骤指的是操作而无需是单独的页面，步骤必须依次往下，通过字体变大显示当前步骤，操作过流程的步骤颜色深于没有到达的步骤颜色。</div>
        </div>
        <div class="content-body">
            <div bx-name="spec.components/wizard/wizard" class="wizard wizard-vertical">
                <div class="wizard-cards">
                    <% for( var i = 0, cursor = 0, total = 4, POOL='一二三四五六七八九'; i < total; i++ ) { %>
                    <div class="wizard-card <%= i === cursor ? 'open' : '' %>">
                        <div class="ungrid-row">
                            <div class="ungrid-col" style="width: 50px; vertical-align: top; padding-top: 20px;">
                                <span class="circle"><%= i+1 %></span>
                            </div>
                            <div class="ungrid-col" style="background-color: #FFF; border-radius: 6px;">
                                <div class="wizard-card-header">
                                    <span class="title">步骤<%= POOL[i] %></span>
                                    <span class="summary"><%= Mock.Random.cparagraph() %></span>
                                    <a class="expand" href="javascript:;" bx-click="expand">展开</a>
                                </div>
                                <div class="wizard-card-body">
                                    <p class="flat-text small"><%= Mock.Random.cparagraph() %></p>
                                    <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                                    <p class="flat-text full-width mt10"><%= Mock.Random.cparagraph() %></p>
                                </div>
                                <div class="wizard-card-footer">
                                    <button class="btn btn-brand mr10 btn-step-next" bx-click="next">
                                        <%= i < total - 1 ? '保存并继续' : '完成' %>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div><% } %>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="example bs-example2">
    <div class="content">
        <div class="content-header">
            <div>场景 2 - 复合流程</div>
            <div class="color-999 mt6">适用过程中会出现分支情况，不会一步到位可反复的流程，如注册、付款、创建计划。当用户决定开始流程时出现，明确告知用户流程进度，放在内容的右上方。</div>
        </div>
        <div class="content-body" style="position: relative;">
            <table class="table table-hover">
                <thead>
                    <tr><th>字段1</th><th>字段2</th><th>字段3</th><th>字段4</th><th>字段5</th></tr>
                </thead>
                <tbody>
                    <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                    <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                    <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                    <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                    <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                </tbody>
            </table>
            <div class="ungrid-row summary">
                <div class="ungrid-col" style="">
                    <span>已选择 <b class="fontsize-16">6</b> 个标签，覆盖人数约 <b class="fontsize-16">157</b></span>
                </div>
                <div class="ungrid-col" style="">
                    <a href="javascript:;" style="color: #FFF;">创建营销人群 &gt;</a>
                </div>
            </div>
        </div>
    </div>
</div>
