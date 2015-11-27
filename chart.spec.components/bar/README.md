# 柱状图 bar

## 定义 

直方图是由一系列高度不等的纵向条纹或线段排列组成的图形。常用来表示数据的分布情况。

## 基础规范

- 在直方图中，类别数据一般情况下沿水平轴均匀分布，所有值数据沿垂直轴均匀分布。

- 直方图可设关键点数据，同时鼠标在移动到相关选中区域会浮出详细数据。

<div bx-name="chart.spec.components/list/index"></div>


 
```js
Chartx.bar(#el , data , options);
```

#### 柱状图数据

```js
var data= [
    ["xfield","uv" ,"pv","click"],
    [ 1      , 101 , 20 , 33    ],
    [ 2      , 67  , 51 , 26    ],
    [ 8      , 99  , 83 , 51    ]
];
```

#### 柱状图配置

```js
var options = {
    ...组件配置
    graphs: {}  //柱状图绘图配置
}
```
 options配置：

 - type --> 可选，如果填写horizontal，则会渲染横向柱状图，默认不配则为纵向柱状图
 + graphs 
   - bar --> 单条bar柱状图形的样式
     *  width --> 单条bar宽度，默认12
     *  fillStyle --> 单条bar的填充色
     *  radius --> bar的圆角
   - text --> bar上面的文本
     *  enabled --> 是否显示
     *  fillStyle --> 目前不支持配置，值为"#999"
     *  fontSize  --> 描述文本大小
     *  format --> {function}把原始文本转换座位最终显示文本的转换函数。比如原始数据都是[0.1 , 0.2 , 0.3]，但是实际的显示需要是10%,20%,30%这样的。

            ```js
            graphs : {
                text : {
                    format : function( n ){
                        return n * 100 + "%"
                    }    
                }    
            }
            ```

#### 柱状图事件：

 + click --> 点击事件

 ```js
 bar.on("click" , function(e){
     /*
     *e.eventInfo.iGroup: 分组索引
     *e.eventInfo.iLay:   堆叠索引，-1代表未选择bar
     *e.eventInfo.iNode:  单个分组中，bar索引 -1代表未选择bar 
     */

     //nodesInfoList存放着该事件覆盖的对应节点集合。
     //比如点击bar的分组区域，该nodesInfoList包含了该分组的所有bar矩形.
     //如果点击了具体的某个bar矩形，nodesInfoList则仅包含对应的这个bar矩形
     _.each( e.eventInfo.nodesInfoList , function( info ){
         console.log( info.field+":"+info.value );
     } );
 });
 ```