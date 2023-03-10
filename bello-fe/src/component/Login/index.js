import './index.css';
import { useState } from 'react';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');

    const clickContinue = (e) => {
        e.stopPropagation();
        setEmailErr('');
        const regex = "/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/";
        if (!email.match(regex)) {
            setEmailErr('Invalid Email.');
            return;
        }
        
        console.log('Login Successfully')
        
    }
    return (
        <div className='login-page'>
            <div className='login-logo'>
                    <h1>
                        BELLO
                    </h1>
                </div>
            <div className='login-main'>
                <div className='login-title'>
                    Log in to Bello                   
                </div>
                <div className='login-form'>
                    <div className='login-content'>
                        <input
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    {
                        emailErr && 
                        <div className='login-err'>
                            <span>
                                {emailErr}
                            </span>
                        </div>
                    }
                    <div className='login-content'>
                        <input  
                            type='password'
                            placeholder='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div  className='login-content login-ctn' onClick={clickContinue}>
                        <span>
                            Continue
                        </span>
                    </div> 
                </div>
                <div className='login-mockup'>
                    <div  className=''>
                        <span>OR </span>
                    </div> 
                    <div className='login-content login-mockup-content'>
                        <span id='google-icon' className='icon'></span>
                        <span className='login-mockup-label'>
                            Continue with Google
                        </span>
                    </div> 
                    <div className='login-content login-mockup-content'>
                        <span id='ms-icon' className='icon'></span>
                        <span className='login-mockup-label'>
                            Continue with Microsoft
                        </span>
                    </div> 
                    <div className='login-content login-mockup-content'>
                        <span id='apple-icon' className='icon'></span>
                        <span className='login-mockup-label'>
                            Continue with Apple
                        </span>
                    </div> 
                    <div className='login-content login-mockup-content'>
                        <span id='slack-icon' className='icon'></span>
                        <span className='login-mockup-label'>
                            Continue with Slack
                        </span>
                    </div> 
                </div>
                <div className='login-bottom'>
                    <div className='login-bottom-wrapper'>
                        <span>
                            Login as demo user
                        </span>
                        <span>
                            Sign up for an account
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
