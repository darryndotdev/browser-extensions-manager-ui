import styles from './Hero.module.css';
import logo from './../../assets/logo.svg';
import LightModeToggle from '../LightModeToggle/LightModeToggle';

const Hero = () => {
    return (
        <header className={styles.hero}>
            <div className={styles.logo}>
                <img src={logo} alt='' />
                <h1>Extensions</h1>
            </div>
            <div>
                <LightModeToggle />
            </div>
        </header>
    );
};

export default Hero;
