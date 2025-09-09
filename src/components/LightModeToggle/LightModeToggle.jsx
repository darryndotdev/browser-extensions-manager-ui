import styles from './LightModeToggle.module.css';
import sun from './../../assets/icon-sun.svg';
import moon from './../../assets/icon-moon.svg';
import { useState } from 'react';

const LightModeToggle = () => {
    const [lightMode, setLightMode] = useState(true);

    function toggleLightMode() {
        setLightMode((prevMode) => !prevMode);
        console.log(lightMode);

        if (lightMode) {
            document.body.setAttribute('data-theme', 'light');
        } else {
            document.body.setAttribute('data-theme', '');
        }
    }

    return (
        <button className={styles.btn} onClick={toggleLightMode}>
            {lightMode ? <img src={sun} alt='' /> : <img src={moon} alt='' />}
        </button>
    );
};

export default LightModeToggle;
