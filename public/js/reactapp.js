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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUNDcUIsTzs7Ozs7Ozs7Ozs7MkJBQ1g7QUFDUixVQUNDO0FBQUE7SUFBQTtJQUNDLDZCQUFLLEtBQUksMkJBQVQsR0FERDtJQUVDO0FBQUE7S0FBQTtLQUFTLEtBQUssS0FBTCxDQUFXLElBQXBCO0tBQUE7QUFBQSxLQUZEO0lBR0M7QUFBQTtLQUFBO0tBQU8sS0FBSyxLQUFMLENBQVc7QUFBbEI7QUFIRCxJQUREO0FBT0E7Ozs7RUFUbUMsTUFBTSxTOztrQkFBdEIsTztBQVVwQjs7SUFHb0IsVzs7O0FBRXBCLHNCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3RkFDWixLQURZO0FBRWxCOzs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0lBQUEsRUFBSyxXQUFVLFdBQWY7SUFDQztBQUFBO0tBQUE7S0FFRSxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLFVBQUMsT0FBRCxFQUFVLENBQVYsRUFBZ0I7QUFDdkMsYUFDQyxvQkFBQyxPQUFEO0FBQ0MsWUFBSyxDQUROO0FBRUMsYUFBTSxRQUFRLElBRmY7QUFHQyxhQUFNLFFBQVE7QUFIZixRQUREO0FBT0EsTUFSRDtBQUZGO0FBREQsSUFERDtBQWlCQTs7OztFQXhCdUMsTUFBTSxTOztrQkFBMUIsVztBQXlCcEI7O0lBR29CLFc7OztBQUVwQixzQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEZBQ1osS0FEWTs7QUFFbEIsU0FBSyxLQUFMLEdBQWEsRUFBRSxNQUFNLEVBQVIsRUFBYjtBQUNBLFNBQUssWUFBTCxHQUFvQixPQUFLLFlBQUwsQ0FBa0IsSUFBbEIsUUFBcEI7QUFDQSxTQUFLLGFBQUwsR0FBcUIsT0FBSyxhQUFMLENBQW1CLElBQW5CLFFB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RkFDWixLQURZO0FBRWxCOzs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0lBQUEsRUFBSyxXQUFVLGFBQWY7SUFDQztBQUFBO0tBQUEsRUFBSyxXQUFVLCtCQUFmO0tBQ0M7QUFBQTtNQUFBLEVBQUssV0FBVSxpQkFBZjtNQUNDO0FBQUE7T0FBQTtPQUFBO0FBQUE7QUFERCxNQUREO0tBSUM7QUFBQTtNQUFBLEVBQUssV0FBVSxpQkFBZjtNQUNDO0FBQUE7T0FBQTtPQUFBO0FBQUE7QUFERCxNQUpEO0tBT0M7QUFBQTtNQUFBLEVBQUssV0FBVSxpQkFBZjtNQUNDO0FBQUE7T0FBQTtPQUFBO0FBQUE7QUFERDtBQVBELEtBREQ7SUFZQztBQUFBO0tBQUEsRUFBSyxXQUFVLHdCQUFmO0tBQ0Msb0JBQUMsV0FBRCxPQUREO0tBRUMsb0JBQUMsUUFBRCxPQUZEO0tBR0Msb0JBQUMsUUFBRDtBQUhEO0FBWkQsSUFERDtBQW9CQTs7OztFQTFCbUMsTUFBTSxTOztrQkFBdEIsTztBQTJCcEI7O0FBRUQsU0FBUyxNQUFULENBQWdCLG9CQUFDLE9BQUQsT0FBaEIsRUFBNEIsU0FBUyxjQUFULENBQXdCLFVBQXhCLENBQTVCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpPlxuXHRcdFx0XHQ8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvNDB4NDBcIiAvPlxuXHRcdFx0XHQ8c3Ryb25nPnt0aGlzLnByb3BzLnVzZXJ9OiA8L3N0cm9uZz5cblx0XHRcdFx0PHNwYW4+e3RoaXMucHJvcHMudGV4dH08L3NwYW4+XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2hhdC1mZWVkJz5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMubWVzc2FnZXMubWFwKChtZXNzYWdlLCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PE1lc3NhZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17aX1cblx0XHRcdFx0XHRcdFx0XHRcdHVzZXI9e21lc3NhZ2UudXNlcn1cblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9e21lc3NhZ2UudGV4dH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7IHRleHQ6ICcnIH07XG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aGFuZGxlU3VibWl0KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIG1lc3NhZ2UgPSB7XG5cdFx0XHR1c2VyIDogdGhpcy5wcm9wcy51c2VyLFxuXHRcdFx0dGV4dCA6IHRoaXMuc3RhdGUudGV4dFxuXHRcdH07XG5cdFx0dGhpcy5wcm9wcy5vbk1lc3NhZ2VTdWJtaXQobWVzc2FnZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHRleHQgOiAnJyB9KTtcblx0fVxuXG5cdGNoYW5nZUhhbmRsZXIoZSkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyB0ZXh0IDogZS50YXJnZXQudmFsdWUgfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjaGF0LXNlbmQtbWVzc2FnZSc+XG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudGV4dH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdUeXBlIGEgbWVzc2FnZS4uLidcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImlucHV0XCIgLz5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTsgXG5cdH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdEZlZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge3VzZXJzOiBbXSwgbWVzc2FnZXM6IFtdLCB0ZXh0OiAnJ307XG5cdFx0dGhpcy5oYW5kbGVNZXNzYWdlU3VibWl0ID0gdGhpcy5oYW5kbGVNZXNzYWdlU3VibWl0LmJpbmQodGhpcyk7XG5cdH1cblxuIFxuXHRoYW5kbGVNZXNzYWdlU3VibWl0KG1lc3NhZ2UpIHtcblx0XHQvL2hhbmRsZSBzdWJtaXQgbWVzc2FnZVxuXHRcdHZhciB7bWVzc2FnZXN9ID0gdGhpcy5zdGF0ZTtcblx0XHRpZiAobWVzc2FnZS50ZXh0KSB7XG5cdFx0XHRtZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7bWVzc2FnZXN9KTtcblx0XHR9XG5cdFx0Ly90b2RvIHNvY2tldCBlbWl0XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gbWVkaXVtLTggY2hhdCc+XG5cdFx0XHRcdDxNZXNzYWdlTGlzdFxuXHRcdFx0XHRcdG1lc3NhZ2VzPXt0aGlzLnN0YXRlLm1lc3NhZ2VzfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8TWVzc2FnZUZvcm1cblx0XHRcdFx0XHRvbk1lc3NhZ2VTdWJtaXQ9e3RoaXMuaGFuZGxlTWVzc2FnZVN1Ym1pdH1cblx0XHRcdFx0XHR1c2VyPSdFc2thJ1xuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaT5cblx0XHRcdFx0PGltZyBzcmM9J2h0dHA6Ly9wbGFjZWhvbGQuaXQvNDB4NDAnIC8+XG5cdFx0XHRcdDxzcGFuPnt0aGlzLnByb3BzLnVzZXJOYW1lfTwvc3Bhbj5cblx0XHRcdDwvbGk+XG5cdFx0KTtcblx0fVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbmxpbmVVc2VycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHsgdXNlcnM6IFsnRXNrYScsICdMb2wxMjMnLCAnSW1iYScsICdGZXR0YScsICdsb2wnXSB9O1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIG1lZGl1bS0yIG9ubGluZS1wZW9wbGUnPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS51c2Vycy5tYXAoKHVzZXIsIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8VXNlclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRcdFx0XHRcdFx0dXNlck5hbWU9e3VzZXJ9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBtZWRpdW0tMiBjaGF0LXNldHRpbmdzJz5cblxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0QXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjaGF0LXdpbmRvdyc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgY29sbGFwc2UgZnVsbFdpZHRoIGhlYWRlcic+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBtZWRpdW0tMic+XG5cdFx0XHRcdFx0XHQ8aDU+T25saW5lIHVzZXJzPC9oNT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIG1lZGl1bS04Jz5cblx0XHRcdFx0XHRcdDxoNT5Fc2thIGNoYXQhPC9oNT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIG1lZGl1bS0yJz5cblx0XHRcdFx0XHRcdDxoNT5TZXR0aW5nczwvaDU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93IGNvbGxhcHNlIGZ1bGxXaWR0aCc+XG5cdFx0XHRcdFx0PE9ubGluZVVzZXJzIC8+XG5cdFx0XHRcdFx0PENoYXRGZWVkIC8+XG5cdFx0XHRcdFx0PFNldHRpbmdzIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufTtcblxuUmVhY3RET00ucmVuZGVyKDxDaGF0QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0LWFwcCcpKTsiXX0=
