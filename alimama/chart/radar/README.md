<div class="mb40">
    <div class="fontsize-20 mb10">
    雷达图 <small>radar</small>
    </div class="fontsize-28">
    <p class="mb20"></p>
</div>

<div class="mb40">
    <div class="fontsize-20 mb10">
    定义 
    </div class="fontsize-28">
    <p class="mb20">
      雷达图可以对两组变量进行多种项目的对比，反映数据相对中心点和其它数据点的变化情况；常用于多项指标的全面分析，使图表阅读者能够一目了然地各项指标变动情况和好坏趋向。
    </p>
</div>

<div class="mb40">
    <div class="fontsize-20 mb10">
    基础规范
    </div class="fontsize-28">
    <p class="mb20">
    场景：可用于评分系统、综合能力评估等等。
    </p>
</div>

<div bx-name="alimama/chart/list/index"></div>

<div class="example">
    <div class="content">
        <div class="content-header">
            <div>基础用法</div>
        </div>
        <div class="content-body" style="padding:18px;">
                <pre class="example-pre"  style="background:white;border-top:none;"><code class="hljs html">
                    var data= [
                        [ "英雄"     , "攻击力" ,"操作难度"] ,
                        [ "德玛皇子" , 65       , 28   ] ,
                        [ "疾风剑豪" , 59       , 48   ] ,
                        [ "盖伦"     , 90       , 40   ] ,
                        [ "寒冰射手" , 81       , 19   ] ,
                        [ "武器大师" , 56       , 96   ] ,
                        [ "战争之王" , 55       , 27   ] ,
                        [ "瑞文"     , 40       , 100  ] 
                    ];
                    var options = {
                        yAxis : {
                            field : ["攻击力","操作难度"],
                            //dataSection : [0,40,80,100]
                        },
                        xAxis : {
                            field : ["英雄"],
                        },
                        tips : {
                            prefix : ["攻击力","操作难度"]
                        },
                        graphs : {
                            alpha : 0.2
                        }
                    };
                       
                    Chartx.radar("canvasTest" , data , options).then(function( chart ){
                        chart.on("click" , function(e){
                             //e.eventInfo = { field : "" ,fole:{name , value}}
                             e.eventInfo.field && console.log("当前点击了分组："+e.eventInfo.field);
                             e.eventInfo.role && console.log("当前点击了角色："+e.eventInfo.role.name+"，值为"+e.eventInfo.role.value);
                        });
                    });

                </code></pre>
        </div>
    </div>
</div>

