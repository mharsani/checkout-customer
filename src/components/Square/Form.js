import React, {Component} from 'react';

class  Form extends Component {
    constructor () {
        super()
        this.state = {
            value: "valor inicial"
        }
    }
    render() {
        return (
                <div>
                <form>
                    <input type='text' value={this.state.value} onChange={(e) => {
                        console.log(e);
                        this.setState({
                            value: e.target.value
                        })
                    }} />
                </form>
            </div>
        )
    }
     

}

export default Form;