(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_React$Component) {
	_inherits(Message, _React$Component);

	function Message() {
		_classCallCheck(this, Message);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Message).apply(this, arguments));
	}

	_createClass(Message, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'li',
				null,
				React.createElement('img', { src: 'http://placehold.it/40x40' }),
				React.createElement(
					'strong',
					null,
					this.props.user,
					' :'
				),
				React.createElement(
					'span',
					null,
					this.props.text
				)
			);
		}
	}]);

	return Message;
}(React.Component);

exports.default = Message;
;

var MessageList = function (_React$Component2) {
	_inherits(MessageList, _React$Component2);

	function MessageList(props) {
		_classCallCheck(this, MessageList);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MessageList).call(this, props));
	}

	_createClass(MessageList, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'chat-feed' },
				React.createElement(
					'ul',
					null,
					this.props.messages.map(function (message, i) {
						return React.createElement(Message, {
							key: i,
							user: message.user,
							text: message.text
						});
					})
				)
			);
		}
	}]);

	return MessageList;
}(React.Component);

exports.default = MessageList;
;

var MessageForm = function (_React$Component3) {
	_inherits(MessageForm, _React$Component3);

	function MessageForm(props) {
		_classCallCheck(this, MessageForm);

		var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(MessageForm).call(this, props));

		_this3.state = { text: '' };
		_this3.handleSubmit = _this3.handleSubmit.bind(_this3);
		_this3.changeHandler = _this3.changeHandler.bind(_this3);
		return _this3;
	}

	_createClass(MessageForm, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.preventDefault();
			var message = {
				user: this.props.user,
				text: this.state.text
			};
			this.props.onMessageSubmit(message);
			this.setState({ text: '' });
		}
	}, {
		key: 'changeHandler',
		value: function changeHandler(e) {
			this.setState({ text: e.target.value });
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'chat-send-message' },
				React.createElement(
					'form',
					{ onSubmit: this.handleSubmit },
					React.createElement('input', {
						type: 'text',
						onChange: this.changeHandler,
						value: this.state.text,
						placeholder: 'Type a message...',
						className: 'input' })
				)
			);
		}
	}]);

	return MessageForm;
}(React.Component);

exports.default = MessageForm;
;

var ChatFeed = function (_React$Component4) {
	_inherits(ChatFeed, _React$Component4);

	function ChatFeed(props) {
		_classCallCheck(this, ChatFeed);

		var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(ChatFeed).call(this, props));

		_this4.state = { users: [], messages: [], text: '' };
		_this4.handleMessageSubmit = _this4.handleMessageSubmit.bind(_this4);
		return _this4;
	}

	_createClass(ChatFeed, [{
		key: 'handleMessageSubmit',
		value: function handleMessageSubmit(message) {
			var messages = this.state.messages;

			messages.push(message);
			this.setState({ messages: messages });
			//todo socket emit
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'column medium-8 chat' },
				React.createElement(MessageList, {
					messages: this.state.messages
				}),
				React.createElement(MessageForm, {
					onMessageSubmit: this.handleMessageSubmit,
					user: 'Eska'
				})
			);
		}
	}]);

	return ChatFeed;
}(React.Component);

exports.default = ChatFeed;
;

var ChatApp = function (_React$Component5) {
	_inherits(ChatApp, _React$Component5);

	function ChatApp(props) {
		_classCallCheck(this, ChatApp);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ChatApp).call(this, props));
	}

	_createClass(ChatApp, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'row collapse fullWidth' },
				React.createElement(
					'div',
					{ className: 'column medium-2 online-people' },
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							null,
							React.createElement('img', { src: 'http://placehold.it/40x40' }),
							React.createElement(
								'span',
								null,
								' lol '
							)
						),
						React.createElement(
							'li',
							null,
							React.createElement('img', { src: 'http://placehold.it/40x40' }),
							React.createElement(
								'span',
								null,
								' Eska '
							)
						),
						React.createElement(
							'li',
							null,
							React.createElement('img', { src: 'http://placehold.it/40x40' }),
							React.createElement(
								'span',
								null,
								' Imba '
							)
						),
						React.createElement(
							'li',
							null,
							React.createElement('img', { src: 'http://placehold.it/40x40' }),
							React.createElement(
								'span',
								null,
								' superLol '
							)
						),
						React.createElement(
							'li',
							null,
							React.createElement('img', { src: 'http://placehold.it/40x40' }),
							React.createElement(
								'span',
								null,
								' smiley '
							)
						),
						React.createElement(
							'li',
							null,
							React.createElement('img', { src: 'http://placehold.it/40x40' }),
							React.createElement(
								'span',
								null,
								' youtube '
							)
						)
					)
				),
				React.createElement(ChatFeed, null),
				React.createElement(
					'div',
					{ className: 'column medium-2 chat-settings' },
					'sadaasd'
				)
			);
		}
	}]);

	return ChatApp;
}(React.Component);

exports.default = ChatApp;
;

ReactDOM.render(React.createElement(ChatApp, null), document.getElementById('chat-app'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHNcXHNjcmlwdHNcXGFwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztJQ0NxQixPOzs7Ozs7Ozs7OzsyQkFDWDtBQUNSLFVBQ0M7QUFBQTtJQUFBO0lBQ0MsNkJBQUssS0FBSSwyQkFBVCxHQUREO0lBRUM7QUFBQTtLQUFBO0tBQVMsS0FBSyxLQUFMLENBQVcsSUFBcEI7S0FBQTtBQUFBLEtBRkQ7SUFHQztBQUFBO0tBQUE7S0FBTyxLQUFLLEtBQUwsQ0FBVztBQUFsQjtBQUhELElBREQ7QUFPQTs7OztFQVRtQyxNQUFNLFM7O2tCQUF0QixPO0FBVXBCOztJQUlvQixXOzs7QUFDcEIsc0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHdGQUNaLEtBRFk7QUFFbEI7Ozs7MkJBR1E7QUFDUixVQUNDO0FBQUE7SUFBQSxFQUFLLFdBQVUsV0FBZjtJQUNDO0FBQUE7S0FBQTtLQUVFLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsR0FBcEIsQ0FBd0IsVUFBQyxPQUFELEVBQVUsQ0FBVixFQUFnQjtBQUN2QyxhQUNDLG9CQUFDLE9BQUQ7QUFDQyxZQUFLLENBRE47QUFFQyxhQUFNLFFBQVEsSUFGZjtBQUdDLGFBQU0sUUFBUTtBQUhmLFFBREQ7QUFPQSxNQVJEO0FBRkY7QUFERCxJQUREO0FBaUJBOzs7O0VBeEJ1QyxNQUFNLFM7O2tCQUExQixXO0FBeUJwQjs7SUFJb0IsVzs7O0FBRXBCLHNCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4RkFDWixLQURZOztBQUVsQixTQUFLLEtBQUwsR0FBYSxFQUFFLE1BQU0sRUFBUixFQUFiO0FBQ0EsU0FBSyxZQUFMLEdBQW9CLE9BQUssWUFBTCxDQUFrQixJQUFsQixRQUFwQjtBQUNBLFNBQUssYUFBTCxHQUFxQixPQUFLLGFBQUwsQ0FBbUIsSUFBbkIsUUFBckI7QUFKa0I7QUFLbEI7Ozs7K0JB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LE9BQUQsT0FBaEIsRUFBNEIsU0FBUyxjQUFULENBQXdCLFVBQXhCLENBQTVCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8bGk+XHJcblx0XHRcdFx0PGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzQweDQwXCIgLz5cclxuXHRcdFx0XHQ8c3Ryb25nPnt0aGlzLnByb3BzLnVzZXJ9IDo8L3N0cm9uZz5cclxuXHRcdFx0XHQ8c3Bhbj57dGhpcy5wcm9wcy50ZXh0fTwvc3Bhbj5cclxuXHRcdFx0PC9saT5cclxuXHRcdCk7XHJcblx0fVxyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2hhdC1mZWVkJz5cclxuXHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMubWVzc2FnZXMubWFwKChtZXNzYWdlLCBpKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdDxNZXNzYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17aX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dXNlcj17bWVzc2FnZS51c2VyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PXttZXNzYWdlLnRleHR9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0geyB0ZXh0OiAnJyB9O1xyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5jaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dmFyIG1lc3NhZ2UgPSB7XHJcblx0XHRcdHVzZXIgOiB0aGlzLnByb3BzLnVzZXIsXHJcblx0XHRcdHRleHQgOiB0aGlzLnN0YXRlLnRleHRcclxuXHRcdH07XHJcblx0XHR0aGlzLnByb3BzLm9uTWVzc2FnZVN1Ym1pdChtZXNzYWdlKTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoeyB0ZXh0IDogJycgfSk7XHJcblx0fVxyXG5cclxuXHRjaGFuZ2VIYW5kbGVyKGUpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoeyB0ZXh0IDogZS50YXJnZXQudmFsdWUgfSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2hhdC1zZW5kLW1lc3NhZ2UnPlxyXG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fVxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nVHlwZSBhIG1lc3NhZ2UuLi4nXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImlucHV0XCIgLz5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTsgXHJcblx0fVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRGZWVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHt1c2VyczogW10sIG1lc3NhZ2VzOiBbXSwgdGV4dDogJyd9O1xyXG5cdFx0dGhpcy5oYW5kbGVNZXNzYWdlU3VibWl0ID0gdGhpcy5oYW5kbGVNZXNzYWdlU3VibWl0LmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblx0aGFuZGxlTWVzc2FnZVN1Ym1pdChtZXNzYWdlKSB7XHJcblx0XHR2YXIge21lc3NhZ2VzfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRtZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7bWVzc2FnZXN9KTtcclxuXHRcdC8vdG9kbyBzb2NrZXQgZW1pdFxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBtZWRpdW0tOCBjaGF0Jz5cclxuXHRcdFx0XHQ8TWVzc2FnZUxpc3RcclxuXHRcdFx0XHRcdG1lc3NhZ2VzPXt0aGlzLnN0YXRlLm1lc3NhZ2VzfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PE1lc3NhZ2VGb3JtXHJcblx0XHRcdFx0XHRvbk1lc3NhZ2VTdWJtaXQ9e3RoaXMuaGFuZGxlTWVzc2FnZVN1Ym1pdH1cclxuXHRcdFx0XHRcdHVzZXI9J0Vza2EnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0QXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3JvdyBjb2xsYXBzZSBmdWxsV2lkdGgnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gbWVkaXVtLTIgb25saW5lLXBlb3BsZSc+XHJcblx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz0naHR0cDovL3BsYWNlaG9sZC5pdC80MHg0MCcgLz5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj4gbG9sIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPSdodHRwOi8vcGxhY2Vob2xkLml0LzQweDQwJyAvPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPiBFc2thIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPSdodHRwOi8vcGxhY2Vob2xkLml0LzQweDQwJyAvPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPiBJbWJhIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPSdodHRwOi8vcGxhY2Vob2xkLml0LzQweDQwJyAvPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPiBzdXBlckxvbCA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz0naHR0cDovL3BsYWNlaG9sZC5pdC80MHg0MCcgLz5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj4gc21pbGV5IDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPSdodHRwOi8vcGxhY2Vob2xkLml0LzQweDQwJyAvPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPiB5b3V0dWJlIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PENoYXRGZWVkLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIG1lZGl1bS0yIGNoYXQtc2V0dGluZ3MnPlxyXG5cdFx0XHRcdFx0c2FkYWFzZFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxufTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcig8Q2hhdEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdC1hcHAnKSk7Il19
