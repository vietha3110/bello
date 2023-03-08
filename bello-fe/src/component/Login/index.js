import './index.css';
const Login = () => {
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
                            type='text'
                            placeholder='Enter email'
                        />
                    </div>
                    <div className='login-content'>
                        <input  
                            type='password'
                            placeholder='password'
                        />
                    </div>
                    <div  className='login-content login-ctn'>
                        <span>
                            Continue
                        </span>
                    </div> 
                </div>
                <div className='login-mockup'>
                    <div  className=''>
                        <span>OR </span>
                    </div> 
                    <div  className='login-content login-mockup-content'>
                        <span>
                            Continue with Google
                        </span>
                    </div> 
                    <div  className='login-content login-mockup-content'>
                        <span>
                            Continue with Microsoft
                        </span>
                    </div> 
                    <div className='login-content login-mockup-content'>
                        <span>
                            Continue with Apple
                        </span>
                    </div> 
                    <div className='login-content login-mockup-content'>
                        <span>
                            Continue with Slack
                        </span>
                    </div> 

                </div>
            </div>
        </div>
    )
}

export default Login;
