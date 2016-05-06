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
					': '
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
			//handle submit message
			var messages = this.state.messages;

			if (message.text) {
				messages.push(message);
				this.setState({ messages: messages });
			}
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

var User = function (_React$Component5) {
	_inherits(User, _React$Component5);

	function User() {
		_classCallCheck(this, User);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(User).apply(this, arguments));
	}

	_createClass(User, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'li',
				null,
				React.createElement('img', { src: 'http://placehold.it/40x40' }),
				React.createElement(
					'span',
					null,
					this.props.userName
				)
			);
		}
	}]);

	return User;
}(React.Component);

exports.default = User;
;

var OnlineUsers = function (_React$Component6) {
	_inherits(OnlineUsers, _React$Component6);

	function OnlineUsers(props) {
		_classCallCheck(this, OnlineUsers);

		var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(OnlineUsers).call(this, props));

		_this6.state = { users: ['Eska', 'Lol123', 'Imba', 'Fetta', 'lol'] };
		return _this6;
	}

	_createClass(OnlineUsers, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'column medium-2 online-people' },
				React.createElement(
					'ul',
					null,
					this.state.users.map(function (user, i) {
						return React.createElement(User, {
							key: i,
							userName: user
						});
					})
				)
			);
		}
	}]);

	return OnlineUsers;
}(React.Component);

exports.default = OnlineUsers;
;

var Settings = function (_React$Component7) {
	_inherits(Settings, _React$Component7);

	function Settings() {
		_classCallCheck(this, Settings);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Settings).apply(this, arguments));
	}

	_createClass(Settings, [{
		key: 'render',
		value: function render() {
			return React.createElement('div', { className: 'column medium-2 chat-settings' });
		}
	}]);

	return Settings;
}(React.Component);

exports.default = Settings;
;

var ChatApp = function (_React$Component8) {
	_inherits(ChatApp, _React$Component8);

	function ChatApp(props) {
		_classCallCheck(this, ChatApp);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ChatApp).call(this, props));
	}

	_createClass(ChatApp, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'chat-window' },
				React.createElement(
					'div',
					{ className: 'row collapse fullWidth header' },
					React.createElement(
						'div',
						{ className: 'column medium-2' },
						React.createElement(
							'h5',
							null,
							'Online users'
						)
					),
					React.createElement(
						'div',
						{ className: 'column medium-8' },
						React.createElement(
							'h5',
							null,
							'Eska chat!'
						)
					),
					React.createElement(
						'div',
						{ className: 'column medium-2' },
						React.createElement(
							'h5',
							null,
							'Settings'
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'row collapse fullWidth' },
					React.createElement(OnlineUsers, null),
					React.createElement(ChatFeed, null),
					React.createElement(Settings, null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHNcXHNjcmlwdHNcXGFwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztJQ0NxQixPOzs7Ozs7Ozs7OzsyQkFDWDtBQUNSLFVBQ0M7QUFBQTtJQUFBO0lBQ0MsNkJBQUssS0FBSSwyQkFBVCxHQUREO0lBRUM7QUFBQTtLQUFBO0tBQVMsS0FBSyxLQUFMLENBQVcsSUFBcEI7S0FBQTtBQUFBLEtBRkQ7SUFHQztBQUFBO0tBQUE7S0FBTyxLQUFLLEtBQUwsQ0FBVztBQUFsQjtBQUhELElBREQ7QUFPQTs7OztFQVRtQyxNQUFNLFM7O2tCQUF0QixPO0FBVXBCOztJQUdvQixXOzs7QUFFcEIsc0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHdGQUNaLEtBRFk7QUFFbEI7Ozs7MkJBRVE7QUFDUixVQUNDO0FBQUE7SUFBQSxFQUFLLFdBQVUsV0FBZjtJQUNDO0FBQUE7S0FBQTtLQUVFLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsR0FBcEIsQ0FBd0IsVUFBQyxPQUFELEVBQVUsQ0FBVixFQUFnQjtBQUN2QyxhQUNDLG9CQUFDLE9BQUQ7QUFDQyxZQUFLLENBRE47QUFFQyxhQUFNLFFBQVEsSUFGZjtBQUdDLGFBQU0sUUFBUTtBQUhmLFFBREQ7QUFPQSxNQVJEO0FBRkY7QUFERCxJQUREO0FBaUJBOzs7O0VBeEJ1QyxNQUFNLFM7O2tCQUExQixXO0FBeUJwQjs7SUFHb0IsVzs7O0FBRXBCLHNCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4RkFDWixLQURZOztBQUVsQixTQUFLLEtBQUwsR0FBYSxFQUFFLE1BQU0sRUFBUixFQUFiO0FBQ0EsU0FBSyxZQUFMLEdBQW9CLE9BQUssWUFBTCxDQUFrQixJQUFsQixRQUFwQjtBQUNBLFNBQUssYUFBTCxHQUFxQixPQUFLLGFBQUwsQ0FBbUIsSUFBbkIsUUFBckI7QUFKa0I7QUFLbEI7Ozs7K0JB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RVE7QUFDUixVQUNDO0FBQUE7SUFBQSxFQUFLLFdBQVUsYUFBZjtJQUNDO0FBQUE7S0FBQSxFQUFLLFdBQVUsK0JBQWY7S0FDQztBQUFBO01BQUEsRUFBSyxXQUFVLGlCQUFmO01BQ0M7QUFBQTtPQUFBO09BQUE7QUFBQTtBQURELE1BREQ7S0FJQztBQUFBO01BQUEsRUFBSyxXQUFVLGlCQUFmO01BQ0M7QUFBQTtPQUFBO09BQUE7QUFBQTtBQURELE1BSkQ7S0FPQztBQUFBO01BQUEsRUFBSyxXQUFVLGlCQUFmO01BQ0M7QUFBQTtPQUFBO09BQUE7QUFBQTtBQUREO0FBUEQsS0FERDtJQVlDO0FBQUE7S0FBQSxFQUFLLFdBQVUsd0JBQWY7S0FDQyxvQkFBQyxXQUFELE9BREQ7S0FFQyxvQkFBQyxRQUFELE9BRkQ7S0FHQyxvQkFBQyxRQUFEO0FBSEQ7QUFaRCxJQUREO0FBb0JBOzs7O0VBMUJtQyxNQUFNLFM7O2tCQUF0QixPO0FBMkJwQjs7QUFFRCxTQUFTLE1BQVQsQ0FBZ0Isb0JBQUMsT0FBRCxPQUFoQixFQUE0QixTQUFTLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBNUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxsaT5cclxuXHRcdFx0XHQ8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvNDB4NDBcIiAvPlxyXG5cdFx0XHRcdDxzdHJvbmc+e3RoaXMucHJvcHMudXNlcn06IDwvc3Ryb25nPlxyXG5cdFx0XHRcdDxzcGFuPnt0aGlzLnByb3BzLnRleHR9PC9zcGFuPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KTtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NoYXQtZmVlZCc+XHJcblx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLm1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVzc2FnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2l9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVzZXI9e21lc3NhZ2UudXNlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dD17bWVzc2FnZS50ZXh0fVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0geyB0ZXh0OiAnJyB9O1xyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5jaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dmFyIG1lc3NhZ2UgPSB7XHJcblx0XHRcdHVzZXIgOiB0aGlzLnByb3BzLnVzZXIsXHJcblx0XHRcdHRleHQgOiB0aGlzLnN0YXRlLnRleHRcclxuXHRcdH07XHJcblx0XHR0aGlzLnByb3BzLm9uTWVzc2FnZVN1Ym1pdChtZXNzYWdlKTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoeyB0ZXh0IDogJycgfSk7XHJcblx0fVxyXG5cclxuXHRjaGFuZ2VIYW5kbGVyKGUpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoeyB0ZXh0IDogZS50YXJnZXQudmFsdWUgfSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2hhdC1zZW5kLW1lc3NhZ2UnPlxyXG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fVxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nVHlwZSBhIG1lc3NhZ2UuLi4nXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImlucHV0XCIgLz5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTsgXHJcblx0fVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRGZWVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHt1c2VyczogW10sIG1lc3NhZ2VzOiBbXSwgdGV4dDogJyd9O1xyXG5cdFx0dGhpcy5oYW5kbGVNZXNzYWdlU3VibWl0ID0gdGhpcy5oYW5kbGVNZXNzYWdlU3VibWl0LmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuIFxyXG5cdGhhbmRsZU1lc3NhZ2VTdWJtaXQobWVzc2FnZSkge1xyXG5cdFx0Ly9oYW5kbGUgc3VibWl0IG1lc3NhZ2VcclxuXHRcdHZhciB7bWVzc2FnZXN9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGlmIChtZXNzYWdlLnRleHQpIHtcclxuXHRcdFx0bWVzc2FnZXMucHVzaChtZXNzYWdlKTtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7bWVzc2FnZXN9KTtcclxuXHRcdH1cclxuXHRcdC8vdG9kbyBzb2NrZXQgZW1pdFxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBtZWRpdW0tOCBjaGF0Jz5cclxuXHRcdFx0XHQ8TWVzc2FnZUxpc3RcclxuXHRcdFx0XHRcdG1lc3NhZ2VzPXt0aGlzLnN0YXRlLm1lc3NhZ2VzfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PE1lc3NhZ2VGb3JtXHJcblx0XHRcdFx0XHRvbk1lc3NhZ2VTdWJtaXQ9e3RoaXMuaGFuZGxlTWVzc2FnZVN1Ym1pdH1cclxuXHRcdFx0XHRcdHVzZXI9J0Vza2EnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGxpPlxyXG5cdFx0XHRcdDxpbWcgc3JjPSdodHRwOi8vcGxhY2Vob2xkLml0LzQweDQwJyAvPlxyXG5cdFx0XHRcdDxzcGFuPnt0aGlzLnByb3BzLnVzZXJOYW1lfTwvc3Bhbj5cclxuXHRcdFx0PC9saT5cclxuXHRcdCk7XHJcblx0fVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ubGluZVVzZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7IHVzZXJzOiBbJ0Vza2EnLCAnTG9sMTIzJywgJ0ltYmEnLCAnRmV0dGEnLCAnbG9sJ10gfTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gbWVkaXVtLTIgb25saW5lLXBlb3BsZSc+XHJcblx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnVzZXJzLm1hcCgodXNlciwgaSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8VXNlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2l9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVzZXJOYW1lPXt1c2VyfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gbWVkaXVtLTIgY2hhdC1zZXR0aW5ncyc+XHJcblxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2hhdC13aW5kb3cnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgY29sbGFwc2UgZnVsbFdpZHRoIGhlYWRlcic+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIG1lZGl1bS0yJz5cclxuXHRcdFx0XHRcdFx0PGg1Pk9ubGluZSB1c2VyczwvaDU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gbWVkaXVtLTgnPlxyXG5cdFx0XHRcdFx0XHQ8aDU+RXNrYSBjaGF0ITwvaDU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gbWVkaXVtLTInPlxyXG5cdFx0XHRcdFx0XHQ8aDU+U2V0dGluZ3M8L2g1PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JvdyBjb2xsYXBzZSBmdWxsV2lkdGgnPlxyXG5cdFx0XHRcdFx0PE9ubGluZVVzZXJzIC8+XHJcblx0XHRcdFx0XHQ8Q2hhdEZlZWQgLz5cclxuXHRcdFx0XHRcdDxTZXR0aW5ncyAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59O1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxDaGF0QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0LWFwcCcpKTsiXX0=
