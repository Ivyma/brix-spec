<div class="mb40">
    <div class="fontsize-20">步骤条 <small>Step</small></div>
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
            <div bx-name="spec.components/step/step"></div>
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
            <div style="background-color: #FAFAFA; padding: 40px;">
                <div></div>
                <div class="step1 mb20">
                    <div class="ungrid-row">
                        <div class="ungrid-col" style="width: 50px; vertical-align: top; padding-top: 40px;">
                            <span class="circle">1</span>
                        </div>
                        <div class="ungrid-col" style="background-color: #FFF; padding: 40px; border-radius: 6px;">
                            <div>
                                <div>
                                    <p class="flat-text small" style="margin: 0;"></p>
                                    <p class="flat-text full-width mt10"></p>
                                    <p class="flat-text full-width mb10 mb10"></p>
                                </div>
                                <div>
                                    <button class="btn btn-brand mr10 btn-step-next" bx-click="next">保存并继续</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="step2 mb20">
                    <div class="ungrid-row">
                        <div class="ungrid-col" style="width: 50px; vertical-align: top; padding-top: 40px;">
                            <span class="circle">2</span>
                        </div>
                        <div class="ungrid-col" style="background-color: #FFF; padding: 40px; border-radius: 6px;">
                            <div>
                                <div>
                                    <p class="flat-text small" style="margin: 0;"></p>
                                    <a class="expand" href="javascript:;">展开</a>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="step3 mb20">
                    <div class="ungrid-row">
                        <div class="ungrid-col" style="width: 50px; vertical-align: top; padding-top: 40px;">
                            <span class="circle">3</span>
                        </div>
                        <div class="ungrid-col" style="background-color: #FFF; padding: 40px; border-radius: 6px;">
                            <div>
                                <div>
                                    <p class="flat-text small" style="margin: 0;"></p>
                                    <a class="expand" href="javascript:;">展开</a>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="bs-example">
    <div class="content">
        <h3>场景 2 - 复合流程</h3>
        <p>适用过程中会出现分支情况，不会一步到位可反复的流程，如注册、付款、创建计划。当用户决定开始流程时出现，明确告知用户流程进度，放在内容的右上方。</p>
        <div class="content-body"></div>
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>字段1</th>
                        <th>字段2</th>
                        <th>字段3</th>
                        <th>字段4</th>
                        <th>字段5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                    <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                </tbody>
            </table>
            <div class="ungrid-row" style="height: 80px;">
                <div class="ungrid-col" style="background-color: rgb(77,63,56); 
                    vertical-align: middle; 
                    text-align: center;
                    color: #FFF; 
                    border-radius: 6px 0 0 0;
                    width: 80%;">
                    <span>已选择 <b class="fontsize-16">6</b> 个标签，覆盖人数约 <b class="fontsize-16">157</b></span>
                </div>
                <div class="ungrid-col" style="background-color: rgb(252,101,41); 
                    vertical-align: middle;
                    text-align: center;
                    color: #FFF;
                    border-radius: 0 6px 0 0;">
                    <a href="javascript:;" style="color: #FFF;">创建营销人群 &gt;</a>
                </div>
            </div>
        </div>
    </div>
</div>
