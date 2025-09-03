import styles from './ExtensionFilter.module.css';

const ExtensionFilter = () => {
    return (
        <div className={styles.filter}>
            <h2>Extensions List</h2>
            <form>
                <fieldset>
                    <label>
                        <input type='radio' name='input' />
                        <span className={styles.btn} tabIndex='1'>
                            All
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='input' />
                        <span className={styles.btn} tabIndex='2'>
                            Active
                        </span>
                    </label>
                    <label>
                        <input type='radio' name='input' />
                        <span className={styles.btn} tabIndex='3'>
                            Inactive
                        </span>
                    </label>
                </fieldset>
            </form>
        </div>
    );
};

export default ExtensionFilter;
