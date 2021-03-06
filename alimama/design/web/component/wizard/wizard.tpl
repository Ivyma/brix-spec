<div class="wizard">
    <ol class="wizard-header clearfix">
        <% for( var i = 0, POOL='一二三四五六七八九'; i < total; i++ ) { %>
        <li class="step <%= i === cursor ? 'active' : '' %>">
            <span class="circle"><%= i+1 %></span>步骤<%= POOL[i] %>
        </li>
        <% } %>
    </ol>
    <div class="wizard-body">
        <div>
            <p class="flat-text small"></p>
            <p class="flat-text full-width mt10"></p>
            <p class="flat-text full-width mt10 mb10"></p>
        </div>
        <div>
            <p class="flat-text small"></p>
            <p class="flat-text full-width mt10"></p>
            <p class="flat-text full-width mt10 mb10"></p>
        </div>
        <div>
            <p class="flat-text small"></p>
            <p class="flat-text full-width mt10"></p>
            <p class="flat-text full-width mt10 mb10"></p>
        </div>
    </div>
    <div class="wizard-footer">
        <button class="btn btn-brand mr10 btn-step-next" bx-click="next">下一步</button>
        <button class="btn mr10 btn-step-prev" bx-click="prev">返回上一步</button>
    </div>
</div>