#### topo配置
 
 - graph 
   + rankdir --> 排序方向，默认“TB”从上到下
   + nodesep --> 节点间距
   + ranksep --> 排间距
 - node 
   + width --> 节点width
   + height --> 节点height
   + fillStyle --> 节点填充色
   + strokeStyle --> 节点描边色
   + strokeStyleHover --> 节点hover态描边色
   + labelColor --> 节点上面文本颜色
 - link
   + 连接线拐点圆角半径

### 进度图表（progress）

#### progress图配置

  - barWidth --> bar宽
  - axisWidth --> 轴宽，默认等于barWidth
  - progColor --> bar的颜色
  - startAngle --> 起始角度
  - angleCount --> 角度的总长
  - currRatio --> 当前的进度比率
  - barDis --> 如果有多组progress，则代表两bar之间的间距
  - field --> 配置哪组数据做为数据源，可以是数组
  - dataType --> 默认是占比，如果是绝对值"absolute"则需要自己另外计算占比
  - text 
     - enabled --> 是否显示文案
     - fillStyle --> 文案背景色
     - format --> 文案过滤函数
     - fontSize --> 文案大小