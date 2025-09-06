import styles from './ExtensionFilter.module.css';

const ExtensionFilter = ({ onSetSortBy, input }) => {
    return (
        <div className={styles.filter}>
            <h2>Extensions List</h2>
            <form>
                <fieldset>
                    <label>
                        <input
                            type='radio'
                            name='input'
                            value='all'
                            onChange={(e) => onSetSortBy(e.target.value)}
                            checked={input === 'all' ? 'checked' : ''}
                        />
                        <span className={styles.btn} tabIndex='1'>
                            All
                        </span>
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='input'
                            value='active'
                            onChange={(e) => onSetSortBy(e.target.value)}
                        />
                        <span className={styles.btn} tabIndex='2'>
                            Active
                        </span>
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='input'
                            value='inactive'
                            onChange={(e) => onSetSortBy(e.target.value)}
                        />
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
