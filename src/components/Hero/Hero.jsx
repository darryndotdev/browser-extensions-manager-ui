import styles from './Hero.module.css';
import logo from './../../assets/logo.svg';
import sun from './../../assets/icon-sun.svg';

const Hero = () => {
    return (
        <header className={styles.hero}>
            <div className={styles.logo}>
                <img src={logo} alt='' />
                <h1>Extensions</h1>
            </div>
            <div>
                <button className={styles.btn}>
                    <img src={sun} alt='' />
                </button>
            </div>
        </header>
    );
};

export default Hero;
