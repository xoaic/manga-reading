import classNames from "classnames/bind"
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import styles from "./Menu.module.scss"
import PropTypes from "prop-types";

const cx = classNames.bind(styles)

function Header({title, onBack}) {
    return (
        <header className={cx("menu-header")}>
            <button className={cx("back-btn")} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx("header-title")}>{title}</h4>
        </header>
    )
}

Header.protoTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired
}

export default Header