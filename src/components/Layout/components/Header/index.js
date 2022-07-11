import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faSpinner, faSquareXmark} from "@fortawesome/free-solid-svg-icons"

function Header() {
    return <header className={styles["wrapper"]}>
        <div className={styles["inner"]}>
            <div className={styles["logo"]}>
                <a target="_top" href="https://flamingtext.com/" ><img src="https://blog.flamingtext.com/blog/2022/07/11/flamingtext_com_1657505368_1068342332.png" border="0" alt="Logo Design by FlamingText.com" title="Logo Design by FlamingText.com"/></a>
            </div>
            <div className={styles["search-bar"]}>
                <input placeholder={"Tìm truyện hoặc tác giả..."} spellCheck={false}/>
                <button className={styles["clear-btn"]}>
                    <FontAwesomeIcon icon={faSquareXmark} />
                </button>
                <FontAwesomeIcon className={styles["loading"]} icon={faSpinner} />
                <button className={styles["search-btn"]}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={"action-btn"}>

            </div>
        </div>
    </header>
}

export default Header;