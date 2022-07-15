import classNames from "classnames/bind"
import PropTypes from "prop-types"
import Tippy from "@tippyjs/react/headless"

import { Wrapper as PopperWrapper } from "../../Popper"
import styles from "./Menu.module.scss"
import MenuItem from "./MenuItem"
import Header from "./Header"
import { useState } from "react"

const cx = classNames.bind(styles)

const defaultFunc = () => {}

function Menu({children, items = [], hideOnClick = false, onChange = defaultFunc, ...passProps}) {
    const [history, setHistory] = useState([{data: items}])
    const currentMenu = history[history.length - 1]

    const renderItems = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) setHistory(prev => [...prev, item.children])
                else onChange(item)
            }} />
        })
    }

    // Back to previous menu page
    const handleBackMenu = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    }

    const renderResult = (attrs) => (
        <div className={cx("menu-list")} tabIndex={-1} {...attrs}>
            <PopperWrapper className={cx("menu-items")}>
                {history.length > 1 &&
                    <Header title={currentMenu.title}
                            onBack={handleBackMenu}
                    />}
                <div className={cx("menu-body")}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    )

    // Reset to first menu page
    const handleResetMenu = () => {
        setHistory(prev => prev.slice(0, 1))
    }

    return (
        <div>
            <Tippy
                interactive
                delay={[0, 700]}
                offset={[12, 8]}
                hideOnClick={hideOnClick}
                placement={"bottom-end"}
                render={renderResult}
                onHide={handleResetMenu}
                {...passProps}>
                {children}
            </Tippy>
        </div>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu