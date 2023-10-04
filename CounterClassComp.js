import React, { Component } from "react";

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementHandler = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrementHandler = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.incrementHandler}>Increment</button>  {this.state.count}
                <button type="button" onClick={this.decrementHandler}>Decrement</button>
            </div>
        );
    }
}

export default CounterClass;
