class Subject {
	constructor() {
		this.observers = [];
		this.state;
	}
	
	getState() {
		return this.state;
	}
	
	setState(state) {
		this.state = state;
		this.notifyAllObservers();
	}
	
	attach(observer) {
		this.observers.push(observer);
	}
	
	notifyAllObservers() {
		for(var i = 0; i < this.observers.length; i++) {
			this.observers[i].update();
		}
	}
}

class BinaryObserver {
	constructor(subject) {
		this.subject = subject;
		this.subject.attach(this);
	}
	
	update() {
		console.log('Binary String: ' + this.subject.getState().toString(16));
	}
}

class OctalObserver {
	constructor(subject) {
		this.subject = subject;
		this.subject.attach(this);
	}
	
	update() {
		console.log('Octal String: ' + this.subject.getState().toString(8));
	}
}

class HexaObserver {
	constructor(subject) {
		this.subject = subject;
		this.subject.attach(this);
	}
	
	update() {
		console.log('Hexa String: ' + this.subject.getState().toString(2));
	}
}

const subject = new Subject();
const hexa = new HexaObserver(subject);
const octal = new OctalObserver(subject);
const binary = new BinaryObserver(subject);

console.log('First state change: 15');	
subject.setState(15);
console.log('Second state change: 10');	
subject.setState(10);