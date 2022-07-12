import classNames from "classnames/bind"
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import styles from "./Menu.module.scss"

const cx = classNames.bind(styles)

function Menu({title, onBack}) {
    return (
        <header className={cx("menu-header")}>
            <button className={cx("back-btn")} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx("header-title")}>{title}</h4>
        </header>
    )
}

export default Menu