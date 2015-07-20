/* global define */
define(function() {
    return (function(){/*
<div>
    <ol class="steps clearfix">
        <% for( var i = 0, POOL='一二三四五六七八九'; i < total; i++ ) { %>
        <li class="step <%= i === cursor ? 'active' : '' %>">
            <span><%= i+1 %></span>步骤<%= POOL[i] %>
        </li>
        <% } %>
    </ol>
    <div>
        <p class="flat-text small"></p>
        <p class="flat-text full-width"></p>
        <p class="flat-text full-width"></p>
    </div>
    <div>
        <button class="btn btn-brand mr10 btn-step-next" bx-click="next">下一步</button>
        <button class="btn mr10 btn-step-prev" bx-click="prev">返回上一步</button>
    </div>
</div>
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})