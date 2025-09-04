import styles from './Card.module.css';

const Card = ({ item }) => {
    return (
        <li>
            <div className={styles.content}>
                <img src={item.logo} alt='' />
                <div>
                    <h3>{item.title}</h3>
                    <p className={styles.description}>{item.description}</p>
                </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.btn}>Remove</button>
                <label className={styles.toggle}>
                    <input type='checkbox' className={styles['toggle-input']} />
                    <span className={styles.switch}></span>
                </label>
            </div>
        </li>
    );
};

export default Card;
