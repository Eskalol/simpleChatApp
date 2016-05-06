
export default class Message extends React.Component {
	render() {
		return (
			<li>
				<img src="http://placehold.it/40x40" />
				<strong>{this.props.user} :</strong>
				<span>{this.props.text}</span>
			</li>
		);
	}
};



export default class MessageList extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className='chat-feed'>
				<ul>
					{
						this.props.messages.map((message, i) => {
							return (
								<Message
									key={i}
									user={message.user}
									text={message.text}
								/>
							);
						})
					}
				</ul>
			</div>
		);
	}
};



export default class MessageForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { text: '' };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		var message = {
			user : this.props.user,
			text : this.state.text
		};
		this.props.onMessageSubmit(message);
		this.setState({ text : '' });
	}

	changeHandler(e) {
		this.setState({ text : e.target.value });
	}

	render() {
		return (
			<div className='chat-send-message'>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						onChange={this.changeHandler}
						value={this.state.text}
						placeholder='Type a message...'
						className="input" />
				</form>
			</div>
		); 
	}
};


export default class ChatFeed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {users: [], messages: [], text: ''};
		this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
	}


	handleMessageSubmit(message) {
		var {messages} = this.state;
		messages.push(message);
		this.setState({messages});
		//todo socket emit
	}

	render() {
		return (
			<div className='column medium-8 chat'>
				<MessageList
					messages={this.state.messages}
				/>
				<MessageForm
					onMessageSubmit={this.handleMessageSubmit}
					user='Eska'
				/>
			</div>
		);
	}
};


export default class ChatApp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='row collapse fullWidth'>
				<div className='column medium-2 online-people'>
					<ul>
						<li>
							<img src='http://placehold.it/40x40' />
							<span> lol </span>
						</li>
						<li>
							<img src='http://placehold.it/40x40' />
							<span> Eska </span>
						</li>
						<li>
							<img src='http://placehold.it/40x40' />
							<span> Imba </span>
						</li>
						<li>
							<img src='http://placehold.it/40x40' />
							<span> superLol </span>
						</li>
						<li>
							<img src='http://placehold.it/40x40' />
							<span> smiley </span>
						</li>
						<li>
							<img src='http://placehold.it/40x40' />
							<span> youtube </span>
						</li>
					</ul>
				</div>
				<ChatFeed/>
				<div className='column medium-2 chat-settings'>
					sadaasd
				</div>
			</div>
		);
	}

};

ReactDOM.render(<ChatApp/>, document.getElementById('chat-app'));