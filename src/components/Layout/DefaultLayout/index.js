import Header from "../components/Header";
import LSidebar from "./LSidebar";
import RSidebar from "./RSidebar";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout({ children }) {
    return (
        <div className={styles["wrapper"]}>
            <Header />
            <div className={styles["container"]}>
                <LSidebar />
                <div className={styles["content"]}>
                    {children}
                </div>
                <RSidebar />
            </div>
        </div>
    )
}

export default DefaultLayout;