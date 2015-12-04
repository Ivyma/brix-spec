/* global define */
define(function() {
    return (function(){/*
<div class="spec-section mb40 metric">
    <div class="mb60">
        <div class="fontsize-20 mb10">单位 <small>Unit</small></div>
        <p class="mb20">界面根据实现方式及运用平台的不同单位也有所不同，这里我们对每个平台的单位进行规范，同时提供彼此之间的换算方式。</p>
        <p class="mb0">Android :</p>
        <p class="mb0">长度单位为dp、文字单位为sp。换算公式为：px＝dp * ppi/160 </p>
        <p class="mb0">mdpi（160ppi）时，1dp＝1px</p>
        <p class="mb0">hdpi（240ppi）时，1dp＝1.5px</p>
        <p class="mb0">xhdpi（320ppi）时，1dp＝2px</p>
        <p class="mb30">xxhdpi（480ppi）时，1dp＝3px</p>
        <p class="mb0">iOS：</p>
        <p class="mb30">单位都为pt。</p>
        <p class="mb0">H5：</p>
        <p class="mb20">基础单位为px，必要时会使用单位rem。rem是以一个根值（px）的基准的相对单位。</p>
    </div>
    <div class="mb60">
        <div class="fontsize-20 mb10">尺寸<small>Size</small></div>
        <p class="mb30">手机不同的尺寸及分辨率造成多样的显示效果，为了降低设计开发的成本我们对现有的手机显示做了大致的分类。设计稿的基准为iPhone5s，开发适配1.5x、2x、3x这三个区间内的机型。</p>
        <img style="width:100%" src="https://img.alicdn.com/tps/TB10P8sKpXXXXXiXpXXXXXXXXXX-1314-580.png"/>
    </div>
    <div class="mb60">
        <div class="fontsize-20 mb10">网格<small>Grid</small></div>
        <p class="mb30">运用网格矩阵的栅格方式让信息呈现更加美观易读，更具可用性。而且，对于开发来说，页面将更加的灵活与规范。我们定义4x4pt的网格作为设计基准。</p>
        <img style="width:100%" src="https://img.alicdn.com/tps/TB151hyKpXXXXaVXXXXXXXXXXXX-1204-682.png"/>
    </div>
</div>


    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})