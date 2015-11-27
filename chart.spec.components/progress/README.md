# 进度图表 progress

## 定义

- 用在表示当前进度，或者完成比例的场景

## 基础规范

- 用在表示当前进度，或者完成比例的场景

<div bx-name="chart.spec.components/list/index"></div>

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