import classNames from "classnames/bind"
import Tippy from "@tippyjs/react/headless"

import {Wrapper as PopperWrapper} from "../../Popper"
import styles from "./Menu.module.scss"
import MenuItem from "./MenuItem";
import Header from "./Header";
import {useState} from "react";

const cx = classNames.bind(styles)

const defaultFunc = () => {}

function Menu({children, items = [], onChange = defaultFunc}) {
    const [history, setHistory] = useState([{data: items}])
    const currentMenu = history[history.length - 1]

    const renderItems = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) setHistory(prev => [...prev, item.children])
                else onChange(item)
            }
            } />
        })
    }

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            placement={"bottom-end"}
            render={(attrs) => (
                <div className={cx("menu-list")} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx("menu-items")}>
                        {history.length > 1 && <Header title={"Ngôn ngữ"} onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    )
}

export default Menu