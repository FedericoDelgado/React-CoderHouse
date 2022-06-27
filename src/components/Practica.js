import { Component, useState } from "react"
import Hello from "./Hello";

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'ReactClass'
        };
    }

    updateName = () => {
        this.setState ({ name: 'ReactFunction'});
    }

    render() {
        return (
            <div onClick={this.updateName}>
                <Hello name={this.state.name} />
            </div>
        );
    }
}



