import styles from "../containers/home/style/Newarrival.module.css";

const ViewAllButtons = ({disabled}) => {
    return (
        <div className={styles['button-container']}>
            <button className={styles['view-all-button']} disabled={disabled}>
                VIEW ALL
            </button>
        </div>
    )
}
export default ViewAllButtons;