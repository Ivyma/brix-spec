/* global define */
define(function() {
    return (function(){/*
<div class="spec-navbar">
    <a href="index.html" class="brand">MineCraft</a>
    <a href="css.html">样式 <!-- CSS --></a>
    <a href="components.html">组件 <!-- Components --></a>
    <a href="brand.html">品牌 <!-- Brand --></a>
</div>
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})