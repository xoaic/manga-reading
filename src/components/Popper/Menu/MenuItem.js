import classNames from "classnames/bind"

import Button from "../../Button"
import styles from "./Menu.module.scss"

const cx = classNames.bind(styles)

function MenuItem({data, onClick}) {
    return <Button icon={data.icon} to={data.to} onClick={onClick} className={cx("menu-item")}>
        {data.title}
    </Button>
}

export default MenuItem