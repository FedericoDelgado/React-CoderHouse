import { Component } from "react"

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


function Hello ({name}) {

    return(
        <p>
            Hello {name}!
        </p>
    )

}


export default Hello 