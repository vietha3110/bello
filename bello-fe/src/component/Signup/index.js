import './index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [firstNameErr, setFirstNameErr] = useState('');
    const [lastNameErr, setLastNameErr] = useState('');
    const [userNameErr, setUserNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [confirmedPasswordErr, setConfirmedPasswordErr] = useState('');


    const onClickContinue = (e) => {
        e.stopPropagation();
        //check validation here
    }

    return (
        <div className='signup-container'>
        <div className='signup-page'>
            <div className='signup-logo'>
                    <h1>
                        BELLO
                    </h1>
                </div>
            <div className='signup-main'>
                <div className='signup-title'>
                    Sign up for your acount
                </div>
                <div className='signup-form'>
                    <div className='signup-content'>
                        <input
                            type='text'
                            placeholder='First Name' 
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}    
                        />
                    </div>    
                    <div className='signup-content'>
                        <input
                            type='text'
                            placeholder='Last Name' 
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}    
                        />
                    </div>  
                    <div className='signup-content'>
                        <input
                            type='text'
                            placeholder='Username'    
                            value={userName}
                            onChange={e => setUserName(e.target.value)}    
                        />
                    </div>      
                    <div className='signup-content'>
                        <input
                            type='email'
                            placeholder='Enter email'    
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='signup-content'>
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='signup-content'>
                        <input
                            type='password'
                            placeholder='Confirmed password'
                            value={confirmedPassword}
                            onChange={e => setConfirmedPassword(e.target.value)}
                        />
                    </div >    

                    <div  className='signup-content signup-ctn ' >
                        <span>
                            Continue
                        </span>
                    </div>
        
                </div>
                <div className='signup-mockup'>
                    <div  className=''>
                        <span>OR </span>
                    </div>
                    <div className='signup-content signup-mockup-content'>
                        <span id='google-icon' className='icon'></span>
                        <span className='signup-mockup-label'>
                            Continue with Google
                        </span>
                    </div>
                    <div className='signup-content signup-mockup-content'>
                        <span id='ms-icon' className='icon'></span>
                        <span className='signup-mockup-label'>
                            Continue with Microsoft
                        </span>
                    </div>
                    <div className='signup-content signup-mockup-content'>
                        <span id='apple-icon' className='icon'></span>
                        <span className='signup-mockup-label'>
                            Continue with Apple
                        </span>
                    </div>
                    <div className='signup-content signup-mockup-content'>
                        <span id='slack-icon' className='icon'></span>
                        <span className='signup-mockup-label'>
                            Continue with Slack
                        </span>
                    </div>
                </div>
                <div className='signup-bottom'>
                    <div className='signup-bottom-wrapper'>
                        <Link to='/login'>
                        Already have an account? Log In
                        </Link>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp;
