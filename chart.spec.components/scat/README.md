# 散点图 scat

## 定义

- 散点图一般应用于表述两个数据相关性，看变量y与x之间是否存在相关性的变化趋势。给散点图加上“趋势线”，又能清晰地表现变化趋势。

## 基础规范

- 一般用正相关、负相关和不相关描述。点分布在某一条直线附近，若是从左下角区域分布到右上角区域,则是正相关；若是从左上角分布到右下角区域,则是负相关；点的分布无规律则不相关。相关性还可以分强弱，点分布越靠近一直线，相关性也强，否则越弱。

<div bx-name="chart.spec.components/list/index"></div>

#### 散点图的配置

 - zAxis --> 散点图中的大小维度
    + field zAxis的字段配置，和xAxis,yAxis的field配置一样
 - graphs 
    + maxR --> 最大半径
    + minR --> 最小半径
    + normalR --> 默认半径  
       

### 拓扑图（topo）
    
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