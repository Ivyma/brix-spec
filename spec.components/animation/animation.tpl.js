/* global define */
define(function() {
    return (function(){/*
<div class="mb40">
    <div class="fontsize-20 mb40">动效规范 <small class="color-999 fontsize-12">todo</small></div class="fontsize-28">

    <div class="fontsize-16 mb10">后台产品动效基本规范</div>

    <div class="row">
        <div class="col-sm-4">
            <img class="img-responsive" src="placeholder.jpg">
            <div class="fontsize-14 mt15 mb10">真实的动效，符合⽤户的直觉和感知</div>
            <p class="color-999">动效在设计中不仅仅是形式美的存在，它蕴含着空间关系、功能性、系统的意图。并且满⾜⾃然的物理原则，不应动效增加⽤户的理解和认知成本。</p>
        </div>
        <div class="col-sm-4">
            <img class="img-responsive" src="placeholder.jpg">
            <div class="fontsize-14 mt15 mb10">效率优先，响应迅速，操作⾼效</div>
            <p class="color-999">效率优先关系到⽤户的每⼀次触发⾏为，因动效的增加影响⽤户的操作是动效设计的前提，强调⽤户的触发动作，弱化⽤户对响应时间的感知、告知⽤户加载的预计完成时间，来提升⽤户的操作信⼼和操作效率。</p>
        </div>
        <div class="col-sm-4">
            <img class="img-responsive" src="placeholder.jpg">
            <div class="fontsize-14 mt15 mb10">遵循法则，节奏统⼀，平滑流畅</div>
            <p class="color-999">动效在设计中不哈仅仅是形式美的存在，它蕴含着空间关系、功能性、系统的意图。并且满⾜⾃然的物理原则，不应动效增加⽤户的理解和认知成本。</p>
        </div>
    </div>

    <div class="fontsize-16 mb10">动效在后台产品中要解决的问题</div>
    <div class="row">
        <div class="col-sm-3">
            <img class="img-responsive" src="placeholder.jpg">
            <div class="fontsize-14 mt15 mb10">引导⽤户的操作流程</div>
            <p class="color-999">动效可告知⽤户操作路径并且满⾜场景切换的连贯性，同时将功能的层级关系传递给⽤户，帮助⽤户预测可能的⾏径。增强⽤户的操作感知和情景融⼊。</p>
        </div>
        <div class="col-sm-3">
            <img class="img-responsive" src="placeholder.jpg">
            <div class="fontsize-14 mt15 mb10">降低⽤户的时间感受</div>
            <p class="color-999">加⼊有趣的过渡动画来取悦⽤户，减少⽤户的焦虑情绪，降低的⽤户的时间感受或给⽤户可预期的等待时间。这类动效应该直观的反应当前的处理进度或状态。</p>
        </div>
        <div class="col-sm-3">
            <img class="img-responsive" src="placeholder.jpg">
            <div class="fontsize-14 mt15 mb10">化解⽤户的负⾯情绪</div>
            <p class="color-999">后台数据化产品，时时刻刻都会影响⽤户的信⼼，优化404、500或是数据呈现⽅式，来提升⽤户的使⽤信⼼甚⾄还可以提⾼⽤户对使⽤产品困难时的容忍能⼒。</p>
        </div>
        <div class="col-sm-3">
            <img class="img-responsive" src="placeholder.jpg">
            <div class="fontsize-14 mt15 mb10">减少⼯程化的语⾔</div>
            <p class="color-999">通过情感化的提⽰减少浏览器系统⼯程化的语⾔，给⽤户更完整的的浏览体验，同时降低⽤户的操作成本，提⾼⽤户的操作效率。</p>
        </div>
    </div>
</div>

<div class="mb40">
    <div class="mb40">
        <div class="fontsize-20">真实的动效 <small class="color-999 fontsize-12">符合⽤户的直觉和感知</small></div class="fontsize-28">
        <div class="color-999 mt4">动效在设计中不哈仅仅是形式美的存在，它蕴含着空间关系、功能性、系统的意图。并且满⾜⾃然的物理原则，不应动效增加⽤户的理解和认知成本。</div>
    </div>
    <div class="mb40">
        <div class="row">
            <div class="col-sm-6">
                <div class="fontsize-16 mb10">建⽴真实的动效场景空间</div>
                <div>动效层级分层就是要为⽤户建⽴⼀种真实的视觉，使得⽤户的浏览⻚⾯更加⾃然流畅、基于动效样式(CSS的基本动效规则，如位移、旋转、缩放、形变)以及物理曲线(缓动曲线规则如线性、加速减速、弹性曲线)来实现⻚⾯动效来实现⻚⾯动效更加符合⽤户的感知和和直觉。</div>
            </div>
            <div class="col-sm-6"><img class="img-responsive" src="placeholder.jpg"></div>
        </div>
    </div>
    <div class="mb40">
        <div class="row">
            <div class="col-sm-6">
                <div class="fontsize-16 mb10">后台产品的动效层级拆分</div>
                <div>现有的后台产品设计中，⽤户看到的每⼀个⻚⾯上的层级区分不够清晰，会影响⽤户对层级中重要信息的阅读，通过重新梳理⽤户浏览界⾯内容的层级，进⾏有效的分层，从⽽找到适合产品的动效运动范围。使得同⼀层级下的动效感受是⼀致的，必须说明是后台产品的动效是辅助于设计的存在，应更加突出功能性，减少形式美⽽存在的动效。</div>
            </div>
            <div class="col-sm-6"><img class="img-responsive" src="placeholder.jpg"></div>
        </div>
    </div>
    <div class="mb40">
        <div class="row">
            <div class="col-sm-6">
                <div class="fontsize-16 mb10">从层级中梳理动效曲线范围</div>
                <div>通过梳理层级发现最上层的⻚⾯⾯积最⼤，⻚⾯的⾯积会影响动效的⼒度和样式。在与场景相结合的基础上。⾯积越⼤、层级相对较⾼的场景，需要更加舒缓和⾃然的曲线。相反，⾯积较⼩、层级较低的场景，则需要回弹，抖动，缩放等⽅式来吸引⽤户的注意⼒。</div>
            </div>
            <div class="col-sm-6"><img class="img-responsive" src="placeholder.jpg"></div>
        </div>
    </div>
    <div class="mb40">
        <div class="row">
            <div class="col-sm-6">
                <div class="fontsize-16 mb10">动效在层级中的曲线规则</div>
                <div>通过分析层级背后的逻辑，以及层级的产品功能从⽽梳理出适合的曲线规则，复⽤在后台⼯具产品上，传递给⽤户⼀致的动效体验，同时也对动效场景的扩展提供延续性设计。</div>
            </div>
            <div class="col-sm-6"><img class="img-responsive" src="placeholder.jpg"></div>
        </div>
    </div>
    <div class="mb40">
        <div class="row">
            <div class="col-sm-6">
                <div class="fontsize-16 mb10">元素在产品中的使⽤⽅法</div>
                <div>结合⽤户的使⽤效率，和对内容的理解来看，重新梳理⻚⾯元素的运动轨迹是否需要完全展现，最终定义了合理的展现范围，当⻚⾯⼤⼩⼩于980x300时，则运动轨迹完全展现，当⻚⾯⼤于980x300时，则采⽤错位移动的⽅法解决展现问题，缩短位移路径，强化位移结果。</div>
            </div>
            <div class="col-sm-6"><img class="img-responsive" src="placeholder.jpg"></div>
        </div>
    </div>
</div>

<div class="mb40">
    <div class="mb40">
        <div class="fontsize-20">效率优先 <small class="color-999 fontsize-12">响应迅速，操作⾼效</small></div class="fontsize-28">
        <div class="color-999 mt4">效率优先关系到⽤户的每⼀次触发⾏为，因动效的增加影响⽤户的操作是动效设计的前提，强调⽤户的触发动作，弱化⽤户对响应时间的感知、告知⽤户加载的预计完成时间，来提升⽤户的操作信⼼和操作效率。</div>
    </div>
    <div class="mb40">
        <div class="fontsize-16 mb10">触发的反馈动作</div>
        <p>因⽤户的设备不同，屏幕不同，导致产品⾊彩在不同设备下显⽰效果差异较⼤，因此，通过动效来强化⽤户的触发操作，针对按钮和其他触发操作设计了不同的解决⽅案。来解决⽤户关键的悬停点按操作。</p>
        <div class="row">
            <div class="col-sm-4"><img class="img-responsive" src="placeholder.jpg"></div>
            <div class="col-sm-4"><img class="img-responsive" src="placeholder.jpg"></div>
        </div>
    </div>
    <div class="mb40">
        <div class="fontsize-16 mb10">响应的时间是可控的</div>
        <p>在执⾏任何相应动作的动效中，解决⽤户的核⼼诉求是第⼀要务，不能因形式感的样式⽽延⻓动效的浏览时间，因此，在⻚⾯展现中，动效时间也应当是可控的，并且是有边界的。如需过⻓的动效的说明的场景，则需要考虑辅助其他⽅法来解决。</p>
        <div class="row">
            <div class="col-sm-4"><img class="img-responsive" src="placeholder.jpg"></div>
            <div class="col-sm-4"><img class="img-responsive" src="placeholder.jpg"></div>
        </div>
    </div>
    <div class="mb40">
        <div class="fontsize-16 mb10">加载的时间是可知的</div>
        <p>⽤户执⾏“确认”“刷新”“上传”等操作时，需要给出⽤户的预计等待时间及反馈样式，等待时间提供给⽤户，明确操作的反馈状态及完成时间，使得⽤户执⾏的操作都是有预期、可完成的。增强⽤户的信⼼及操作效率。因此在设计等待时间时，提供了两种设计规范。</p>
        <div class="row">
            <div class="col-sm-3"><img class="img-responsive" src="placeholder.jpg"></div>
            <div class="col-sm-3"><img class="img-responsive" src="placeholder.jpg"></div>
            <div class="col-sm-3"><img class="img-responsive" src="placeholder.jpg"></div>
            <div class="col-sm-3"><img class="img-responsive" src="placeholder.jpg"></div>
        </div>
    </div>
    <div class="mb40">
        <div class="fontsize-16 mb10">动效延迟</div>
        <p>在设计中，当有同⼀触发区域涉及多种交互动作，⽆法判断⽤户下⼀步的操作是什么时，可使⽤动效延迟的做法，当然，必须要说的动效延迟是⼀种慎⽤的做法，延迟的时间，需要反复多次的校正和调试，⽽下述⽰例，也是在反复调试下测试出的延迟时间。</p>
        <div class="row">
            <div class="col-sm-4"><img class="img-responsive" src="placeholder.jpg"></div>
            <div class="col-sm-4"><img class="img-responsive" src="placeholder.jpg"></div>
        </div>
    </div>
</div>

<div class="mb40">
    <div class="mb40">
        <div class="fontsize-20">遵循法则 <small class="color-999 fontsize-12">节奏统⼀，平滑流畅</small></div class="fontsize-28">
        <div class="color-999 mt4">动效在设计中不哈仅仅是形式美的存在，它蕴含着空间关系、功能性、系统的意图。并且满⾜⾃然的物理原则，不应动效增加⽤户的理解和认知成本。</div>
    </div>

    <div class="mb40">
        <div class="fontsize-16 mb10">曲线样式的统⼀</div>
        <p>基于真实的动效的层级梳理，在⼀致性的原则下，梳理出不同的曲线样式，对应在不同⽓氛中曲线规则按照下述适⽤场景划分，使得⽤户在产品曲线的感受是⼀致的，除此之外，这⾥的曲线还应⽤在界⾯间的专场、元素的出现和退出以及动态的反馈中。</p>
        <blockquote>
            <p>已将函数 Ease and Wizz打包成组，在设计过程中可通过使⽤统⼀函数来获得⼀致体验。</p>
        </blockquote>
        <div class="row">
            <div class="col-sm-3"><img class="img-responsive" src="placeholder.jpg"></div>
            <div class="col-sm-3"><img class="img-responsive" src="placeholder.jpg"></div>
            <div class="col-sm-3"><img class="img-responsive" src="placeholder.jpg"></div>
            <div class="col-sm-3"><img class="img-responsive" src="placeholder.jpg"></div>
        </div>
    </div>

    <div class="mb40">
        <div class="fontsize-16 mb10">引导⽤户有序的阅读</div>
        <p>当⻚⾯被刷新，或进⾏全局过渡变化时，需考虑元素的进⼊顺序和进⼊逻辑，保证信息有效的被传达，同时符合⽤户的阅读规则，这部分内容不应单独的存在，需结合上述的曲线规则来使⽤。在设计过程中需考虑元素主次，进⾏有效划分，从⽽使得动效⾃然、流畅。避免给⽤户传达⽣硬，脱节的感受。</p>
        <div class="row">
            <div class="col-sm-4"><img class="img-responsive" src="placeholder.jpg"></div>
            <div class="col-sm-4"><img class="img-responsive" src="placeholder.jpg"></div>
            <div class="col-sm-4"><img class="img-responsive" src="placeholder.jpg"></div>
        </div>
    </div>
        
    <div class="mb40">
        <div class="fontsize-16 mb10">告知⽤户元素的从属关系</div>
        <p>当⽤户呼出组件或是⻚⾯跟随浮层时，应当告知⽤户浮层来源及从属关系，明确触发区域和反馈区域，传递给⽤户明确落脚地奥，同时应避免动效幅度过⼤，影响⽤户阅读内容。</p>
        <div class="row">
            <div class="col-sm-4"><img class="img-responsive" src="placeholder.jpg"></div>
            <div class="col-sm-4"><img class="img-responsive" src="placeholder.jpg"></div>
            <div class="col-sm-4"><img class="img-responsive" src="placeholder.jpg"></div>
        </div>
    </div>
        
    <div class="mb40">
        <div class="fontsize-16 mb10">赋予⻚⾯唯⼀的动效关系</div>
        <p>动效在⻚⾯中承载产品功能的传达，因此当⻚⾯动效发⽣时，应保证有且只有⼀个动效主体运动，保证动效元素的唯⼀性，有助于帮助⽤户明确运动的主体物，及运动关系。</p>
        <div class="row">
            <div class="col-sm-4"><img class="img-responsive" src="placeholder.jpg"></div>
            <div class="col-sm-4"><img class="img-responsive" src="placeholder.jpg"></div>
        </div>
    </div>
</div>
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})