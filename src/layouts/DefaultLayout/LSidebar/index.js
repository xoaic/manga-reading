import classNames from "classnames/bind"

import styles from "./LSidebar.module.scss"

const cx = classNames.bind(styles)

function LSidebar() {
    return <aside className={cx("wrapper")}>
        <h2>Left Sidebar</h2>
    </aside>
}

export default LSidebar;