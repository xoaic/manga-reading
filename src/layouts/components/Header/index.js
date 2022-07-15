import classNames from "classnames/bind"
import Tip from '@tippyjs/react'
import "tippy.js/dist/tippy.css"
import { Link } from "react-router-dom"
import config from "../../../config"
import { useState } from "react"

import styles from "./Header.module.scss"
import Menu from "../../../components/Popper/Menu"
import {
    GuestIcob,
    LogoutIcon,
    ProfileIcon,
    SearchIcon,
    SidebarIcon,
    SwitchIcon,
    UploadIcon
} from "../../../components/Icon"
import Image from "../../../components/Image"
import images from "../../../assets/images"
import SearchBar from "../SearchBar"

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <ProfileIcon />,
        title: "Xem hồ sơ",
        to: config.routes.profile
    },
    {
        icon: <UploadIcon />,
        title: "Đăng truyện",
        to: config.routes.upload
    },
    {
        icon: <LogoutIcon />,
        title: "Đăng xuất",
        separate: true
    },
]

function Header() {
    const [currentUser, setCurrentUser] = useState(false)

    return <header className={cx("wrapper")}>
        <div className={cx("inner")}>
            <Link to={config.routes.home} className={cx("logo")}><img src={images.logo} border="0" alt="Logo"/></Link>

            <SearchBar />

            <div className={cx("action-bar")}>
                {currentUser ? (
                    <>
                        <Tip delay={[0, 200]} content={"Sáng/tối"} placement={"bottom"}>
                            <button className={cx("action-btn")}>
                                <SwitchIcon />
                            </button>
                        </Tip>
                        <Tip delay={[0, 200]} content={"Tìm kiếm"} placement={"bottom"}>
                            <button className={cx("action-btn")}>
                                <SearchIcon />
                            </button>
                        </Tip>
                        <Menu items={MENU_ITEMS}>
                            <button>
                                <Image src={""}
                                     className={cx("user-avatar")}
                                     alt={"Phùng Thanh Độ"}
                                       fallback={images.placeholderUser50}
                                />
                            </button>
                        </Menu>
                        <Tip delay={[0, 200]} content={"Thanh bên"} placement={"bottom"}>
                            <button className={cx("action-btn")}>
                                <SidebarIcon />
                            </button>
                        </Tip>
                    </>
                ) : (
                    <>
                        <Tip delay={[0, 200]} content={"Sáng/tối"} placement={"bottom"}>
                            <button className={cx("action-btn")}>
                                <SwitchIcon />
                            </button>
                        </Tip>
                        <Tip delay={[0, 200]} content={"Tìm kiếm"} placement={"bottom"}>
                            <button className={cx("action-btn")}>
                                <SearchIcon />
                            </button>
                        </Tip>
                        <Tip delay={[0, 200]} content={"Đăng nhập"} placement={"bottom"}>
                            <button className={cx("action-btn")} onClick={() => {
                                setCurrentUser(true)
                            }}>
                                <GuestIcob />
                            </button>
                        </Tip>
                        <Tip delay={[0, 200]} content={"Thanh bên"} placement={"bottom"}>
                            <button className={cx("action-btn")}>
                                <SidebarIcon />
                            </button>
                        </Tip>
                    </>
                )}
            </div>
        </div>
    </header>
}

export default Header;