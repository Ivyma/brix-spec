define(
	[
		'./design/index',
		'./brand/index',
		'./animation/index',
		'./chart/index'
	],
	function(Design, Brand, Animation, Chart) {
		return {
			DESIGN: Design,
			BRAND: Brand,
			ANIMATION: Animation,
			CHART: Chart
		}
	}
)