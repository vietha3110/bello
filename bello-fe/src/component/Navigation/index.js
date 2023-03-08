import './index.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="navbarLeft">
                <div>
                    Logo
                </div>
                <div>
                    <span>Features</span>
                </div>
                <div>
                    <span>Solution</span>
                </div>
                <div>
                    <span>Plans</span>
                </div>
                <div>
                    <span>Pricing</span>
                </div>
                <div>
                    <span>Resources</span>
                </div>
            </div>
            <div className="navbarRight">
                <div className='login'>
                    <Link to='/login'>Login</Link>
                </div>
                <div className='signup'> 
                    <span>Get Bello for free</span>
                </div>
            </div>
        </div>
    )
}

export default Navigation
