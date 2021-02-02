import React, { Component } from 'react';
import Form from '../components/Form';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            npiNumber: '',
            businessAddress: '',
            telephoneNumber: '',
            emailAddress: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    handleSubmit(event) {
        const { firstName, lastName, npiNumber, businessAddress, telephoneNumber, emailAddress} = this.state;
        alert(`Request for ${firstName} ${lastName} was submited. Thank you`);
        console.log(`User registration request: ${firstName} ${lastName},
          NPI Number: ${npiNumber},
          Business Address : ${businessAddress},
          Telephone Number : ${telephoneNumber},
          Email: ${emailAddress}`);
          event.target.reset();
        event.preventDefault();
    }

    render() {
        return (
            <Form
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default Main;