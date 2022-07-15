import classNames from "classnames/bind"
import PropTypes from "prop-types"

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

MenuItem.protoTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
}

export default MenuItem