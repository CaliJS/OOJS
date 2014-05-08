var oojs = (function(oojs) {
	'use strict';

	var ToolbarItem = function(itemElement) {
		Object.defineProperty(this, '_el', {
			value : itemElement
		});
	};

	Object.defineProperties(ToolbarItem.prototype, {
		toggleActiveState : {
			value : function () {
				this.activated = !this.activated;
			},
			enumerable : true
		},
		enabled : {
			get : function() {
				return !this._el.classList.constains('disabled');
			},
			set : function(value) {
				if (value) {
					this._el.classList.remove('disabled');
				} else {
					this._el.classList.add('disabled');
				}
			}
		},
		activated : {
			get : function() {
				return this._el.classList.add('active');
			},
			set : function(value) {
				if (value) {
					this._el.classList.add('active');
				} else {
					this._el.classList.remove('active');
				}
			}
		}

	});

	var createToolbarItems = function(itemElements) {
		var items = [];

		[].forEach.call(itemElements, function (el, index, array) {
			var item = new ToolbarItem(el);

			items.push(item);
		});

		return items;
	};

	oojs.createToolbar = function(elementId) {
		var element = document.getElementById(elementId);

		if (!element) {
			element = document.createElement('DIV');
			element.id = elementId;
			element.className = 'toolbar';
		}
	};

	return oojs;
}(oojs || {}));