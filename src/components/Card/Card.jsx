import styles from './Card.module.css';

const Card = ({ extension, onRemoveExtension, onToggleExtension }) => {
    return (
        <li>
            <div className={styles.content}>
                <img src={extension.logo} alt='' />
                <div>
                    <h3>{extension.title}</h3>
                    <p className={styles.description}>
                        {extension.description}
                    </p>
                </div>
            </div>
            <div className={styles.actions}>
                <button
                    className={styles.btn}
                    onClick={() => onRemoveExtension(extension.id)}
                >
                    Remove
                </button>
                <label className={styles.toggle}>
                    <input
                        type='checkbox'
                        className={styles['toggle-input']}
                        value={extension.isActive}
                        onChange={() => onToggleExtension(extension.id)}
                        checked={extension.isActive ? 'checked' : ''}
                    />
                    <span className={styles.switch}></span>
                </label>
            </div>
        </li>
    );
};

export default Card;
