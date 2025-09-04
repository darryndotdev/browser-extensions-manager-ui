import styles from './CardsGrid.module.css';

const CardsGrid = ({ children }) => {
    return <ul className={styles.grid}>{children}</ul>;
};

export default CardsGrid;
