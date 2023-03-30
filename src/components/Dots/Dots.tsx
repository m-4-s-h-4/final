import classNames from 'classnames';
import styles from './dots.module.css'; 

export const Dots = () =>{
    return(
        <div className={styles.component}>
        <div className={classNames(styles.dot, styles.d1)}></div>
        <div className={classNames(styles.dot, styles.d2)}></div>
        <div className={classNames(styles.dot, styles.d3)}></div>
        <div className={classNames(styles.dot, styles.d4)}></div>
        </div>
    );
}