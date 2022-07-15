import classNames from "classnames/bind"

import Button from "../../Button"
import styles from "./Menu.module.scss"

const cx = classNames.bind(styles)

function MenuItem({data, onClick}) {
    const classes = cx("menu-item", {
        separate: data.separate
    })

    return <Button icon={data.icon} to={data.to} onClick={onClick} className={classes}>
        {data.title}
    </Button>
}

export default MenuItem