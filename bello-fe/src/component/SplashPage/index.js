import styles from './index.module.css';
import { Link } from 'react-router-dom';

const SplashPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.section}>
                <div className={styles.columnLeft}>
                    <h1>
                        Bello brings all your tasks, teammates, and tools together
                    </h1>
                    <p>
                        Keep everything in the same place-even if your team isn't.
                    </p>
                    <div>
                        <button>Sign up - it's free</button>
                        <Link> Watch video</Link>
                    </div>
                </div>
                <div className={styles.columnRight}>

                </div>
            </div>
        </div>
    )
}
    

export default SplashPage;
