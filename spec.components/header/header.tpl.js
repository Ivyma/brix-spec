/* global define */
define(function() {
    return (function(){/*
<div class="spec-navbar">
	<div class="pull-left spec-navbar-header">
		<a href="index.html" class="spec-navbar-brand specfont">&#xe632;</a>
		<a href="javascript:;"><span class="brixfont">&#xe623;</span></a>
    	<!-- <a href="index.html" class="spec-navbar-brand">MineCraft</a> -->
    </div>
    <div class="pull-left spec-navbar-nav">
	    <a href="css.html">样式 <!-- CSS --></a>
	    <a href="components.html">组件 <!-- Components --></a>
	    <a href="brand.html">品牌 <!-- Brand --></a>
    </div>
</div>
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})