import React from 'react'
import '../styles/patientstyle.css'

class Patient extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container m-5 bg-light p-5">
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-md-6 col-form-label">Please enter a symptom (any one symptom,leave no any blank spaces before or after of it )</label>
                        <div className="col-md-6">
                            <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange}/>
                        </div>

                        <div className="col-md-12 ">
                            <input type="submit" className="btn btn-danger" value="Next"/>
                        </div>
                    </div>

                </form>

            </div>

        );
    }
}

export default Patient