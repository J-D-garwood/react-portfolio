import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function ContactMe() {

    const [email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Message, setMessage] = useState('')

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'name') {
          setName(inputValue);
        } else if (inputType === 'message') {
          setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        if (!validateEmail(email)) {
          setErrorMessage('Email is invalid');
          return;
        }
        if (!email||!Name||!Message) {
            setErrorMessage('Please fill in all fields');
        }
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setEmail('');
        setName('');
        setMessage('');
      };
    return (
        //<h1>Contact Me</h1>
        <div className="container text-center">
            <form className="form" onSubmit={handleFormSubmit}>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <input
                            value={Name}
                            name="Name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="name"
                            required
                        />
                    </div>
                </div> 
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="email"
                            required
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <input
                            value={Message}
                            name="message"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="message"
                            required
                        />
                    </div>
                </div>             
                <div className='row'>
                    <button type="submit">Submit</button>
                </div>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

