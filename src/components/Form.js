import React from 'react';
import '../assets/style.css';

const Form = (props) => {
    const { handleChange, handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
              <input
                    type="text"
                    name='firstName'
                    placeholder="Enter your first name" />
            </label>
            <label>
                Last Name:
              <input type="text"
                    name='lastName' placeholder="Enter last name"
                    onChange={handleChange}
                    placeholder="Enter your last name" />
            </label>
            <label>
                NPI Number:
              <input
                    type="number"
                    name='npiNumber'
                    onChange={handleChange}
                    placeholder="Enter your NPI number" />
            </label>
            <label>
                Business Address:
              <input
                    type="text"
                    name='businessAddress'
                    onChange={handleChange}
                    placeholder="Enter your business address" />
            </label>
            <label>
                Telephone Number:
              <input
                    type="text"
                    name='telephoneNumber'
                    onChange={handleChange}
                    placeholder="Enter yourphone number" />
            </label>
            <label>
                Email Address:
              <input
                    type="email"
                    name='emailAddress'
                    onChange={handleChange}
                    placeholder="Enter your email" />
            </label>
            <input type="submit" value="Submit" className='submitBtn' />
        </form>
    );

};

export default Form;