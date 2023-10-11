import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
/*contact me page*/

export default function ContactMe() {

    const [email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Message, setMessage] = useState('')

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
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
    
        setEmail('');
        setName('');
        setMessage('');
      };
    return (
        //<h1>Contact Me</h1>
        <div className="container text-center">
            <div className='row'>
                <h3>Get in touch..</h3>
            </div>
            <form className="form" onSubmit={handleFormSubmit}>
                <div id="input-row" className='row justify-content-center'>
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
                <div id="input-row" className='row justify-content-center'>
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
                <div id="input-row" className='row justify-content-center'>
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
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <button id="sub_btn" type="submit">Send</button>
                    </div>
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

