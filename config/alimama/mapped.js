define(
	[
		'./index'
	],
	function(Constant) {
		var mapped = {}

		function walk(node) {
			if (node.href) mapped[node.href] = node.path

			if (node.children) {
				for (var i = 0; i < node.children.length; i++) {
					walk(node.children[i])
				}
			}
		}

		for (var nav in Constant) {
			walk(Constant[nav])
		}

		return mapped
	}
)